import { useForm } from "react-hook-form";
import { RecordCriiticalIncidentDefaultValues } from ".";
import { useRouter } from "next/router";

export const useRecordCriticalIncidentsForm = () => {
  const methods: any = useForm({
    defaultValues: RecordCriiticalIncidentDefaultValues,
  });
  const router = useRouter();
  const handleBack = () => router.push('/reports/carer-reports/foster-carer-record-critical-incidents');
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    methods,
    handleSubmit,
    handleBack,
    onSubmit
  };
};
