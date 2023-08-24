import {
  Box,
  Grid,
  Button,
  Modal,
  Backdrop,
  Typography,
  useTheme,
  Skeleton,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { formSchemaModel, Formet, UploadViewDocFormData } from "..";
import { useState } from "react";
import { useLazyIncidentUploadDocumentBYIDQuery } from "@root/services/carer-info/personal-info/chronology-of-events/incident-api/incidentUploadDocumentsApi";
import { enqueueSnackbar } from "notistack";
import TableAction from "@root/components/TableAction";
// import { UploadDocFormData } from "../Index";
const IncidentViewDocumentModel = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme: any = useTheme();
  const [Open, setOpen] = useState(false);

  const { id } = props;
  return (
    <Box>
      <TableAction
        size="small"
        type="view"
        onClicked={() => {
          setOpen(true);
        }}
      />
      {Open && (
        <Modal
          open={Open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Box sx={Styles.root}>
            <Form setOpen={setOpen} id={id} />
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default IncidentViewDocumentModel;
const Form = (props: any) => {
  const { setOpen, id } = props;
  const [isloading, setisloading] = useState(true);
  const [incidentUploadDocumentBYID] = useLazyIncidentUploadDocumentBYIDQuery();
  const theme: any = useTheme();
  const defaultValues = {
    type: "",
    documentDate: new Date(),
    password: "",
    password1: "",
  };

  const methods = useForm({
    resolver: yupResolver(formSchemaModel),
    defaultValues: async () => {
      setisloading(true);
      const { data, isError, isSuccess }: any =
        await incidentUploadDocumentBYID({ id: id }, true);

      const responseData = { ...data.data };
      console.log(responseData);

      for (const key in responseData) {
        const value = responseData[key];
        if (Formet[key]) responseData[key] = Formet[key](value);
      }

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      if (isSuccess) {
        return responseData;
      }
    },
  });
  const { handleSubmit, getValues } = methods;
  const onsubmit = (data: any) => {};
  if (isloading)
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography variant="subtitle1">Person Uploaded: ...</Typography>
          <CloseIcon
            onClick={() => setOpen(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Grid container>
          <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              sx={Styles.skeleton(theme)}
            />
          </Grid>
          <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              sx={Styles.skeleton(theme)}
            />
          </Grid>
          <Grid xs={12} sm={6} sx={{ px: 2, py: 1.5 }} item>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              sx={Styles.skeleton(theme)}
            />
          </Grid>
          <Grid xs={12} sm={12} sx={{ px: 2, py: 1.5 }} item>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={"100%"}
              sx={Styles.skeleton(theme)}
            />
          </Grid>
        </Grid>
      </Box>
    );
  return (
    <Box>
      <FormProvider methods={methods} onSubmit={handleSubmit(onsubmit)}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="subtitle1">
            Person Uploaded: {getValues("uploadBy")}
          </Typography>
          <CloseIcon
            onClick={() => setOpen(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Grid container rowSpacing={4} columnSpacing={2}>
          {UploadViewDocFormData.map((form: any) => (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                disabled={true}
                InputLabelProps={{
                  shrink: true,
                  disabled: true,
                }}
                size="small"
              >
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          ))}
          <Grid xs={12} item>
            <RHFTextField
              name="documentName"
              disabled={true}
              InputLabelProps={{
                shrink: true,
                disabled: true,
              }}
              {...methods}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            sx={{
              bgcolor: theme.palette.orange.main,
              "&:hover": { bgcolor: theme.palette.orange.main },
            }}
            variant="contained"
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "35%" },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  skeleton: (theme: any) => ({
    bgcolor: theme.palette.mode === "light" ? theme.palette.grey[300] : "",
    borderRadius: "4px",
    height: 40,
  }),
};
