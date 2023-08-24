import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { useAdvocacyHistory } from "../useAdvocacyHistory";
import { advocacyHistoryFormData } from "..";

const AdvocacyHistoryForm = () => {
    const { router, methods, theme } = useAdvocacyHistory();

    return (
        <FormProvider methods={methods}>
            <Grid container columnSpacing={4} rowSpacing={3}>
                {advocacyHistoryFormData.map((form: any, i: any) => {
                    return (
                        <Grid item xs={12} md={form?.gridLength} key={i}>
                            <Typography sx={{ fontWeight: 600, mb: 0.3, color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode }}>{form.title}</Typography>
                            {form.component ? <form.component
                                disabled={true}
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
                <Grid item xs={12}>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => router.push('/advocacy/child-advocacy/details/history')}
                        sx={{
                            backgroundColor: "#F6830F",
                            "&:hover": { backgroundColor: "#F6830F" },
                        }}
                    >
                        Back
                    </Button>
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default AdvocacyHistoryForm;

