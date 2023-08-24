import { useFieldArray, useForm } from "react-hook-form";
import { Box, Button, Grid, Modal, Typography, useTheme } from "@mui/material";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import AddIcon from "@mui/icons-material/Add";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { Fragment, useEffect, useRef, useState } from "react";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { addFormValuesSchema, EmploymentType, EXPERIENCE } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAddExperiencesFrom } from "./useAddExperiencesFrom";

function AddExperiencesModal({ open, setOpen }: any) {
  const { submitAddExperiencesForm } = useAddExperiencesFrom();

  const theme: any = useTheme();
  const [collapsedIndexes, setCollapsedIndexes] = useState<any>([]);
  const toggleCollapse = (index: any) => {
    if (collapsedIndexes.includes(index)) {
      setCollapsedIndexes(collapsedIndexes.filter((i: any) => i !== index));
    } else {
      setCollapsedIndexes([...collapsedIndexes, index]);
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(addFormValuesSchema),
  });

  const { control, handleSubmit } = methods;

  const { fields, append } = useFieldArray({
    control,
    name: "experiences",
  });

  const initialRenderRef = useRef(true);
  console.log(initialRenderRef);

  useEffect(() => {
    if (!initialRenderRef.current && open) {
      append(EXPERIENCE);
    } else {
      initialRenderRef.current = false;
    }
  }, [open, append]);

  const onSubmit = (data: any) => {
    submitAddExperiencesForm(data);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box>
        <Box sx={styles.root}>
          <Typography sx={styles.title(theme)}>Add Experience</Typography>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <RHFTextField
                  name="companyName"
                  label="Company Name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <RHFTextField
                  name="location"
                  label="Location"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <RHFUploadFile name="media" {...methods} required fullWidth />
              </Grid>
              <Grid item xs={6}></Grid>
              {fields?.map((field, index) => (
                <Fragment key={field.id}>
                  <Grid
                    item
                    xs={12}
                    sx={{ mt: 1 }}
                    onClick={() => toggleCollapse(index)}
                  >
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={styles.title(theme)}>
                        Experience No {index + 1}
                      </Typography>
                      {collapsedIndexes.includes(index) ? (
                        <KeyboardArrowDownIcon
                          sx={{ color: theme.palette.grey[900] }}
                        />
                      ) : (
                        <KeyboardArrowUpIcon
                          sx={{ color: theme.palette.grey[900] }}
                        />
                      )}
                    </Box>
                  </Grid>
                  {collapsedIndexes?.includes(index) ? null : (
                    <>
                      <Grid item xs={6}>
                        <RHFTextField
                          name={`experiences.${index}.title`}
                          label="Title"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <RHFSelect
                          name={`experiences.${index}.employmentType`}
                          label="Employment Type"
                          size="small"
                          fullWidth
                        >
                          {EmploymentType?.map((option: any) => (
                            <option key={option?.value} value={option?.value}>
                              {option?.label}
                            </option>
                          ))}
                        </RHFSelect>
                      </Grid>
                      <Grid item xs={12}>
                        <RHFCheckbox
                          name={`experiences.${index}.currentlyWorking`}
                          label="I am currently working in this role"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <RHFDatePicker
                          name={`experiences.${index}.startDate`}
                          label="Start Date"
                          size="small"
                          fullWidth={true}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <RHFDatePicker
                          name={`experiences.${index}.endDate`}
                          label="End Date"
                          size="small"
                          fullWidth={true}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <RHFTextField
                          multiline
                          rows={3}
                          name={`experiences.${index}.headline`}
                          label="HeadLine"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <RHFTextField
                          multiline
                          rows={3}
                          name={`experiences.${index}.industry`}
                          label="Industry"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <RHFTextField
                          multiline
                          rows={3}
                          name={`experiences.${index}.description`}
                          label="Description"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                    </>
                  )}
                </Fragment>
              ))}
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  variant="text"
                  startIcon={<AddIcon />}
                  onClick={() => append({})}
                >
                  Add Another Experiences
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "end" }}>
                  <Button
                    sx={styles.btnBack}
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button sx={styles.btnSuccess} type="submit">
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </FormProvider>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddExperiencesModal;

const styles = {
  root: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 60rem)",
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  title: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: "1rem",
  }),
  actionBtnBox: (theme: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnBack: (theme: any) => ({
    bgcolor: theme.palette.orange.main,
    color: theme.palette.primary.contrastText,
  }),
  btnSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
};
