import React from "react";
import { Button, Dialog, DialogTitle, Grid, } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LaSocialMediaFormData } from ".";
import { useLaSocialMedia } from "../useLaSocialMedia";

const AddPoliciesAgreementForm = (props: any) => {
    const { isAddSocialMediaIcon, setIsAddSocialMediaIcon, actionType } = props;
    const { methods, handleSubmit, onSubmit } = useLaSocialMedia();

    return (
        <Dialog
            open={isAddSocialMediaIcon}
            onClose={() => setIsAddSocialMediaIcon(false)}
            maxWidth="lg"
            PaperProps={{ sx: { maxHeight: 600 } }}
        >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle sx={styles.title}>Social Media Account</DialogTitle>
                <Grid container columnSpacing={4} sx={{ p: 3 }}>
                    {LaSocialMediaFormData?.map((item: any) => (
                        <Grid item xs={12} md={item?.md} key={item?.id}>
                            <item.component
                                {...item.componentProps}
                                disabled={actionType === 'edit' && true}
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

                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Save
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{
                                backgroundColor: "#F6830F",
                                "&:hover": { backgroundColor: "#F6830F" },
                            }}
                            onClick={() => setIsAddSocialMediaIcon(false)}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </FormProvider>
        </Dialog>
    );
};

export default AddPoliciesAgreementForm;

const styles = {
    title: {
        marginBottom: "5px",
        fontSize: "16px !important",
        fontWeight: "600",
    },
};
