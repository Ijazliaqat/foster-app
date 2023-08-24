import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";
import { useAddOtherDocument } from "./useAddOtherDocument";
import { addOtherDocumentData } from ".";

const AddOtherDocument = (props: any) => {
  const { isAddModalOpen, setIsAddModalOpen, actionType, viewTableRow } = props;
  const { methods, handleSubmit, onSubmit } = useAddOtherDocument();

  return (
    <>
      <Dialog
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        maxWidth={"sm"}
      >
        <DialogContent>
          <Typography
            component={"p"}
            sx={{ fontWeight: 600, fontSize: "16px", mb: "20px" }}
          >
            {`${actionType === "add" ? "Add" : ""} Person Uploaded${
              actionType === "edit" ? ": " + viewTableRow.documentName : ""
            }`}
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {addOtherDocumentData.map((form: any, i: number) => (
                <Grid item xs={12} md={form.gridLength} key={i}>
                  <Typography sx={{ ...styles.title, mt: "15px", mb: 0.3 }}>
                    {form.title}
                  </Typography>
                  <form.component
                    disabled={actionType === "edit" && true}
                    {...form.otherOptions}
                  >
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
            <Grid item xs={12} md={12} sx={{ mt: "39px" }}>
              <RHFUploadFile
                name="updatePhoto"
                label={"Choose Files"}
                {...methods}
                disabled={actionType === "view" ? true : false}
                required={true}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: "40px" }}>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                {actionType === "add" && (
                  <LoadingButton type="submit" variant="contained">
                    Upload
                  </LoadingButton>
                )}
                <Button
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": { backgroundColor: "#F6830F" },
                  }}
                  type="button"
                  variant="contained"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddOtherDocument;

const styles = {
  title: { fontWeight: 600, fontSize: "16px" },
};
