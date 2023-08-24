import { useForm } from "react-hook-form";
import { CarerSectionBDefultValue } from ".";

export const useCarerSectionB = () => {
  const methods: any = useForm({
    defaultValues: CarerSectionBDefultValue,
  });

  return {
    methods,
  };
};
