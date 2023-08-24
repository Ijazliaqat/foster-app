import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useViewChildExclusionInfo = ({initialValueProps,id}:any) => {
    const todayDate = dayjs().format("MM/DD/YYYY");
    const router = useRouter();
  
    const defaultValues = {
      classStudying: "",
      typeExclusion: "",
      dateExclusion: new Date(todayDate),
      returnDate: new Date(todayDate),
      exclusionDetails: "",
      actionTaken: "",
      outcome: "",
    };
  
    const childExclusionSchema = Yup.object().shape({
      classStudying: Yup.string().required("Required"),
      typeExclusion: Yup.string().required("Required"),
      returnDate: Yup.date().required("Required"),
      dateExclusion: Yup.date().required("Required"),
      exclusionDetails: Yup.string().required("Required"),
      actionTaken: Yup.string().required("Required"),
      outcome: Yup.string().required("Required"),
    });
  
    const methods: any = useForm({
      resolver: yupResolver(childExclusionSchema),
      defaultValues: initialValueProps,
    });
  
    const { handleSubmit } = methods;
  
    const onSubmit = (data: any) => {
      console.log(data);
    };
  
    return { methods, handleSubmit, onSubmit, router,defaultValues };
}

export default useViewChildExclusionInfo