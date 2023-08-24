import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from ".";

export const useMarketingPlanMeetingForm = () => {

    const router = useRouter();
    const handleBack = () => router.push('/marketing/plan-meetings')

    const methods: any = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    });

    const {
        reset,
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = methods

    const onSubmit = (data: any) => {
        console.log('data', data);

    };

    return {
        methods,
        handleSubmit,
        onSubmit,
        handleBack
    }
}