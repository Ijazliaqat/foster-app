import { Box, Button, Dialog, Grid, IconButton, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { formFields } from ".";
import { useAddFormModal } from "./useAddFormModal";
import { FormProvider } from "@root/components/hook-form";

const AddFormModal = ({ open, onClose, title }: any) => {
  const { methods, handleSubmit, router, onSubmit } = useAddFormModal();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={styles.root}>
        <Box sx={styles.modalHead}>
          <Typography sx={styles.formTitle}>{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseRoundedIcon sx={{ color: "#0E918C" }} />
          </IconButton>
        </Box>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {formFields.map((field: any, i: number) => (
              <Grid item md={field.gridLength} xs={12} key={i}>
                <Typography sx={styles.heading}>{field.title}</Typography>
                <field.component size={"small"} fullWidth {...field.otherOptions}>
                  {field.otherOptions?.select
                    ? field.otherOptions?.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </field.component>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ mt: 3, mb: 1 }}>
            <Button type="submit" variant="contained">
              Upload
            </Button>
          </Grid>
        </FormProvider>
      </Box>
    </Dialog>
  );
};

export default AddFormModal;

const styles = {
  root: (theme: any) => ({
    bgcolor: "background.paper",
    borderRadius: "4px",
    px: 2,
    py: 2,
  }),
  modalHead: {
    pb: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formTitle: {
    color: "#0E918C",
    fontSize: "18px",
    fontWeight: "600",
  },
  heading: {
    color: "#898989",
    fontSize: "16px",
    fontWeight: "600",
  },
};
