import { LoadingButton } from "@mui/lab";
import { panelAgendaData } from "./index";
import { FormProvider } from "@root/components/hook-form";
import { usePanelAgendaForm } from "./usePanelAgendaForm";
import { Grid, Box, Button, Typography, Card } from "@mui/material";

// =================================================================================================

const PanelAgendaForm = (props: any) => {
  const { theme, router, handleSubmit, isSubmitting, onSubmit, methods } = usePanelAgendaForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ px: 1, py: 2 }}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          {panelAgendaData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === "light" ? "#343A40" : theme.palette.mode }}>
                  {form.title}
                </Typography>
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
                  router.push("/panel/panel-tools/agenda");
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
export default PanelAgendaForm;

//  ========================================================================
const styles = {
  card: {
    background: "#FFFFFF",
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    px: 1,
    py: 2,
  },
};
