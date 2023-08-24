import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const useEditTraingingsProfile = ({
  initialValueProps,
  onSubmitHandler,
  trainingProfileId,
}: any) => {
  const router = useRouter();

  const tainingProfileSchema = Yup.object().shape({
    carerName: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    attendance: Yup.boolean().required("Required"),
    courseAttended: Yup.string().required("Required"),
    expiryDate: Yup.date().required("Required"),
    courseStatus: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    trainingNeeds: Yup.string().required("Required"),
    otherTraining: Yup.string().required("Required"),
    addtionalInfo: Yup.string().required("Required"),
  });

  const defaultValues = {
    carerName: "",
    courseAttended: "",
    courseStatus: "",
    comments: "",
    trainingNeeds: "",
    otherTraining: "",
    addtionalInfo: "",
    attendance: false,
    expiryDate: new Date(),
    date: new Date(),
  };

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    const updatedData = {
      trainingProfileId,
      data,
    };

    try {
      const res: any = await onSubmitHandler(updatedData).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      router.push("/carer-info/training-profiles/trainings-list");
    } catch (error) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues };
};

export default useEditTraingingsProfile;
