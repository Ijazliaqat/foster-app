import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useCourseEvaluation } from "./useCourseEvaluation";
import { courseEvaluation } from ".";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const CourseEvaluation = () => {
  const { theme, router, methods, handleSubmit, onSubmit } = useCourseEvaluation();

  return (
    <Card sx={{ p: 2 }}>
      <Typography sx={{ fontSize: "16px", fontWeight: "600", color: theme.palette.primary.main }}>
        Evaluation Form
      </Typography>
      <Box sx={{ mt: 2, px: 1 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {courseEvaluation.map((form: any, i: number) => (
              <Grid item xs={12} md={form.gridLength} key={i} sx={form.gridSX && form.gridSX}>
                <Typography
                  sx={{
                    fontWeight: form.fontWeight,
                    mb: 0.3,
                    color: theme.palette.grey[600],
                    width: form?.otherOptions?.name?.includes("question")
                      ? { xl: "44rem", xs: "auto" }
                      : "auto",
                    my: 1.5,
                  }}
                >
                  {form.title}
                </Typography>
                {form.head ? (
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        flexBasis: { xl: "50%", xs: "100%" },
                        mt: "-10px",
                        color: theme.palette.grey[600],
                      }}
                    >
                      {form.head}
                    </Typography>
                    {form.labels?.map((item: any) => (
                      <Typography
                        sx={{
                          display: { xl: "inline", xs: "none" },
                          fontWeight: 600,
                          mt: "20px",
                          mb: "-15px",
                          ml: item?.ml,
                          mr: item?.mr,
                          textTransform: "capitalize",
                          color: theme.palette.grey[600],
                        }}
                        key={item?.title}
                      >
                        {item?.title}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <form.component size="small" {...form.otherOptions}>
                    {form.otherOptions && form.otherOptions.select
                      ? form.otherOptions.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </form.component>
                )}
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F" } }}
                >
                  Submit
                </LoadingButton>
                <Button type="button" variant="contained" onClick={() => router.push("/training")}>
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Card>
  );
};

export default CourseEvaluation;
