import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues, viewOriginalChild } from ".";
import { usePostChildProfileInfoMutation } from "@root/services/foster-child/referrals/child-referral/childReferralApi";
import { useRouter } from "next/router";

const useOrignalChildReferral = () => {
  const [postChildProfileData] = usePostChildProfileInfoMutation();

  const router = useRouter();
  const fosterChildId = router?.query?.fosterChildId;

  const methods: any = useForm({
    // resolver: yupResolver(viewOriginalChild),
    defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const { mentalHealthStatus } = watch({
    name: "mentalHealthStatus",
  });
  const { childPhysicalDisability } = watch({
    name: "childPhysicalDisability",
  });
  const { adoptionConsideration } = watch({
    name: "adoptionConsideration",
  });
  const { sibling } = watch({
    name: "sibling",
  });

  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      mentalHealthStatus: mentalHealthStatus === "Yes" ? true : false,
      childPhysicalDisability: childPhysicalDisability === "Yes" ? true : false,
      adoptionConsideration: adoptionConsideration === "yes" ? true : false,
      sibling: sibling === "yes" ? true : false,
    };

    console.log(updatedData);

    try {
      const res = await postChildProfileData({ updatedData, fosterChildId });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    methods,
    onSubmit,
    handleSubmit,
    mentalHealthStatus,
    childPhysicalDisability,
  };
};

export default useOrignalChildReferral;
