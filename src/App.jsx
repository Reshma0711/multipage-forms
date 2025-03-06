import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";

import useMultiStepForm from "./customhook/useStep";

import { PersonalInfo as StepOne } from "./pages/step1";
import { AccountDetails as StepTwo } from "./pages/step2";
import { Confirmation as StepThree } from "./pages/step3";

const MultiStepForm = () => {
  const methods = useForm();
  const { reset } = methods;

  const steps = [<StepOne />, <StepTwo />, <StepThree />];
  // Pass an array of steps
  const {
    step,
    stepCount,
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    goToStep,
  } = useMultiStepForm(steps);

  const onSubmit = (data) => {
   
    console.log(data);
  };

  const submitHandler=()=>{
    if (stepCount === steps.length - 1) {
      console.log("ALERTTTTTTTTTTTTTTTTTTTT");
      alert("Successfully Submitted");

      // Reset the form
      reset();

      // Go back to step 1
      goToStep(0);
    }
  }

  console.log("confirmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", step);

  console.log("verifyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", stepCount);

  console.log("chckkkkkkkkkkkkkkkkk", isLastStep);

  return (
    <FormProvider {...methods}>
      <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">
          Step {stepCount + 1} of {steps.length}
        </h2>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step} {/* Displays the current step component */}
          <div className="flex justify-between mt-4">
            {!isFirstStep && <Button onClick={prevStep}>Back</Button>}
            {isLastStep ? (
              <Button type="submit" onClick={submitHandler}>
                Submit
              </Button>
            ) : (
              <Button onClick={nextStep}>Next</Button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default MultiStepForm;
