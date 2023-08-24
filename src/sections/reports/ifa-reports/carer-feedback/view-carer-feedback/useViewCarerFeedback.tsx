import { useForm } from "react-hook-form";
import { CarerFeedbackDefaultValues } from ".";

export const useViewCarerFeedback = () => {
  const methods: any = useForm({
    defaultValues: CarerFeedbackDefaultValues,
  });

  return {
    methods,
  };
};
