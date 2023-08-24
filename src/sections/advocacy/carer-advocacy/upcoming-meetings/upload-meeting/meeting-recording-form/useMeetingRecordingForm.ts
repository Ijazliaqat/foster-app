import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { meetingRecordingInitialValues, meetingRecordingSchema } from ".";

// =================================================================================

export const useMeetingRecordingForm = () => {
  const methods: any = useForm({
    resolver: yupResolver(meetingRecordingSchema),
    defaultValues: meetingRecordingInitialValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = () => {
    reset();
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
};
