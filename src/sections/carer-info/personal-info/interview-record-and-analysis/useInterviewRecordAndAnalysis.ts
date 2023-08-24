import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { useEditInterviewRecordAnalysisMutation } from "@root/services/carer-info/personal-info/interview-record-analysis/InterviewRecordAnalysis";
import { enqueueSnackbar } from "notistack";

export const useInterviewRecordAndAnalysis = (
  disabled: any,
  data: any,
  role: any
) => {
  const theme: any = useTheme();
  const [editInterviewRecordAnalysis, { isLoading }] =
    useEditInterviewRecordAnalysisMutation();

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: data,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    var form_data = new FormData();
    for (var key in data) {
      form_data.append(key, data[key]);
    }

    try {
      const res: any = await editInterviewRecordAnalysis(form_data).unwrap();
      if (res.data) {
        enqueueSnackbar("Record Updated Successfully", { variant: "success" });
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
    // reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    isLoading,
  };
};
