import React from "react";

export const useMakePlacement = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => {
    setActiveStep(step);
  };
  const handleIncreamentStep = () => {
    setActiveStep(activeStep + 1);
  };

  return { handleStep, activeStep, handleIncreamentStep };
};
