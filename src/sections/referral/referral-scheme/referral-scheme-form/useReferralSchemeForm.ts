import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReferralSchemeForm, ReferralSchemeValidationSchema, defaultValues } from ".";

export const useReferralSchemeForm = () => {
    const methods: any = useForm({
        resolver: yupResolver(ReferralSchemeValidationSchema),
        defaultValues: defaultValues,
      });
    
      const { handleSubmit } = methods;
      const onSubmit = (data: any) => {
        console.log(data, "submitted data");
      };
    
  return {methods,handleSubmit,onSubmit}
}
