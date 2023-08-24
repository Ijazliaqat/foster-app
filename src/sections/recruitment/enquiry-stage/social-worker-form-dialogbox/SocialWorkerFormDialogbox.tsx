import { SOCIALWORKERFORMDATA } from ".";
import { FormProvider } from "@root/components/hook-form";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import useSocialWorkerFormDialogbox from "./useSocialWorkerFormDialogbox";

const SocialWorkerFormDialogbox = (props: any) => {
  const {
    handleCloseForm,
    openFormDialog,
    setOpenFormDialog,
    component,
    disabled,
    initialValues,
    defaultValues=initialValues,
    setOpenSocialWorkerAssessmentDialogbox
  } = props;

  const { methods, handleSubmit, onSubmit } = useSocialWorkerFormDialogbox();

  return (
    <>
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
            background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
            color: "white",
            fontSize: 20,
          }}
        >
          Social Worker Info
        </Grid>

        <DialogContent>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {SOCIALWORKERFORMDATA?.map((form: any) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                    <>
                      <Grid>
                        <form.component
                          disabled={disabled}
                          size="small"
                          {...form.otherOptions}
                        >
                          {form.otherOptions
                            ? form.options?.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))
                            : null}
                        </form.component>
                      </Grid>
                    </>
                  </Grid>
                );
              })}

              <Grid item xs={12}>
                <Button
                  onClick={() => setOpenSocialWorkerAssessmentDialogbox(false)}
                  size="large"
                  type="button"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCloseForm}
                  type="submit"
                  sx={{
                    color: "#fff",
                    ml: 1,
                  }}
                  size="large"
                  variant="contained"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SocialWorkerFormDialogbox;
