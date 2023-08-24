import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AFormValidationSchema } from "./";
import { enqueueSnackbar } from "notistack";
import router, { useRouter } from "next/router";
import usePath from "@root/hooks/usePath";

export const usePetQuestionnaireAFrom = ({
    onSubmitHandler,
    initialValueProps,
    message,
    isAdding,
}: any) => {
    const methods: any = useForm({
        resolver: yupResolver(AFormValidationSchema),
        defaultValues: initialValueProps,
    });

    const router = useRouter();

    const { makePath } = usePath();

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: any) => {
        try {
            const res: any = await onSubmitHandler(data).unwrap();
            enqueueSnackbar(
                res?.message ?? `Pet Questionnaire ${message} Successfully!`,
                {
                    variant: "success",
                }
            );
            {
                isAdding &&
                    router.push(
                        makePath({
                            path: "/carer-info/personal-info/pet-questionnaire/add-pet-questionnaire",
                            queryParams: { petId: res.id },
                        })
                    );
            }
        } catch (error: any) {
            const errMsg = error?.data?.message;
            enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
        }
    };

    return { methods, handleSubmit, isSubmitting, onSubmit, router, makePath };
};
