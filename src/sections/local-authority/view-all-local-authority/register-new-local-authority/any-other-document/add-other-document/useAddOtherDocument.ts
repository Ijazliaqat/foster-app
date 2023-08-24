import { useForm } from "react-hook-form";
import { addOtherDocumentFormSchema, initialValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";

export const useAddOtherDocument = () => {

    const methods: any = useForm({
        resolver: yupResolver(addOtherDocumentFormSchema),
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
        onSubmit
    }
}