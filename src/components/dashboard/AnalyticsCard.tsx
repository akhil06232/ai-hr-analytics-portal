
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Maximize2, Cpu } from 'lucide-react';

interface AnalyticsCardProps {
  title: string;
  description: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  isAI?: boolean;
  onExpand?: () => void;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  description,
  actions,
  children,
  className,
  isLoading = false,
  isAI = false,
  onExpand,
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        "bg-white border border-border/40 shadow-card",
        "hover:shadow-lg hover:border-border/60",
        className
      )}
    >
      <div className="px-5 py-4 border-b border-border/60 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {isAI && <Cpu className="h-4 w-4 text-primary/80" />}
          <h3 className="font-medium text-sm">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {actions}
          {onExpand && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={onExpand}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="p-5">
        {isLoading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-20 bg-muted rounded w-full mt-4"></div>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            {children}
          </>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
