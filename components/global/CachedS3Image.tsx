"use client"
import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { getS3ImageUrl } from '@/utils/s3-utils';
import { CacheConfig } from '@/utils/cache-utils';
import { SyntheticEvent } from 'react';

interface CachedS3ImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  cacheMaxAge?: number;
  cacheStaleWhileRevalidate?: number;
  onLoadingComplete?: () => void;
  onCustomError?: (error: Error) => void;
}

const CachedS3Image = ({
  src,
  cacheMaxAge,
  cacheStaleWhileRevalidate,
  onLoadingComplete,
  onCustomError,
  onError,
  priority = false,
  ...props
}: CachedS3ImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const cacheConfig: Partial<CacheConfig> = {
          maxAge: cacheMaxAge,
          staleWhileRevalidate: cacheStaleWhileRevalidate,
        };

        const s3Url = getS3ImageUrl(src, cacheConfig);
        setImageUrl(s3Url);

        // For priority images, preload using native browser API
        if (priority && typeof window !== 'undefined') {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.as = 'image';
          preloadLink.href = s3Url;
          document.head.appendChild(preloadLink);
        }
        
        setLoading(false);
        onLoadingComplete?.();
      } catch (err) {
        console.error('Error loading image:', err);
        const error = err instanceof Error ? err : new Error('Failed to load image');
        setError(error);
        onCustomError?.(error);
      }
    };

    loadImage();

    // Cleanup function for preload link
    return () => {
      if (priority && typeof window !== 'undefined') {
        const preloadLink = document.querySelector(`link[href="${imageUrl}"]`);
        if (preloadLink) {
          preloadLink.remove();
        }
      }
    };
  }, [src, cacheMaxAge, cacheStaleWhileRevalidate, priority, onLoadingComplete, onCustomError, imageUrl]);

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const error = new Error('Image failed to load');
    setError(error);
    onCustomError?.(error);
    onError?.(event);
  };

  if (error) {
    return (
      <div 
        className="bg-gray-200 animate-pulse rounded-lg" 
        style={{ ...props.style }}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Failed to load image
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div 
        className="bg-gray-200 animate-pulse rounded-lg" 
        style={{ ...props.style }}
      />
    );
  }

  return (
    <Image
      {...props}
      src={imageUrl}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleImageError}
      alt={props.alt || 'Image'}
    />
  );
};

export default CachedS3Image;