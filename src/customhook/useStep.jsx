import { useState } from "react";

const useMultiStepForm = (steps) => {
  const [stepCount, setStepCount] = useState(0);

  const nextStep = () => {
    if (stepCount < steps.length - 1) {
      setStepCount((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (stepCount >= 1) {
      setStepCount((prev) => prev - 1);
    }
  };

  const isLastStep = stepCount === steps.length - 1;
  const isFirstStep = stepCount === 0;

  const goToStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setStepCount(stepIndex);
    }
  };
  return {
    step: steps[stepCount], // Current step component
    stepCount,
    nextStep,
    prevStep,
    isLastStep,
    isFirstStep,
    goToStep,
  };
};

export default useMultiStepForm;
