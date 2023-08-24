// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import {
  FormProvider,
  RHFTextField,
  RHFCheckbox,
  RHFSelect,
  RHFRadioGroup,
} from "../../../components/hook-form";
//
import { FormSchema, defaultValues } from ".";

export default function AboutCandidate() {
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log({ data });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <RHFTextField name="fullName" label="Full Name" />
            <RHFTextField name="email" label="Email address" />
            <RHFTextField name="age" label="Age" type="number" />

            <RHFSelect name="areaOffice" label="Area Office">
              {[1, 2, 3, 4].map((option, i) => {
                return (
                  <option key={i} value={i}>
                    {option}
                  </option>
                );
              })}
            </RHFSelect>

            <RHFRadioGroup
              name="areaOffice2"
              label="Area Office"
              options={[1, 2, 3, 4]}
            ></RHFRadioGroup>
            <RHFCheckbox name="terms" label=" Terms and Conditions" />
            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
              disabled={!isDirty}
            >
              Submit
            </LoadingButton>
          </Stack>
        </Grid>
        =
      </Grid>
    </FormProvider>
  );
}
