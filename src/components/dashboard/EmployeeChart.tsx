
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface EmployeeData {
  name: string;
  value: number;
}

interface EmployeeChartProps {
  data: EmployeeData[];
  title?: string;
  color?: string;
  className?: string;
  isLoading?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-border/50">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-primary font-semibold">{payload[0].value}</p>
      </div>
    );
  }

  return null;
};

export const EmployeeChart: React.FC<EmployeeChartProps> = ({
  data,
  title,
  color = "#3b82f6",
  className,
  isLoading = false,
}) => {
  return (
    <div className={cn("w-full h-full", className)}>
      {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
      
      {isLoading ? (
        <div className="animate-pulse flex flex-col space-y-3">
          <div className="h-4 bg-muted rounded w-1/3"></div>
          <div className="h-40 bg-muted rounded w-full"></div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: '#888' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{ r: 6, strokeWidth: 0, fill: color }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default EmployeeChart;
