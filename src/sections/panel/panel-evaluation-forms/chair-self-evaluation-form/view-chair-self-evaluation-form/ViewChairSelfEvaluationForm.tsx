// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { useViewChairSelfEvaluationForm } from "./useViewChairSelfEvaluationForm";
import { PanelSelfEvaluationFormData } from ".";

const ViewChairSelfEvaluationForm = (props: any) => {
  const {
    methods,
    theme,
    router
  } = useViewChairSelfEvaluationForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "600",
                fontSize: "16px",
                mb:"15px",
              }}
            >
              Self-Evaluation Form: Panel Chair
            </Typography>
          </Grid>
          {PanelSelfEvaluationFormData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                {form.component ? (
                  <form.component disabled={props.disabled} size="small" {...form.otherOptions} >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {" "}
                          {option.label}{" "}
                        </option>
                      ))
                      : null}
                  </form.component>
                ) : (
                  <Typography sx={{ fontSize: "16px", fontWeight: 600, margin: 0, color: theme.palette.primary.main }}>{form.head}</Typography>
                )}
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>

              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => router.push("/panel/panel-evaluation-forms/chair-evaluation-form")}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
export default ViewChairSelfEvaluationForm
