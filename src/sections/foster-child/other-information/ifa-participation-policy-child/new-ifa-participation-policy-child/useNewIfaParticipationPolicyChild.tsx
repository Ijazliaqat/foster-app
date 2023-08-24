import React, { useState } from "react";
import dayjs from "dayjs";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { usePostIfaParticiaptionPolicyMutation } from "@root/services/foster-child/other-information/ifa-participation-policy/ifaParticipationPolicy";
import { enqueueSnackbar } from "notistack";

const useNewIfaParticipationPolicyChild = () => {
  const [value, setValue] = useState<any>(2);

  const ratingValue = value?.target?.attributes?.value?.nodeValue.toString();

  console.log(typeof ratingValue);
  

  const todayDate = dayjs().format("MM/DD/YYYY");
  const router = useRouter();
  const fosterChildId = router.query.fosterChildId;

  const [postData] = usePostIfaParticiaptionPolicyMutation();

  const defaultValues = {
    dateOfParticipation: new Date(todayDate),
    achievement: "",
    likeMost: "",
    likeEvent: "",
    likeNextTime: "",
    rating: "",
    participationActivity: "",
    file: "",
  };

  const ifaParticipationPolicySchema = Yup.object().shape({
    dateOfParticipation: Yup.date().required("Required"),
    achievement: Yup.string().required("Required"),
    likeMost: Yup.string().required("Required"),
    likeEvent: Yup.string().required("Required"),
    likeNextTime: Yup.string().required("Required"),
    // rating : Yup.number().required("Required"),
    participationActivity: Yup.string().required("Required"),
    file: Yup.mixed().required("Required"),
  });

  const methods: any = useForm({
    resolver: yupResolver(ifaParticipationPolicySchema),
    defaultValues,
  });

  const { handleSubmit } = methods;
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
      const resp = await postData({ formData, fosterChildId });

      enqueueSnackbar(`Post Successfull`, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    }
  };

  return { methods, handleSubmit, onSubmit, router, value, setValue };
};

export default useNewIfaParticipationPolicyChild;
