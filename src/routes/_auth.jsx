import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    
      try {
        const expiry = JSON.parse(atob(token.split(".")[1])).exp;
        console.log("Token Expiry:", expiry);
        
        const isExpired = expiry < Date.now() / 1000;
        console.log("Is Token Expired?", isExpired);
  
        if (isExpired) {
          
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <p className="text-red-500 text-center mt-5">
        Please login to access this page.
      </p>
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RouteComponent;
