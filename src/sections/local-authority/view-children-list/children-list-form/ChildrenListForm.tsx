import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { ChildrenListFormData } from ".";
import { useChildrenListForm } from "./useChildrenListForm";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const ChildrenListForm = ({ disabled, }: any) => {
    const { methods, handleSubmit, onSubmit } = useChildrenListForm();

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container columnSpacing={4}>
                {ChildrenListFormData?.map((item: any) => (
                    <Grid item xs={12} md={item?.md} key={item?.id}>
                        {item.component && (
                            <item.component fullWidth
                                {...item.componentProps}
                                disabled={disabled}
                                size={"small"}
                            >
                                {item.componentProps.select ? item.options.map((option: any) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))
                                    :
                                    null}

                                {item?.heading}

                            </item.component>
                        )}
                        {!item.component && (
                            <RHFUploadFile name={"updatePhoto"} {...methods} required disabled={disabled} />
                        )}

                    </Grid>
                ))}

                <Grid item xs={12}>
                    {!disabled && (
                        <LoadingButton
                            type="submit"
                            variant="contained"
                            sx={{ mr: 2 }}
                        // loading={isSubmitting}
                        >
                            Submit
                        </LoadingButton>
                    )}
                    <Link
                        href={"/local-authority/local-authority-tab/view-children-list"}
                        style={{ textDecoration: "none" }}
                    >
                        <Button type="button" variant="contained">
                            Back
                        </Button>
                    </Link>
                </Grid>

            </Grid>
        </FormProvider>
    );
}


export default ChildrenListForm