import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddChildValidationSchema, defaultValues } from ".";

export const useAddChildModal = (props: any) => {

    const methods: any = useForm({
        resolver: yupResolver(AddChildValidationSchema),
        defaultValues: defaultValues,

    });

    const { handleSubmit } = methods;
    const onSubmit = (data: any) => {
        console.log(data, "submitted data");
        props.handleClose();
        methods.reset();
    };

    return { methods, handleSubmit, onSubmit }
}
