import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  useGetIfaParticiaptionPolicyByIdQuery,
  usePutIfaParticiaptionPolicyByIdMutation,
} from "@root/services/foster-child/other-information/ifa-participation-policy/ifaParticipationPolicy";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

const useNewIfaParticipationPolicyChild = () => {
  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const ifaChildId = router.query.ifaChildId;

  const { data, isLoading } = useGetIfaParticiaptionPolicyByIdQuery(ifaChildId);
  const [putChildData] = usePutIfaParticiaptionPolicyByIdMutation();
  const [value, setValue] = useState<any>(2);

  const ratingValue = value.target?.attributes?.value?.nodeValue.toString();

  // console.log(ratingValue);
  
console.log(typeof ratingValue);

  const defaultValues = {
    dateOfParticipation: data?.data?.date || new Date(todayDate),
    achievement: data?.data?.achievement || "",
    likeMost: data?.data?.likeMost || "",
    likeEvent: data?.data?.likeEvent || "",
    likeNextTime: data?.data?.likeNextTime || "",
    rating: "",
    participationActivity: data?.data?.participationActivity || "",
    file: data?.data?.file || "",
  };

  const childExclusionSchema :any= Yup.object().shape({
    achievement: Yup.string().required("Required"),
    dateOfParticipation: Yup.date().required("Required"),
    likeMost: Yup.string().required("Required"),
    likeEvent: Yup.string().required("Required"),
    likeNextTime: Yup.string().required("Required"),
    // rating : Yup.number().required("Required"),
    participationActivity: Yup.string().required("Required"),
    file: Yup.mixed().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(childExclusionSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  console.log(methods);
  const formData = new FormData();
  const onSubmit = async (data: any) => {

    formData.append("dateOfParticipation", data.dateOfParticipation);
    formData.append("achievement", data.achievement);
    formData.append("likeMost", data.likeMost);
    formData.append("likeEvent", data.likeEvent);
    formData.append("likeNextTime", data.likeNextTime);
    formData.append("rating", ratingValue);
    formData.append("participationActivity", data.participationActivity);
    formData.append("file", data.file);
    
    try {
      const resp = await putChildData({ formData, ifaChildId });
      enqueueSnackbar("Successfully", {variant:"success"})
      console.log(resp);
      
    } catch (error) {
      enqueueSnackbar("Something went wrong", {variant:"error"})
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    router,
    value,
    setValue,
    data,
    isLoading,
  };
};

export default useNewIfaParticipationPolicyChild;
