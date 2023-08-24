import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { advocacyHistoryFormData } from "..";
import { useSomeoneElseAdvocacyForm } from "../useSomeoneElseAdvocacyForm";

const CreateAdvocacyForm = () => {
    const { router, methods, theme, handleSubmit, onSubmit } = useSomeoneElseAdvocacyForm();
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={4} rowSpacing={3}>
                <Grid item md={6} xs={12}>
                    <RHFTextField sx={{ mt: 0.3 }} label="Type of Advocacy" name="advocacyType" size="small" fullWidth value={router.query.advocacyType || ""} disabled />
                </Grid>
                {advocacyHistoryFormData.map((form: any, i: any) => {
                    return (
                        <Grid item xs={12} md={form?.gridLength} key={i}>
                            <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode }}>{form.title}</Typography>
                            {form.component ? <form.component
                                disabled={router.query.action === "view"}
                                size="small"
                                {...form.otherOptions}
                            >
                                {form.otherOptions.select
                                    ? form.options.map((option: any) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))
                                    : null}
                            </form.component> :
                                <Typography sx={{ fontSize: "16px", fontWeight: 700, color: theme.palette.primary.main }}>{form.head}</Typography>
                            }
                        </Grid>
                    );
                })}
                <Grid item xs={12} >
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            router.query.action === "view" ?
                                router.push('/advocacy/child-advocacy/details/someone-else-form') :
                                router.push('/advocacy/child-advocacy/details/someone-else-form/create-advocacy')
                        }}
                        sx={{
                            backgroundColor: "#F6830F",
                            "&:hover": { backgroundColor: "#F6830F" },
                        }}
                    >
                        Back
                    </Button>
                    {router.query.action !== "view" && <Button
                        type="submit"
                        variant="contained"
                        sx={{ ml: 2 }}
                    >
                        Submit
                    </Button>}
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default CreateAdvocacyForm;

