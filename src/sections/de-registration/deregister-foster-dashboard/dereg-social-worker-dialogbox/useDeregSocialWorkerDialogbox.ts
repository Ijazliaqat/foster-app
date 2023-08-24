import * as Yup from "yup";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useRouter } from "next/router";

const useDeregSocialWorkerDialogbox = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const [viewCheckList, setViewCheckList] = useState(false);

  const defaultValues = {
    socialWorkerName: "Sangeeta",
    socialWorkerRole: "BA",
    assessmentDate: new Date(todayDate),
    fosterCarerName: "Alex",
    assessmentOutcome: "Passed",
  };

  const socialWorkerFormSchema = Yup.object().shape({
    socialWorkerName: Yup.string().required("Required"),
    socialWorkerRole: Yup.string().required("Required"),
    assessmentDate: Yup.date().required("Required"),
    fosterCarerName: Yup.string().required("Required"),
    assessmentOutcome: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(socialWorkerFormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    setViewCheckList(data ? true : false);
  };

  return { methods, handleSubmit, onSubmit, viewCheckList };
};

export default useDeregSocialWorkerDialogbox;
