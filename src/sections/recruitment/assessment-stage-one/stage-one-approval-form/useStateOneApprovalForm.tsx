import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostStageOneApprovalDetailMutation } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import { enqueueSnackbar } from "notistack";

const useStateOneApprovalForm = () => {
  const [postData] = usePostStageOneApprovalDetailMutation();

  const todayDate = dayjs().format("MM/DD/YYYY");

  const defaultValues = {
    applicantName: "",
    recommendations: "",
    comments: "",
    workerName: "",
    signature: "",
    Date: new Date(todayDate),
    managerRecommendation: "",
    managerComments: "",
    teamManagerName: "",
    teamManagerSignature: "",
    teamManagersignatureDate: new Date(todayDate),
  };

  const stageOneApprovalSchema = Yup.object().shape({
    applicantName: Yup.string().required("Required"),
    recommendations: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    workerName: Yup.string().required("Required"),
    Date: Yup.date().required("Required"),
    signature: Yup.string().required("Required"),
    managerRecommendation: Yup.string().required("Required"),
    managerComments: Yup.string().required("Required"),
    teamManagerName: Yup.string().required("Required"),
    teamManagerSignature: Yup.string().required("Required"),
    teamManagersignatureDate: Yup.date().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(stageOneApprovalSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res: any = await postData(data).unwrap();
      enqueueSnackbar(res?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error:any) {
      console.log(error.data);
      
      enqueueSnackbar(`${error?.data?.message}`, { variant: "error" });
    }
  };

  return { methods, handleSubmit, onSubmit };
};

export default useStateOneApprovalForm;
