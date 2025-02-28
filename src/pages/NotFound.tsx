
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please check the URL or go back to the homepage.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
