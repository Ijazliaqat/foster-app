import { Box, Grid, Button, Modal, Backdrop, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { UploadDocFormData, defaultValues, formSchema } from ".";
import CloseIcon from "@mui/icons-material/Close";
import { useUploadDocumentsModal } from "./useUploadDocumentModal";
import useAuth from "@root/hooks/useAuth";
import { LoadingButton } from "@mui/lab";

function UploadDocumentsModel(props: any) {
  const { open, setOpen, view, changeView, docData, leisureActivityId } = props;
  const {
    user: { firstName, lastName },
  }: any = useAuth();

  const { onSubmit, theme, methods, handleSubmit, isSubmitting } =
    useUploadDocumentsModal({
      view,
      docData,
      leisureActivityId,
      setOpen,
    });

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          changeView("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="subtitle1">
              Person Uploaded:{" "}
              {view == "add"
                ? `${firstName ?? "-"} ${lastName ?? "-"}`
                : docData?.uploadBy}
            </Typography>
            <CloseIcon
              onClick={() => {
                setOpen(false);
                changeView("");
              }}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={4} columnSpacing={2}>
              {UploadDocFormData.map((form: any, i) => (
                <Grid item xs={12} md={form?.gridLength} key={i}>
                  <form.component
                    {...form.componentProps}
                    size="small"
                    disabled={view === "view" ? true : false}
                  >
                    {form.componentProps.select
                      ? form.componentProps.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              {view == "view" ? (
                ""
              ) : (
                <LoadingButton
                  type="submit"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                  loading={isSubmitting}
                >
                  Upload
                </LoadingButton>
              )}

              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() => {
                  setOpen(false);
                  changeView("");
                }}
              >
                Clear
              </Button>
            </Box>
          </FormProvider>
        </Box>
      </Modal>
    </>
  );
}

export default UploadDocumentsModel;

// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "35%" },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
};
