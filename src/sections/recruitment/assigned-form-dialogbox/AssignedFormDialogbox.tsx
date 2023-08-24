import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { ENQUIRYFORMDATA, FormSchema, defaultValues } from ".";
import { useForm } from "react-hook-form";
import { FormProvider } from "@root/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAssignedFormDialogbox } from "./useAssignedFormDialogbox";

export const AssignedFormDialogbox = (props: any) => {
  const {
    handleCloseForm,
    openFormDialog,
    component,
    disabled
  } = props;
  const {onSubmit, handleSubmit, methods, theme } = useAssignedFormDialogbox(component)
//   const theme = useTheme();

//   const methods: any = useForm({
//     resolver: yupResolver(FormSchema),
//     defaultValues,
//   });
//   const { handleSubmit } = methods;
// // console.log(component);

//   const onSubmit = (data: any) => {
//     console.log(data, component,"submitted data");
//     // reset();
//   };

  return (
    <>
      <div>
        <Dialog
          open={openFormDialog}
          onClose={handleCloseForm}
          aria-labelledby="responsive-dialog-title"
        >
          <Grid
            container
            justifyContent={"start"}
            alignItems={"center"}
            p={1}
            px={3}
            sx={{
              bgcolor: "#F6830F",
              color: "white",
              fontSize: 20,
            }}
          >
            Assigned Audit
          </Grid>

          <DialogContent>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                {ENQUIRYFORMDATA?.map((form: any) => {
                  return (
                    <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                      <>
                        {" "}
                        {form.component ? (
                          <Grid>
                            <Typography
                              color={theme.palette.primary.main}
                              variant="body2"
                            >
                              {form.heading}
                            </Typography>
                            <form.component
                              disabled={disabled}
                              size="small"
                              {...form.otherOptions}
                            >
                              {form.otherOptions
                                ? form.options?.map((option: any) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {" "}
                                      {option.label}{" "}
                                    </option>
                                  ))
                                : null}
                            </form.component>
                          </Grid>
                        ) : (
                          <Typography
                            variant={form.variant}
                            color={theme.palette.primary.main}
                          >
                            {" "}
                            {form.heading}{" "}
                          </Typography>
                        )}{" "}
                      </>
                    </Grid>
                  );
                })}

                <Grid item xs={12}>
                  <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ bgcolor: "#F6830F" }}
                  >
                    Save{" "}
                  </Button>
                  <Button
                    onClick={handleCloseForm}
                    sx={{
                      color: "#F6830F",
                      ml: 1,
                      border: "1px solid #F6830F",
                    }}
                    size="large"
                    variant="outlined"
                  >
                    Back
                  </Button>
                </Grid>
              </Grid>
            </FormProvider>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
