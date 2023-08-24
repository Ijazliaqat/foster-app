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
import { useForm } from "react-hook-form";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";

import { FormSchema, OFsedFromData, OFsedValue } from ".";
import useOfstedNotificationFrom from "./useOfstedNotificationFrom";

const backPath = "/foster-child/events-and-notification/ofsted-notification";
interface OfstedNotificationform {
  fosterChildId: string;
  OfstedNotificationID?: string;
  action: "add" | "edit" | "view";
}

const OfstedNotificationform = (props: OfstedNotificationform) => {
  const { action, fosterChildId, OfstedNotificationID } = props;
  const { SubmitData, getDefaultValue, deleteHander, isloading, isFatching } =
    useOfstedNotificationFrom({
      action: action,
      fosterChildId: fosterChildId,
      OfstedNotificationID: OfstedNotificationID,
    });
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: getDefaultValue,
  });
  const {
    trigger,
    setValue,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = methods;
  if (isloading) return <SkeletonFormdata />;
  return (
    <Box sx={{ px: 0, py: 0.1 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit(SubmitData)}>
            <Grid container>
              <IsFetching isFetching={isFatching} />
              {OFsedFromData.map((form: any, index) => {
                return (
                  <Grid item xs={12} md={form?.gridLength} key={index}>
                    <Box sx={{ pr: 1, py: 1 }}>
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
                        >
                          {form.otherOptions.select &&
                            form.otherOptions.options.map((option: any) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                        </form.component>
                      )}
                    </Box>
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
                      <RHFTextField
                        fullWidth={true}
                        name={"EnterAdditionalEmailAddressesff"}
                      />
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
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
                  <Button
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      "&:hover": { bgcolor: theme.palette.primary.main },
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : null}

                <Button
                  sx={{
                    bgcolor: theme.palette.orange.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                  onClick={() =>
                    router.push({
                      pathname: `${backPath}`,
                      query: {
                        fosterChildId: fosterChildId,
                      },
                    })
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

export default OfstedNotificationform;
