/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  useTheme,
  Button,
} from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import { FormSchema, IncidentFormData } from ".";
import router from "next/router";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import useIncidentFrom from "./useIncidentFrom";
import IsFetching from "@root/components/loaders/IsFetching";
const IncFrom = (props: any) => {
  const { action, id } = props;
  const theme: any = useTheme();
  const {
    incidentById,
    onSubmitHandler,
    getDefaultValue,
    isLoading,
    isfatching,
    fosterCarerId,
  } = useIncidentFrom(action, id);

  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: getDefaultValue,
  });
  const { trigger, setValue, handleSubmit, getValues, watch, reset } = methods;

  if (isLoading) return <SkeletonFormdata />;

  return (
    <Box>
      <Typography
        sx={{
          color: theme.palette.grey[500],
          fontWeight: theme.typography.fontWeightMedium,
          mb: theme.spacing(2),
        }}
        variant="subtitle2"
      >
        URN Number : CH001
      </Typography>

      <Grid container>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <IsFetching isFetching={isfatching} />
          <Grid container>
            {IncidentFormData.map((form: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  <Box sx={{ px: 0.9, py: 1 }}>
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
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          : null}
                      </form.component>
                    )}
                    {form.component === "RadioGroup" && (
                      <Box
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Typography
                          sx={{
                            color: theme.palette.grey[500],
                            fontWeight: theme.typography.fontWeightMedium,
                          }}
                          variant="body1"
                          color="initial"
                        >
                          {form.otherOptions.label}
                        </Typography>
                        <RadioGroup
                          name={form.otherOptions.name}
                          defaultValue={getValues(`${form.otherOptions.name}`)}
                          onChange={(e) => {
                            console.log(form.otherOptions.name);

                            setValue(
                              `${form.otherOptions.name}`,
                              `${e.target.value === "yes" ? true : false}`
                            );
                            trigger(`${form.otherOptions.name}`);
                          }}
                          //  value={getValues(`${form.otherOptions.name}`)}
                          sx={{ display: "flex", flexDirection: "row" }}
                        >
                          {form?.Options?.map((mode: any, index: any) => {
                            return (
                              <Grid key={mode} item>
                                <FormControlLabel
                                  label={mode === true ? "yes" : "No"}
                                  control={<Radio />}
                                  value={mode}
                                  disabled={action === "view" ? true : false}
                                />
                              </Grid>
                            );
                          })}
                        </RadioGroup>
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
            {action === "view" && (
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
                      variant="subtitle2"
                    >
                      Notification
                    </Typography>
                    <Grid item xs={6}>
                      <RHFSelect
                        label={"Select User to be Notified"}
                        name={"SelectUsertobeNotified"}
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
                      <RHFTextField name={"EnterAdditionalEmailAddresses"} />
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            )}
            {action === "edit" || action === "add" ? (
              <Grid
                xs={12}
                sx={{
                  mt: 2,
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  px: 0.9,
                }}
                spacing={2}
                item
              >
                <Button
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    "&:hover": { bgcolor: theme.palette.primary.main },
                  }}
                  variant="contained"
                  type="submit"
                >
                  {action === "add" ? "Submit" : "Update"}
                </Button>
                <Button
                  sx={{
                    bgcolor: theme.palette.orange.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                  onClick={() =>
                    router.push({
                      pathname:
                        "/carer-info/personal-info/carer-chronology-of-events",
                      query: { fosterCarerId: fosterCarerId },
                    })
                  }
                >
                  back
                </Button>
              </Grid>
            ) : null}
          </Grid>
        </FormProvider>
      </Grid>

      {action === "view" && (
        <Grid container>
          <Grid xs={12} sx={{ mt: 2 }} item>
            <Button
              sx={{
                bgcolor: theme.palette.orange.main,
                "&:hover": { bgcolor: theme.palette.orange.main },
              }}
              variant="contained"
              onClick={() =>
                router.push({
                  pathname:
                    "/carer-info/personal-info/carer-chronology-of-events",
                  query: { fosterCarerId: fosterCarerId },
                })
              }
            >
              back
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default IncFrom;
