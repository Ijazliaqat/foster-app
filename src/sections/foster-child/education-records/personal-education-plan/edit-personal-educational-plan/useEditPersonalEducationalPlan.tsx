import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePatchSingleChildEducationPlanMutation } from "@root/services/foster-child/education-records/child-education-plan/childEducationPlan";
import { enqueueSnackbar } from "notistack";

const useEditPersonalEducationalPlan = (initialValueProps:any, fosterChildId:any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  console.log(fosterChildId);
  
  const [patchData] = usePatchSingleChildEducationPlanMutation()

  
  const defaultValues = {
    school: "",
    date: new Date(todayDate),
    onFile: "",
    comments: "",
    principalName:""
  };

  const tainingProfileSchema = Yup.object().shape({
    school: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    onFile: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    principalName: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues:initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    
    try {
      const res = await patchData({data,fosterChildId}) 

      enqueueSnackbar(res?.data?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong!`, {
        variant: "error",
      });
    }
  };

  return { methods, handleSubmit, onSubmit, router,defaultValues };
};

export default useEditPersonalEducationalPlan;
