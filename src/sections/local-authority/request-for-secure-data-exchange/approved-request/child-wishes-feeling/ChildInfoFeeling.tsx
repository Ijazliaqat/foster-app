import React from "react";
import { useChildInfoFeeling } from "./useChildInfoFeeling";
import { FormProvider } from "@root/components/hook-form";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import Link from "next/link";
import ErrorIcon from "@mui/icons-material/Error";

const ChildInfoFeeling = ({ handleNextTab, handleBackTab }: any) => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    reset,
    setValue,
    wishesData,
    theme,
  } = useChildInfoFeeling();

  const StyledTooltip = ({ ...props }) => (
    <Tooltip
      {...props}
      title={props.title}
      placement="bottom-start"
      arrow
      componentsProps={{
        tooltip: {
          sx: {
            background: theme.palette.primary.main,
          },
        },
        arrow: {
          sx: {
            color: theme.palette.primary.main,
          },
        },
      }}
    >
      {props.children}
    </Tooltip>
  );
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ padding: "0.8rem" }}>
        <Grid container columnSpacing={4}>
          {wishesData?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.md} key={i}>
              {form.component && (
                <form.component size="small" fullWidth {...form.componentProps}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Typography sx={style.heading}>{form?.heading}</Typography>
                    <span>
                      {form?.tooltip && (
                        <StyledTooltip title={form?.disc}>
                          <ErrorIcon />
                        </StyledTooltip>
                      )}
                    </span>
                  </Box>
                  {form.componentProps.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
              {form?.uploadPhoto && (
                <RHFUploadFile name={"updatePhoto"} {...methods} required />
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              onClick={handleBackTab}
              sx={{
                backgroundColor: "#F6830F",
                "&:hover": {
                  backgroundColor: "#F6830F",
                },
                m: 1,
              }}
              type="submit"
              variant="contained"
            >
              Back
            </Button>
            <Button
              sx={{
                backgroundColor: "#23183D",
                "&:hover": {
                  backgroundColor: "#23183D",
                },
                m: 1,
              }}
              type="submit"
              variant="contained"
            >
              Save
            </Button>

            {/* <Link href={""} style={{ textDecoration: "none" }}> */}
            <Button sx={{ m: 1}} type="button" variant="contained" onClick={handleNextTab}>
              Next
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default ChildInfoFeeling;

const style =({
  heading :{
    fontSize : "16px !important",
    fontWeight:600

  }
})