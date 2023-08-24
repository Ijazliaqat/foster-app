import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePatchSingleChildExclusionInfoRecordMutation } from "@root/services/foster-child/education-records/child-exclusion-info/childExclusionInfo";
import { enqueueSnackbar } from "notistack";

const useEditChildExclusionInfo = ({ initialValueProps, id }: any) => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();

  const [patchData] = usePatchSingleChildExclusionInfoRecordMutation();

  const defaultValues = {
    classStudying: "",
    type: "",
    dateExclusion: new Date(todayDate),
    dateReturn: new Date(todayDate),
    exclusionDetails: "",
    actionTaken: "",
    outcome: "",
  }; 

  const editChildExclusionInfoSchema = Yup.object().shape({
    classStudying: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    dateExclusion: Yup.date().required("Required"),
    dateReturn: Yup.date().required("Required"),
    exclusionDetails: Yup.string().required("Required"),
    actionTaken: Yup.string().required("Required"),
    outcome: Yup.string().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(editChildExclusionInfoSchema),
    defaultValues: initialValueProps,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    try {
      const res = await patchData({ data, id });

      enqueueSnackbar(res?.data?.message ?? `Successfully!`, {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(`Something went wrong!`, {
        variant: "error",
      });
    }
  };

  return { methods, handleSubmit, onSubmit, router, defaultValues };
};

export default useEditChildExclusionInfo;
