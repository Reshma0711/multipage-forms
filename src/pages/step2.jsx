import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export const AccountDetails = () => {
    const { register, formState: { errors } } = useFormContext();
  
    return (
      <div>
        <label className="block text-sm font-medium">Email</label>
        <Input type="email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
  
        <label className="block text-sm font-medium mt-3">Password</label>
        <Input type="password" {...register("password", { required: "Password is required" })} />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
    );
  };


 