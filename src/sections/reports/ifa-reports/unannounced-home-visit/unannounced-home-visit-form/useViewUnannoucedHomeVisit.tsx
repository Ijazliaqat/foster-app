import { useForm } from "react-hook-form";
import { UnannouncedHomeVisitDefaultValues } from ".";

export const useViewUnannoucedHomeVisit = () => {
  const methods: any = useForm({
    defaultValues: UnannouncedHomeVisitDefaultValues,
  });

  return {
    methods,
  };
};
