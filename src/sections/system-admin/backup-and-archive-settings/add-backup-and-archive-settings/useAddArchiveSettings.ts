
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  ArchiveSettingValidationSchema, defaultValues } from ".";

export const useAddArchiveSettings = () => {
    const methods: any = useForm({
        resolver: yupResolver(ArchiveSettingValidationSchema),
        defaultValues: defaultValues,
      });
    
      const { handleSubmit } = methods;
      const onSubmit = (data: any) => {
        console.log(data, "submitted data");
      };
    
  return {methods,handleSubmit,onSubmit}
}


