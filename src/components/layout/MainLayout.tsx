
import React from 'react';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children,
  className
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn('flex-1 pt-16', className)}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
