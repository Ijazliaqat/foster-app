import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useNewOutSchoolActivityInfo = (postSchoolActivityData: any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const defaultValues = {
    activityType: "",
    fromDate: new Date(todayDate),
    outOfDate: new Date(todayDate),
    comments: "",
  };

  const outSchoolActivitySchema = Yup.object().shape({
    // activityType: Yup.string().required("Required"),
    // fromDate: Yup.date().required("Required"),
    // outOfDate: Yup.date().required("Required"),
    // comments: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(outSchoolActivitySchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    postSchoolActivityData(data);
  };

  return { methods, handleSubmit, onSubmit, router };
};

export default useNewOutSchoolActivityInfo;
