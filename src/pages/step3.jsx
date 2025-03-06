

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

export const Confirmation = () => {
    const { watch } = useFormContext();
    const formData = watch(); // Get all form data

    console.log(formData)
  
    return (
      <div>
        <h2 className="text-lg font-semibold">Confirm Your Details</h2>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    );
  };



  