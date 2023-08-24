import { useForm } from "react-hook-form";
import { CarerSectionADefultValue } from ".";

export const useCarerSectionA = () => {
  const methods: any = useForm({
    defaultValues: CarerSectionADefultValue,
  });

  return {
    methods,
  };
};
