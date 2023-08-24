// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
// components
import { LoadingButton } from "@mui/lab";
import { panelActionData } from "./index";
import { FormProvider } from "@root/components/hook-form";
import { usePanelActionsForm } from "./usePanelActionsForms";

// ================================================================================

const PanelActionsForm = (props: any) => {
  const { theme, router, methods, onSubmit, handleSubmit, isSubmitting } = usePanelActionsForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ px: 1, py: 2 }}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {panelActionData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                  {form.title}
                </Typography>
                {form.component ? (
                  <form.component disabled={props.disabled} size="small" fullWidth {...form.otherOptions}>
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
                gap: "10px",
              }}
            >
              {!props?.disabled && (
                <LoadingButton sx={{ marginLeft: "0.3rem" }} type="submit" variant="contained" loading={isSubmitting}>
                  Submit
                </LoadingButton>
              )}
              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => {
                  router.push("/panel/panel-tools/action-comment");
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
export default PanelActionsForm;
