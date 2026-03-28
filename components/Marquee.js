'use client';

import { useEffect, useRef, useState } from 'react';

export default function Marquee({ children, speed = 20, direction = 'left', className = '' }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      
      const distance = contentWidth + containerWidth;
      const duration = distance / speed;
      setAnimationDuration(duration);
    }
  }, [children, speed]);

  const getAnimationName = () => {
    return direction === 'left' ? 'marquee-left' : 'marquee-right';
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={contentRef}
        className="inline-block"
        style={{
          animationName: getAnimationName(),
          animationDuration: `${animationDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: isHovered ? '1' : 'infinite',
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      >
        {children}
        <span className="inline-block ml-8">{children}</span>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}