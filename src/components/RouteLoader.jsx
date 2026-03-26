import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const RouteLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When the path changes, start loading
    setLoading(true);
    
    // Set a small timer so the spinner is visible but not annoying
    const timer = setTimeout(() => setLoading(false), 350);
    
    // Cleanup the timer if the user leaves the page quickly
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="route-loader">
      <LoadingSpinner text="Loading page..." />
    </div>
  );
};

export default RouteLoader;