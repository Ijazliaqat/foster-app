import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from "."; 

export const useareaOfficeSetupForm = () => { 


  // const methods: any = useForm({
  //   resolver: yupResolver(formSchema),
  //   defaultValues: initialValues,
  // });

  // const { 
  //   handleSubmit,
  //   formState: { errors, isSubmitting, isDirty },
  // } = methods;


  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    // methods,
    // handleSubmit, 
    onSubmit
  }
}