import { FC, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Grid, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import { FormProvider } from "@root/components/hook-form";
import FormField from "./FormField";
import { LoadingButton } from "@mui/lab";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const FormGenerator: FC<any> = ({
  FormSchema,
  defaultValues,
  fieldsInfo,
  submitClickHand,
  disabled,
  isFormSubmitting,
  isSkeletonVisible,
  defaultRole,
  resetDefaultValues,
}) => {
  const theme: any = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    ...(!!FormSchema && { resolver: yupResolver(FormSchema) }),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = async (data: any) => {
    submitClickHand(data);
  };

  useEffect(() => {
    reset(() => resetDefaultValues);
  }, [resetDefaultValues, reset]);

  if (isSkeletonVisible) return <SkeletonFormdata />;
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} mb={5}>
        {fieldsInfo.map((data: any, index: number) => {
          const {
            type,
            name,
            label,
            title,
            options,
            gridSize = { xs: 12, md: 6 },
            heading,
            ...other
          } = data;
          const titleIndex = title?.indexOf("(");
          if (heading)
            return (
              <Grid item xs={12} key={index}>
                <Typography
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  {heading}
                </Typography>
              </Grid>
            );
          return (
            <Grid key={index} item {...gridSize}>
              {title && (
                <Typography
                  sx={{ color: theme.palette.grey[500], mb: 0.3 }}
                  variant="body2"
                >
                  <Box component="span" sx={{ fontWeight: 600 }}>
                    {titleIndex !== -1
                      ? title?.substring(0, titleIndex)
                      : title}
                  </Box>
                  {titleIndex !== -1 ? title?.substring(titleIndex) : ""}
                </Typography>
              )}
              <FormField
                fieldType={type}
                name={name}
                label={label}
                disabled={isSubmitting || disabled}
                options={options}
                size="small"
                {...other}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          {defaultRole !== "FOSTER_CARER" && (
            <LoadingButton
              color="primary"
              size="large"
              type="submit"
              variant="contained"
              loading={isFormSubmitting}
              disabled={isFormSubmitting}
            >
              Submit
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default FormGenerator;
