import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { useForm } from "react-hook-form";
import { defaultValues, FormSchema } from ".";

export const useViewDeclaration = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: any) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    marginBottom: 10,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "silver",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
    },
  }));
  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return {
    theme,
    expanded,
    setExpanded,
    BorderLinearProgress,
    handleSubmit,
    onSubmit,
    methods,
    handleChange,
  };
};
