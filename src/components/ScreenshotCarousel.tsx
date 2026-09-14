import React, { useState, useEffect, useRef } from 'react';

interface ScreenshotCarouselProps {
  images: string[];
  altTitle: string;
  isPaused?: boolean;
  className?: string;
}

export const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  images,
  altTitle,
  isPaused = false,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSelfHovered, setIsSelfHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [imageSources, setImageSources] = useState<string[]>(images);

  // Synchronize if images prop updates
  useEffect(() => {
    setImageSources(images);
    setFailedImages({});
    setCurrentIndex(0);
  }, [images]);

  // Pause if hovered either internally or via parent card hover
  const paused = isPaused || isSelfHovered;

  useEffect(() => {
    if (imageSources.length <= 1 || paused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [imageSources.length, paused]);

  const handleImageError = (index: number) => {
    const currentSrc = imageSources[index];
    // If the standard uc export link fails, try the lh3 direct CDN endpoint
    if (currentSrc && currentSrc.includes('drive.google.com')) {
      const match = currentSrc.match(/id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        const fallbackCdn = `https://lh3.googleusercontent.com/d/${match[1]}`;
        if (currentSrc !== fallbackCdn) {
          setImageSources((prev) => {
            const next = [...prev];
            next[index] = fallbackCdn;
            return next;
          });
          return;
        }
      }
    }

    // Otherwise mark as failed to show fallback design
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsSelfHovered(true)}
      onMouseLeave={() => setIsSelfHovered(false)}
    >
      {/* Sophisticated Fallback Canvas in case an image fails or while loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#201228] via-[#160d1b] to-[#0e0712] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 mb-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
        <span className="text-xs font-mono font-medium text-slate-300">{altTitle}</span>
        <span className="text-[11px] text-slate-500 mt-0.5">Interface Preview</span>
      </div>

      {/* Render 3 Images with Crossfade (transition duration: ~0.6s) */}
      {imageSources.map((src, index) => {
        const isCurrent = index === currentIndex;
        const isBroken = failedImages[index];

        if (isBroken) return null;

        return (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`${altTitle} - Screenshot ${index + 1}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => handleImageError(index)}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-600 ease-in-out will-change-[opacity] ${
              isCurrent ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
            }`}
          />
        );
      })}

      {/* Subtle bottom gradient to ensure overlay and badge legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#140b18]/85 via-black/25 to-black/35 pointer-events-none z-2" />

      {/* Slide Indicators (Pill dots) */}
      {imageSources.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 pointer-events-none">
          {imageSources.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-4 bg-[#c1ff72]'
                  : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
