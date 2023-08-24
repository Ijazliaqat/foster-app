import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import React from "react";
import { CForm, defaultValues } from "./";
import { LoadingButton } from "@mui/lab";
import { usePetQuestionnaireCFrom } from "./usePetQuestionnaireCFrom";

export default function PetQuestionnaireC({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
  isError,
  isSuccess,
}: any) {
  const { methods, handleSubmit, onSubmit, isSubmitting, router, makePath } =
    usePetQuestionnaireCFrom({
      onSubmitHandler,
      initialValueProps,
      message,
    });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {CForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
              fullWidth
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
              color={isError ? "error" : isSuccess ? "success" : "primary"}
            >
              {isError ? "Try Again!" : isSuccess ? "Success" : "Next"}
            </LoadingButton>
            <Button
              type="button"
              variant="contained"
              onClick={() =>
                router.push(
                  makePath({
                    path: "/carer-info/personal-info/pet-questionnaire",
                    skipQueries: ["petId"],
                  })
                )
              }
            >
              Back
            </Button>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}
