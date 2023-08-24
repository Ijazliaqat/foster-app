import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { matchingRecommendationsFormDefaultValues } from ".";
import { useRouter } from "next/router";

export default function useRecommendationResultHeader() {
  const {query}:any = useRouter() 
  const queryValue = query?.viewParam;
  let [expand, setExpand] = useState(false);
  const methods: any = useForm({
    defaultValues: matchingRecommendationsFormDefaultValues,
  });
  const handleExpand = () => {
    setExpand(!expand);
  };
  const { handleSubmit, setValue, reset } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return {
    handleExpand,
    expand,
    methods,
    onSubmit,
    handleSubmit,
    queryValue
  };
}
