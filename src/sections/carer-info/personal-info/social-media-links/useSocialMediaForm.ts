import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import {
  usePostSocialMediaAccountMutation,
  useEditSocialMediaAccountMutation,
} from "@root/services/carer-info/personal-info/social-media-links/socialMedia";

export const useSocialMediaForm = (accountDetail: any, handleClose: any) => {
  const theme: any = useTheme();
  const [postSocialMediaAccount, { isSuccess: addSuccess }] =
    usePostSocialMediaAccountMutation();
  const [editSocialMediaAccount, { isSuccess: editSuccess }] =
    useEditSocialMediaAccountMutation();

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues:
      accountDetail == null
        ? defaultValues
        : {
            accountType: accountDetail?.accountType,
            accountLink: accountDetail?.accountLink,
          },
  });
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const addSocialLink = async (data: any) => {
    let formData = {
      accountLink: data.accountLink,
      accountType: data.accountType,
    };
    try {
      await postSocialMediaAccount(formData).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  const editSocialLink = async (data: any) => {
    let fData = {
      id: accountDetail.id,
      formData: {
        accountLink: data.accountLink,
        accountType: data.accountType,
      },
    };

    try {
      await editSocialMediaAccount(fData).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  const onSubmit = async (data: any) => {
    if (accountDetail) {
      editSocialLink(data);
    } else {
      addSocialLink(data);
    }
  };
  if (addSuccess) {
    handleClose();
    enqueueSnackbar("Record Added Successfully", { variant: "success" });
  }
  if (editSuccess) {
    handleClose();
    enqueueSnackbar("Record Edit Successfully", { variant: "success" });
  }

  return {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
  };
};
