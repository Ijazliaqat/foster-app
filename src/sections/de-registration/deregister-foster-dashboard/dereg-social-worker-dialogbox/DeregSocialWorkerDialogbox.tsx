import { SOCIALWORKERFORMDATA } from ".";
import { FormProvider } from "@root/components/hook-form";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import useDeregSocialWorkerDialogbox from "./useDeregSocialWorkerDialogbox";
import SocialWorkerIcon from "../../../../assets/svg/de-register/social-worker-icon.svg";
import Image from "next/image";

const DeregSocialWorkerDialogbox = (props: any) => {
  const {
    handleCloseForm,
    openFormDialog,
    setOpenFormDialog,
    handleSubmitForm,
    component,
    isEdit = false,
    handleEdit,
    disabled = false,
    handleViewChecklist,
  } = props;

  const { methods, handleSubmit, onSubmit, viewCheckList } =
    useDeregSocialWorkerDialogbox();

  console.log(viewCheckList);

  return (
    <>
      <Dialog
        open={openFormDialog}
        onClose={handleCloseForm}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
        <Box
          p={1}
          px={3}
          sx={{
            background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography component="h2" sx={{ fontSize: 20, fontWeight: 700 }}>
            Social Worker Info
          </Typography>
          {isEdit && (
            <Image
              src={SocialWorkerIcon}
              alt=""
              onClick={handleEdit}
              style={{ cursor: "pointer" }}
            />
          )}
        </Box>

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
                  onClick={handleCloseForm}
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
                  onClick={
                    disabled ? handleViewChecklist : handleSubmitForm
                  }
                  type="submit"
                  sx={{
                    color: "#fff",
                    ml: 1,
                  }}
                  size="large"
                  variant="contained"
                >
                  {disabled ? "View Checklist" : "Save"}
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeregSocialWorkerDialogbox;
