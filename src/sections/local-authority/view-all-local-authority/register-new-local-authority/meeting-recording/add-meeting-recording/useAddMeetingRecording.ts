import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addMeetingRecordingInitialValues, addMeetingRecordingSchema } from ".";

export const useAddMeetingRecording = () => {
  const methods: any = useForm({
    resolver: yupResolver(addMeetingRecordingSchema),
    defaultValues: addMeetingRecordingInitialValues,
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
