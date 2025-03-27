
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center max-w-md p-6 animate-fade-in">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-primary text-2xl font-bold">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button className="flex items-center justify-center" onClick={() => window.location.href = '/'}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
