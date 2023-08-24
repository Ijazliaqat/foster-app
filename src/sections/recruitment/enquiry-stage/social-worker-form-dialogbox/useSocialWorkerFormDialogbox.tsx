import * as Yup from "yup";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useGetSocialWorkerInfoQuery,
  usePatchSocialWorkerInfoMutation,
} from "@root/services/recruitment/enquiry-stage/enquiryStage";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { init } from "i18next";

const useSocialWorkerFormDialogbox = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router: any = useRouter();
  const userId = router.query.fosterCarerId;

  const [postData] = usePatchSocialWorkerInfoMutation();
  const { data } = useGetSocialWorkerInfoQuery(userId);

  console.log(data?.data?.socialWorker);

  const initialValues = {
    swName: data?.data?.socialWorker.swName,
    role: data?.data?.socialWorker?.role,
    date: data?.data?.socialWorker?.date,
    fosterCarer: data?.data?.socialWorker?.fosterCarer,
    outcome: data?.data?.socialWorker?.outcome,
  };

  const defaultValues = {
    swName: data?.data?.socialWorker.swName || "",
    role: data?.data?.socialWorker?.role || "",
    date: data?.data?.socialWorker?.date || "",
    fosterCarer: data?.data?.socialWorker?.fosterCarer || "",
    outcome: data?.data?.socialWorker?.outcome || "",
  };

  const socialWorkerFormSchema = Yup.object().shape({
    swName: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    fosterCarer: Yup.string().required("Required"),
    outcome: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(socialWorkerFormSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res = await postData({ data, userId });
      console.log(res.data.message);

      enqueueSnackbar(`${res?.data?.message}` || `Successfully Patched`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };
  return { methods, handleSubmit, onSubmit, defaultValues, initialValues };
};

export default useSocialWorkerFormDialogbox;
