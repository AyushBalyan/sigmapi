// utils/cache-utils.ts

// Types
export interface CacheConfig {
    maxAge: number; // in seconds
    staleWhileRevalidate: number; // in seconds
  }
  
  // Constants
  export const DEFAULT_CACHE_CONFIG: CacheConfig = {
    maxAge: 60 * 60 * 24, // 24 hours
    staleWhileRevalidate: 60 * 60 // 1 hour
  };
  
  // Cache header utility
  export const getImageCacheHeaders = (config: Partial<CacheConfig> = {}): HeadersInit => {
    const { maxAge, staleWhileRevalidate } = { ...DEFAULT_CACHE_CONFIG, ...config };
    
    return {
      'Cache-Control': `public, max-age=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
      'CDN-Cache-Control': `public, max-age=${maxAge}`,
      'Vercel-CDN-Cache-Control': `public, max-age=${maxAge}`,
    };
  };
  