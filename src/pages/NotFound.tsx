import { ArrowLeft } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-6">
        <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-primary/10">
          <span className="text-4xl font-extrabold tracking-tight text-primary">404</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Page not found</h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>
        <Button asChild className="rounded-xl font-semibold">
          <Link to="/">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
