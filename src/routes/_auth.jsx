import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  if (!isAuthenticated) {
    return <p className="text-red-500 text-center mt-5">Please login to access this page.</p>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RouteComponent;
