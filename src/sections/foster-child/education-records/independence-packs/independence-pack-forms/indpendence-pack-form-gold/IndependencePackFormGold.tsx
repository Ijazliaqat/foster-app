import { Grid, Box, Button, Typography, Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import {
  formData1,
  ListOfSkills,
  ListOfSkillsWithEvidence,
  formData2,
} from ".";
import { useIndependencePackFormGold } from "./useIndependencePackFormGold";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SingleLevel from "../../Levels/SingleLevel";
import BronzeLevel from "@root/assets/svg/bronze-level";
import { usePostUploadEvidenceMutation } from "@root/services/foster-child/education-records/independence-packs/IndependencePacks";

export default function IndependencePackFormGold(props: any) {
  const { level, action, inedependencePackData } = props;
  const {
    methods,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isDirty,
    theme,
    router,
  } = useIndependencePackFormGold({ action, inedependencePackData });

  let [postUploadEvidence, { isLoading: isLoadingPost }] =
    usePostUploadEvidenceMutation();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <RHFTextField
              disabled={action == "view" ? true : false}
              size="small"
              name="name"
              label="Name"
              fullWidth
            />
            <Box sx={{ mt: 4 }}>
              <RHFDatePicker
                disabled={action == "view" ? true : false}
                size="small"
                name="fromDate"
                label="From Date"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <SingleLevel levelName={level} isBadge={true}>
                <BronzeLevel width="40" height="66" color={"#FFFFFF"} />
              </SingleLevel>
            </Box>
          </Grid>
          {formData1.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  disabled={action == "view" ? true : false}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {" "}
                          {option.label}{" "}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <Grid container spacing={2} item sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills
              </Typography>
            </Grid>
            {ListOfSkills.map((form: any, i: any) => {
              return (
                <Grid item xl={12} xs={12} key={i}>
                  <form.component
                    disabled={action == "view" ? true : false}
                    size="small"
                    apiCall={form.otherOptions.file ? postUploadEvidence : null}
                    {...form.otherOptions}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {" "}
                            {option.label}{" "}
                          </option>
                        ))
                      : null}
                  </form.component>
                </Grid>
              );
            })}
          </Grid>
          <Grid container spacing={2} item sm={6}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: theme.palette.primary.main }}
              >
                List of Skills With My Evidence
              </Typography>
            </Grid>
            {ListOfSkillsWithEvidence.map((form: any, i: any) => {
              return (
                <Grid item xl={12} xs={12} key={i}>
                  <form.component
                    disabled={action == "view" ? true : false}
                    size="small"
                    apiCall={form.otherOptions.file ? postUploadEvidence : null}
                    {...form.otherOptions}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {" "}
                            {option.label}{" "}
                          </option>
                        ))
                      : null}
                  </form.component>
                </Grid>
              );
            })}
          </Grid>
          {formData2.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  {...form.otherOptions}
                  disabled={action == "view" ? true : false}
                  size="small"
                >
                  {form.otherOptions?.select
                    ? form.options.map((option: any, index: any) => (
                        <option key={index} value={option.value}>
                          {" "}
                          {option.label}{" "}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {action == "view" ? (
                ""
              ) : (
                <LoadingButton
                  sx={{ marginRight: "1rem" }}
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  disabled={action == "view" ? true : false}
                >
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
                  router.back();
                }}
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
