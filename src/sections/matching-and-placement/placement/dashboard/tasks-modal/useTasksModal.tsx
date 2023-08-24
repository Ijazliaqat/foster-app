import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from "..";

export const useTasksModal = (handleClose: any) => {
    const methods: any = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: initialValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        handleClose();
        console.log(data, "submitted data");
    };


    return {
        methods, handleSubmit, onSubmit
    }
}