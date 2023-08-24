import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePatchSchoolActivityDataMutation } from "@root/services/foster-child/education-records/out-of-school-activity/OutOfSchoolActivity";
import { enqueueSnackbar } from "notistack";

const useEditOutSchoolActivityInfo = (initialValueProps: any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const fosterChildId = router.query.recordId;

  console.log(fosterChildId);
  

  const [patchData] = usePatchSchoolActivityDataMutation();

  const defaultValues = {
    activityType: "",
    comments: "",
    fromDate: new Date(todayDate),
    outOfDate: new Date(todayDate),
  };

  const tainingProfileSchema = Yup.object().shape({
    activityType: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    fromDate: Yup.date().required("Required"),
    outOfDate: Yup.date().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(tainingProfileSchema),
    defaultValues: initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res = await patchData({ data, fosterChildId });
      console.log(res);
      
      enqueueSnackbar(`Patch Successfully`, { variant: "success" });
    } catch (error) {}
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues };
};

export default useEditOutSchoolActivityInfo;
