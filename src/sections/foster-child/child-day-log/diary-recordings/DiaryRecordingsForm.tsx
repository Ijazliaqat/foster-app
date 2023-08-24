import { Grid, useTheme, Button, Box, Paper, Typography } from "@mui/material";
import React from "react";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { diaryRecordingData } from "./index";
import { useDiaryRecordingsForm } from "./useDiaryRecordingsForm";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const DiaryRecordingsForm = (props: any) => {
  const { action, id } = props;
  const theme: any = useTheme();
  //Diary Recordings  Custom Hook
  const { router, methods, onSubmit, handleSubmit, isSubmitting, isLoading } =
    useDiaryRecordingsForm(action, id);
  const { fosterChildId } = router.query;
  if (isLoading) return <SkeletonFormdata />;

  return (
    <Grid container>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={4} columnSpacing={5} alignItems="center">
          {diaryRecordingData.map((form: any) => {
            return (
              <Grid
                item
                xs={12}
                md={form?.gridLength}
                key={form.id}
                sx={{ mt: 1 }}
              >
                {form.component !== "RadioGroup" && (
                  <form.component
                    size="small"
                    {...form.otherOptions}
                    disabled={action === "view" ? true : false}
                    InputLabelProps={{
                      shrink: action === "view" ? true : undefined,
                      disabled: action === "view" ? true : undefined,
                    }}
                  >
                    {form.otherOptions.select
                      ? form.options.map((option: any) => (
                          <option key={option.id} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            );
          })}
          <Grid xs={12} item>
            <Paper
              elevation={0}
              sx={{
                boxShadow: `0px 0px 3px 1px ${theme.palette.primary.main}`,
              }}
            >
              <Box sx={{ px: 2, py: 2 }}>
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: theme.typography.fontWeightMedium,
                    mb: theme.spacing(2),
                  }}
                  component={"p"}
                  variant="subtitle2"
                >
                  Notification
                </Typography>
                <Grid item xs={6}>
                  <RHFSelect
                    size="small"
                    label={"Select User to be Notified"}
                    name={"notifiedUser"}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      color: theme.palette.grey[500],
                      fontWeight: theme.typography.fontWeightMedium,
                      mb: theme.spacing(2),
                    }}
                    variant="subtitle2"
                  >
                    Enter Additional Email Addresses to be notified: (Email
                    Addresses should be seprated by commas.For example
                    john@domain.com, Pete@domain.com)
                  </Typography>
                  <RHFTextField
                    fullWidth={true}
                    size="small"
                    name={"emailAdditional"}
                  />
                </Grid>
              </Box>
            </Paper>
          </Grid>

          <Grid
            xs={12}
            sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
            item
          >
            {action === "add" || action === "edit" ? (
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  "&:hover": { bgcolor: theme.palette.primary.main },
                }}
                variant="contained"
              >
                Submit
              </LoadingButton>
            ) : null}
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push({
                  pathname: "/foster-child/child-day-log/diary-recordings",
                  query: {
                    fosterChildId: fosterChildId,
                  },
                })
              }
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Grid>
  );
};

export default DiaryRecordingsForm;
