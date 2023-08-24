import { useForm } from "react-hook-form";
import { sessionSettingFormSchema, initialValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

export const useSessionSettings = () => {
    const route = useRouter();
    const theme = useTheme()
    const methods: any = useForm({
        resolver: yupResolver(sessionSettingFormSchema),
        defaultValues: initialValues,
    });
    const {
        reset,
        control,
        register,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = methods;

    const onSubmit = () => {}

    return {
        methods,
        handleSubmit,
        onSubmit,
        route,
        theme
    }
}