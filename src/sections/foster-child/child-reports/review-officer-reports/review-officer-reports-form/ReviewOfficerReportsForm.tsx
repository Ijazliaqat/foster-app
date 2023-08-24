import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import IsFetching from "@root/components/loaders/IsFetching";
import { HospitalizationFromvalue } from ".";
import AccordianList from "@root/components/AccordianList";

export const ReviewOfficerReportsForm = (props: any) => {
  const { action, fosterChildId, hospitalizationId } = props;
  // const { SubmitData, getDefaultValue, isloading, isFatching } =
  //   useHospitalizationForm({
  //     action: action,
  //     fosterChildId: fosterChildId,
  //     hospitalizationId: hospitalizationId,
  //   });
  const methods: any = useForm({
    // mode: "onTouched",
    //   resolver: yupResolver(FormSchema),
    //   defaultValues: getDefaultValue,
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

  const theme: any = useTheme();

  // if (isloading) return <SkeletonFormdata />;

  const currencies = [
    { id: 1, value: "a", label: "A" },
    { id: 2, value: "b", label: "B" },
    { id: 3, value: "c", label: "C" },
    { id: 4, value: "d", label: "D" },
  ];
  return (
    <Box sx={{ px: 1, py: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <FormProvider methods={methods} onSubmit={handleSubmit()}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="name"
                  select
                  label="Name of foster carer"
                  defaultValue="a"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  // id="outlined-textarea"
                  label="Date of review meeting"
                  // placeholder="Placeholder"
                  multiline
                />
              </Grid>
            </Grid>
            {/* <IsFetching isFetching={isFatching} /> */}
            <Grid container>
                    {HospitalizationFromvalue.map((item: any) => (
                      <Grid item xs={12} key={item.title}>
                        <AccordianList
                          title={item.title}
                          component={item.component}
                        />
                      </Grid>
                    ))}
                  </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Box>
  );
};
