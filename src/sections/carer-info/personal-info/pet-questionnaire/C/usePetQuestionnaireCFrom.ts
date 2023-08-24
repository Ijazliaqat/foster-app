import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CFormValidationSchema } from ".";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import usePath from "@root/hooks/usePath";

export const usePetQuestionnaireCFrom = ({
    onSubmitHandler,
    initialValueProps,
    message,
}: any) => {
    const methods: any = useForm({
        resolver: yupResolver(CFormValidationSchema),
        defaultValues: initialValueProps,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    // Get id from url
    const router = useRouter();
    const { petId } = router.query;

    const { makePath } = usePath();

    const onSubmit = async (data: any) => {
        const formData = new FormData();

        formData.append("socialWorkerObservations", data?.socialWorkerObservations);
        formData.append("significanceOfAnimal", data?.significanceOfAnimal);
        formData.append("foreseeableRisks", data?.foreseeableRisks);
        formData.append("nameOfSocialWorker", data?.nameOfSocialWorker);
        formData.append("date", data?.date);
        formData.append(
            "signatureOfAssessingSocialWorker",
            data?.signatureOfAssessingSocialWorker
        );

        const updatedData = {
            petId,
            formData,
        };

        try {
            const res: any = await onSubmitHandler(updatedData).unwrap();
            enqueueSnackbar(
                res?.message ?? `Pet Questionnaire ${message} Successfully!`,
                {
                    variant: "success",
                }
            );
        } catch (error: any) {
            const errMsg = error?.data?.message;
            enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
        }
    };
    return { methods, handleSubmit, isSubmitting, onSubmit, router, makePath };
};
