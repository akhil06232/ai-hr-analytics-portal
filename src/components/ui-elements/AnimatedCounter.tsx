
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startRef = useRef(0);
  const startTimeRef = useRef(0);
  const frameRef = useRef(0);

  // Format the value with commas and decimals
  const formattedValue = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  useEffect(() => {
    startRef.current = displayValue;
    startTimeRef.current = Date.now();

    const step = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTimeRef.current;
      
      if (elapsed < duration) {
        // Easing function - easeOutExpo
        const progress = 1 - Math.pow(2, -10 * elapsed / duration);
        const nextValue = startRef.current + (value - startRef.current) * progress;
        setDisplayValue(nextValue);
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    frameRef.current = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [value, duration]);

  return (
    <div className={cn("font-display transition-all", className)}>
      {prefix}{formattedValue(displayValue)}{suffix}
    </div>
  );
};

export default AnimatedCounter;
