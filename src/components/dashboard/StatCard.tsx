
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui-elements/Badge';
import { AnimatedCounter } from '../ui-elements/AnimatedCounter';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
  change?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  isLoading?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  isLoading = false,
}) => {
  const renderChange = () => {
    if (change === undefined) return null;
    
    let color = '';
    let Icon = Minus;
    
    if (change > 0) {
      color = 'text-green-600';
      Icon = ArrowUp;
    } else if (change < 0) {
      color = 'text-red-600';
      Icon = ArrowDown;
    } else {
      color = 'text-gray-600';
      Icon = Minus;
    }

    return (
      <Badge
        className={cn("ml-2", color)}
        icon={<Icon className="h-3 w-3" />}
        label={`${change > 0 ? '+' : ''}${change}%`}
        variant="neutral"
        size="sm"
      />
    );
  };

  return (
    <div
      className={cn(
        "rounded-xl bg-white border border-border/40 shadow-card overflow-hidden p-4 transition-all duration-300",
        "hover:shadow-lg hover:border-border/60",
        className
      )}
    >
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-muted rounded w-1/3"></div>
          <div className="h-7 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-1/4"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center mb-2">
            {icon && (
              <div className="text-primary/80 mr-2">
                {icon}
              </div>
            )}
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
          </div>
          <div className="flex items-baseline">
            <AnimatedCounter
              value={value}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
              className="text-2xl font-semibold text-foreground"
            />
            {renderChange()}
          </div>
        </>
      )}
    </div>
  );
};

export default StatCard;
