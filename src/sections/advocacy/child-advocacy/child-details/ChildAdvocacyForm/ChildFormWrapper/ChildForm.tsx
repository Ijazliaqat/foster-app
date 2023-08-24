import React from "react";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useChildAdvocacyForm } from "../useChildAdvocacyForm";
import { childAdvocacyFormData } from "..";

const ChildForm = () => {
  const { methods, handleSubmit, onSubmit, router } = useChildAdvocacyForm();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {childAdvocacyFormData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component fullWidth
              disabled={router.query.action === 'view-child-advocacy' && true}
              {...item.componentProps}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            onClick={() => router.push('/advocacy/child-advocacy/details/advocacy-form')}
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
          >
            Back
          </Button>
          {router.query.action !== 'view-child-advocacy' &&
            <Button
              type="submit"
              variant="contained"
              sx={{ ml: 2 }}
            >
              Submit
            </Button>
          }
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default ChildForm;

