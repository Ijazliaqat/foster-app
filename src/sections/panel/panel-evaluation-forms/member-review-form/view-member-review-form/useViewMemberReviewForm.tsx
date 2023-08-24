import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export const useViewMemberReviewForm = () => {

  let theme = useTheme();
  let router = useRouter();
  const methods: any = useForm({});

  const {
    formState: { },
  } = methods;

  return {
    methods,
    router,
    theme,
  };
};
