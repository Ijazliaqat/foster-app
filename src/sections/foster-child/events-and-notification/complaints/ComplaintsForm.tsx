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
import { FormProvider } from "@root/components/hook-form";
import router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";
import { ComplaintsData, ComplaintsDataValue } from ".";
import { FormSchema } from "../../health-medical-history/immunisation";

const backPath = "/foster-child/events-and-notification/complaints";
interface IComplaintsForm {
  fosterChildId: string;
  ComplaintsFormID?: string;
  action: "add" | "edit" |"view";
}
const ComplaintsForm = (props: IComplaintsForm) => {
  const { action, fosterChildId, ComplaintsFormID } = props;
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: ComplaintsDataValue,
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
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit()}>
            <Grid container>
              {/* <IsFetching isFetching={isFatching} /> */}
              {ComplaintsData.map((form: any, index) => {
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
                          disabled={
                            action === "view" ||
                            (action === "edit" && form.id === 1)
                              ? true
                              : false
                          }
                          InputLabelProps={{
                            shrink:
                              action === "view" ||
                              (action === "edit" && form.id === 1)
                                ? true
                                : undefined,
                            disabled:
                              action === "view" ||
                              (action === "edit" && form.id === 1)
                                ? true
                                : undefined,
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

export default ComplaintsForm;
