import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { auditInfoData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import edit from "../../../assets/svg/marketing/auditInfoEdit.svg";
import { useAuditInfoModal } from "./useAuditInfoModal";

interface IProps {
  open: boolean;
  handleClose?: () => void;
}

const AuditInfoMarketingModal = (props: IProps) => {
  const { handleClose, open } = props;
  const {
    editForm,
    setEditForm,
    disabled,
    setdisabled,
    handleSubmit,
    methods,
    onSubmit,
  } = useAuditInfoModal();

  useEffect(() => {
    setEditForm(false);
    setdisabled(true);
  }, [handleClose, setEditForm, setdisabled]);

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogContent sx={{ padding: "0px", maxWidth: "850px" }}>
          <Box sx={styles.header}>
            <Typography
              component="p"
              variant="body1"
              fontWeight="600"
              sx={{ color: "#fff" }}
            >
              Audit Info
            </Typography>
            <Box sx={{ display: "flex" }} gap={0.5}>
              <Image
                src={edit}
                alt="icon"
                onClick={() => {
                  setEditForm(true), setdisabled(false);
                }}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {auditInfoData.map((form: any, i: number) => (
                  <Grid item xs={12} md={form.gridLength} key={i}>
                    <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>
                      {form.title}
                    </Typography>
                    <form.component disabled={disabled} {...form.otherOptions}>
                      {form.otherOptions.select
                        ? form.otherOptions.options.map((option: any) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))
                        : null}
                    </form.component>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} sx={{ mt: "40px" }}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  {editForm && (
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      disabled={disabled}
                    >
                      Save
                    </LoadingButton>
                  )}
                  <Button
                    sx={{
                      backgroundColor: "#F6830F",
                      "&:hover": { backgroundColor: "#F6830F" },
                    }}
                    type="button"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </FormProvider>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuditInfoMarketingModal;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
  box: {
    minWidth: "85px",
    margin: 0,
  },
  header: (theme: any) => ({
    height: "48px",
    background: "#F6830F",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(0.5),
    borderRadius: `8px 8px 0 0`,
    padding: theme.spacing(0, 1.8),
  }),
};
