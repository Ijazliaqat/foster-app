import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, Modal } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import {
  FosterCarerRecruitmentFormSchema,
  defaultValues,
  FosterCarerRecruitmentFormData,
} from "./";
import { LoadingButton } from "@mui/lab";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

export default function AddFosterCarerRecruitment({ open, setOpen }: any) {
  const methods: any = useForm({
    resolver: yupResolver(FosterCarerRecruitmentFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    // try {
    //   const res: any = await onSubmitHandler(data).unwrap();
    //   enqueueSnackbar(res?.message ?? `Record Successfully!`, {
    //     variant: "success",
    //   });
    //   router.push("/carer-info/personal-info/carer-family-support-network");
    // } catch (error: any) {
    //   const errMsg = error?.data?.message;
    //   enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    // }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box sx={style}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            {FosterCarerRecruitmentFormData?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>
                <item.component {...item.componentProps} size={"small"}>
                  {item?.componentProps?.select
                    ? item?.options?.map((option: any) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      ))
                    : item?.heading}
                </item.component>
              </Grid>
            ))}
            <Grid item xs={12}>
              <RHFUploadFile {...methods} name={"img"} />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
                loading={isSubmitting}
                // color={isError ? "error" : isSuccess ? "success" : "primary"}
              >
                {/* {isError ? "Try Again!" : isSuccess ? "Success" : "Submit"} */}
                Submit
              </LoadingButton>
              <Button
                type="button"
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: { xs: 300, md: 800 },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "32px",
  p: 2,
};
