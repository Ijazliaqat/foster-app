import React from "react";
import { Button, Card, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";

import { useChildPersonalGoalListView } from "./useChildPersonalGoalListView";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Error from "@root/components/Error";

export const ChildPersonalGoalsListView = (disabled: any) => {
  const {
    router,
    theme,
    methods,
    childPersonalGoalViewData,
    isLoading1,
    isSuccess1,
    isError1,
  }: any = useChildPersonalGoalListView();

  return (
    <Card sx={{ p: 2 }}>
      {isLoading1 ? (
        <SkeletonFormdata />
      ) : isSuccess1 ? (
        <FormProvider methods={methods} disableForm={disabled}>
          <Grid container spacing={3}>
            {childPersonalGoalViewData?.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form?.id}>
                  <>
                    {" "}
                    {form.component ? (
                      <form.component
                        {...form.componentProps(methods.getValues)}
                        disabled={true}
                        size="small"
                      />
                    ) : (
                      <Typography
                        variant={form.variant}
                        color={theme.palette.primary.main}
                      >
                        {" "}
                        {form.heading}{" "}
                      </Typography>
                    )}{" "}
                  </>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <Button
                sx={{
                  bgcolor: theme?.palette?.orange?.main,
                  "&:hover": { bgcolor: theme?.palette?.orange?.main },
                  ml: 1,
                }}
                variant="contained"
                onClick={() => router.back()}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      ) : (
        isError1 && (
          <div
            style={{
              textAlign: "center",
              padding: "20px 0px 20px 0px",
              color: "red",
            }}
          >
            <h3>Server Not Respoonding</h3>
          </div>
        )
      )}
    </Card>
  );
};
