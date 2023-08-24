import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { usePatchTrainingProfileApiMutation } from "@root/services/recruitment/assessment-stage-one/training-verification-form/TrainingProfileAllApi";

const useEditTraingingProfile = ({
  initialValueProps,
  trainingProfileId,
}: any) => {
  const router = useRouter();

  const [postEditData] = usePatchTrainingProfileApiMutation();

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
      const res: any = await postEditData(updatedData).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });

      router.push(
        "/recruitment/assessment-stage-one/training-verification-form"
      );
    } catch (error) {
      enqueueSnackbar("Something Went Wrong!", { variant: "error" });
    }
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues };
};

export default useEditTraingingProfile;
