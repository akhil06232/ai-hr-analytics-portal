
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, BarChart, Users, Briefcase, MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: BarChart },
  { name: 'Employees', path: '/employees', icon: Users },
  { name: 'Recruitment', path: '/recruitment', icon: Briefcase },
  { name: 'Analytics', path: '/analytics', icon: MessageSquare },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isMobile]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-semibold text-lg">Pulse HR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1',
                  location.pathname === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/70 hover:text-primary"
            >
              <User className="h-4 w-4 mr-2" />
              <span>Account</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/70"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-white/95 backdrop-blur-md shadow-lg absolute top-16 inset-x-0 h-[calc(100vh-4rem)] z-50 overflow-hidden">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'flex items-center px-3 py-3 rounded-lg transition-all duration-200 animate-fade-in',
                  location.pathname === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t">
              <Button
                variant="outline"
                size="lg"
                className="w-full justify-start"
              >
                <User className="h-5 w-5 mr-3" />
                <span>Account</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
