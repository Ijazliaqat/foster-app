// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
// components
import { administratorData } from "./index";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { usePanelAdministratorForm } from "./usePanelAdministratorForm";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

// ====================================================================================================

const PanelAdministratorForm = (props: any) => {
  const { theme, router, handleSubmit, onSubmit, methods } = usePanelAdministratorForm();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ py: 2, px: 1 }}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {administratorData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                  {form.title}
                </Typography>
                {form.requireFileUpload && (
                  <Box sx={{ position: "relative" }}>
                    <RHFUploadFile label = "Uploaded File" disabled name="uploadPhoto" {...methods} require />
                    <DownloadForOfflineIcon sx={styles.downloadIcon} onClick={() => alert("Icon clicked!")} />
                  </Box>
                )}
                {form.component ? (
                  <form.component disabled={props.disabled} size="small" {...form.otherOptions}>
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                ) : (
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, color: theme.palette.primary.main }}>{form.head}</Typography>
                )}
              </Grid>
            );
          })}

          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.push("/panel/panel-tools/administrator");
                }}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </FormProvider>
  );
};
export default PanelAdministratorForm;

//  ========================================================================
const styles = {
  downloadIcon: {
    color: "#198754",
    cursor: "pointer",
    position: "absolute",
    right: { md: "-30px", xs: "0" },
    top: { md: "8px", xs: "-25px" },
  },
};
