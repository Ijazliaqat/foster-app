import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReferralSchemeForm, ReferralSchemeValidationSchema, defaultValues } from ".";
import { useRouter } from "next/router";

export const useChildDetailsForm = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const routeParts = currentRoute.split('/');
    const lastValue = routeParts[routeParts.length - 1];

    console.log("currentRoute", lastValue);
    const methods: any = useForm({
        resolver: yupResolver(ReferralSchemeValidationSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;
    const onSubmit = (data: any) => {
        console.log(data, "submitted data");
    };

    return { methods, handleSubmit, onSubmit, lastValue }
}
