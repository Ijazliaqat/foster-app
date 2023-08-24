import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useViewOutSchoolActivityInfo = (initialValueProps: any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    activityType: "",
    fromDate: new Date(todayDate),
    outOfDate: new Date(todayDate),
    comments: "",
  };

  const childExclusionSchema = Yup.object().shape({
    activityType: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    fromDate: Yup.date().required("Required"),
    outOfDate: Yup.date().required("Required"),
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
};

export default useViewOutSchoolActivityInfo;
