import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export const PersonalInfo = () => {
    const { register, formState: { errors } } = useFormContext();
  
    return (
      <div>
        <label className="block text-sm font-medium">First Name</label>
        <Input {...register("firstName", { required: "Full Name is required" })} />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
  
        <label className="block text-sm font-medium mt-3">Last Name</label>
        <Input  {...register("lastName", { required: "last Name is required" })} />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>
    );
  };
  

 