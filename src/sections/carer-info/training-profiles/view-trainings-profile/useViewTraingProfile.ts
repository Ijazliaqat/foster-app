import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const useViewTraingsProfile = (initialValueProps: any) => {
  const router = useRouter();

  const tainingProfileSchema = Yup.object().shape({
    carerName: Yup.string().required("Carer name is required"),
    comments: Yup.string().required("Comment is required"),
    attendance: Yup.boolean().required("Required"),
    courseAttended: Yup.string().required("Required"),
    expiryDate: Yup.date().required("Required"),
    courseStatus: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    trainingNeeds: Yup.string().required("Required"),
    otherTraining: Yup.string().required("Required"),
    addtionalInfo: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {};

  return { methods, handleSubmit, onSubmit, router };
};

export default useViewTraingsProfile;
