import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import router from "next/router";
import { immunisationInfoFormValue } from "..";
import { useImmunisationForm } from "./useImmunisationForm";
import IsFetching from "@root/components/loaders/IsFetching";
import { LoadingButton } from "@mui/lab";

const backPath = "/foster-child/health-medical-history/immunisation";

const ImmunisationFrom = (props: any) => {
  const { action, id, immunisationData, setImmunisationId } = props;
  const { methods, onSubmit, handleSubmit, theme, isFetching, isSubmitting } =
    useImmunisationForm({
      action,
      id,
      immunisationData,
      setImmunisationId,
    });
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <IsFetching isFetching={isFetching} />
            <Grid container>
              {immunisationInfoFormValue.map((form: any, index) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={index}>
                    <Box sx={{ px: 0.5, py: 1 }}>
                      {form.component === "label" ? (
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.grey[600],
                            fontWeight: theme.typography.fontWeightMedium,
                          }}
                        >
                          {form.label}
                        </Typography>
                      ) : (
                        <form.component
                          size="small"
                          {...form.otherOptions}
                          disabled={action === "view" ? true : false}
                          InputLabelProps={{
                            shrink: action === "view" ? true : undefined,
                            disabled: action === "view" ? true : undefined,
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                );
              })}
              <Grid
                item
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  px: 0.9,
                }}
                xs={12}
              >
                {action === "edit" || action === "add" ? (
                  <LoadingButton
                    sx={{ marginRight: "1rem" }}
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
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
                    router.push(
                      `/foster-child/health-medical-history/immunisation?fosterChildId=${router.query.fosterChildId}`
                    )
                  }
                >
                  back
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImmunisationFrom;
