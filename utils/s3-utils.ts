// utils/s3-utils.ts
import { CacheConfig } from './cache-utils';

const S3_BUCKET_URL = process.env.NEXT_PUBLIC_S3_BUCKET_URL || '';

export const getS3ImageUrl = (imagePath: string, cacheConfig?: Partial<CacheConfig>): string => {
  if (!imagePath) {
    console.warn('No image path provided to getS3ImageUrl');
    return '';
  }

  try {
    // Remove leading slash if present
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    
    // Handle development environment
    if (process.env.NODE_ENV === 'development') {
      // Use a local path or development S3 bucket
      return `${S3_BUCKET_URL}/${cleanPath}`;
    }

    // Production environment
    return `${S3_BUCKET_URL}/${cleanPath}`;
  } catch (error) {
    console.error('Error generating S3 URL:', error);
    return '';
  }
};