import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const Route = createFileRoute("/Login")({
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (userData) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/login", userData);
      localStorage.setItem("token", response.data.token); // Store token
      navigate({ to: "/Home" });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="max-w-sm mx-auto p-4 border rounded-lg shadow-md">
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded-lg"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <label className="block text-sm font-medium mt-3">Password</label>
      <input
        type="password"
        className="w-full p-2 border rounded-lg"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

      <Button type="submit" className="mt-5 w-full" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

export default Login;
