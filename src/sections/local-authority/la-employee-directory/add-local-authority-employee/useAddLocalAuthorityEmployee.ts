import { useForm } from "react-hook-form";
import { AddLocalAuthorityValidationSchema, defaultValues } from '.';
import { yupResolver } from "@hookform/resolvers/yup";

export const useAddLocalAuthorityEmployee = () => {
    const methods: any = useForm({
        resolver: yupResolver(AddLocalAuthorityValidationSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;
    const onSubmit = (data: any) => {
        console.log(data, "submitted data");
    };

    return { methods, handleSubmit, onSubmit }

}
