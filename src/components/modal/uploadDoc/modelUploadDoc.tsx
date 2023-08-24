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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import TableAction from "@root/components/TableAction";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { LoadingButton } from "@mui/lab";
import IsFetching from "@root/components/loaders/IsFetching";
import React from "react";
import { Formet, UploadDocFormData, defvalue } from ".";

interface model {
  modelOpen?: boolean;
  setModelOpen?: any;
  isloading?: boolean;
  action?: string;
  showActions?: boolean;
  onSubmit?: any;
  isFetching?: boolean;
  defaultValuesdef?: any;
  defaultValues?: any;
  names?: any;
}
function ModelUploadDoc(props: model) {
  const {
    modelOpen,
    setModelOpen,
    action,
    showActions,
    onSubmit,
    isFetching,
    isloading,
    defaultValues,
    names,
  } = props;

  const [model, setModel] = React.useState(false);
  return (
    <Box>
      {showActions && (
        <TableAction
          size="small"
          type={action}
          onClicked={() => setModel(true)}
        />
      )}
      <Form
        open={action === "add" ? modelOpen : model}
        setOpen={action === "add" ? setModelOpen : setModel}
        isfatching={isFetching}
        onSubmit={onSubmit}
        action={action}
        defaultValues={defaultValues}
      />
    </Box>
  );
}
const Form = (props: any) => {
  const [isloading, setIsloading] = React.useState(false);
  const { open, action, setOpen, isfatching, onSubmit, defaultValues } = props;
  const theme: any = useTheme();
  const defevalue = async () => {
    setIsloading(true);
    let resdata = { ...defaultValues };

    if (action === "edit" || action === "view") {
      for (const key in resdata) {
        if (key.includes("Date")) {
          resdata["documentDate"] = new Date(resdata[key]);
        } else if (key.includes("documentType")) {
          resdata["documentType"] = resdata[key];
        } else if (key.includes("Password")) {
          resdata["password"] = resdata[key];
        } else if (key.includes("Name")) {
          resdata["documentName"] = resdata[key];
        }
      }
      setIsloading(false);
     
      return resdata;
    } else {
      setIsloading(false);
      return defvalue;
    }
  };

  const methods: any = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        documentType: Yup.string().required("required"),
        documentDate: Yup.date().required("required"),
        password: Yup.string().required("required"),
      })
    ),
    defaultValues: defevalue,
  });
  const { handleSubmit } = methods;
  const submit = (data: any) => {
    onSubmit(data);
    setOpen(false);
  };
  return (
    <>
      {open && (
        <Modal
          open={open}
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
            {isloading === true && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="subtitle1">
                    Person Uploaded: ...
                  </Typography>
                  <CloseIcon
                    // onClick={() => setOpen(false)}
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
            )}
            {isloading === false && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="subtitle1">
                    Person Uploaded: {defaultValues?.personUploaded ?? "--"}
                  </Typography>
                  <CloseIcon
                    onClick={() => setOpen(false)}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
                <FormProvider methods={methods} onSubmit={handleSubmit(submit)}>
                  <IsFetching isFetching={isfatching} />
                  <Grid container rowSpacing={4} columnSpacing={2}>
                    {UploadDocFormData.map((form: any) => (
                      <Grid item xs={12} md={form?.gridLength} key={form.id}>
                        <form.component {...form.componentProps} size="small">
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
                      {action === "add" || action === "edit" ? (
                        <RHFUploadFile name="documentFile" {...methods} />
                      ) : (
                        <RHFTextField
                          name="documentName"
                          disabled={true}
                          fullWidth={true}
                          InputLabelProps={{
                            shrink: true,
                            disabled: true,
                          }}
                          {...methods}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                    {action === "edit" || action === "add" ? (
                      <LoadingButton
                        type="submit"
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          "&:hover": { bgcolor: theme.palette.orange.main },
                        }}
                        variant="contained"
                        loading={isfatching}
                      >
                        Upload
                      </LoadingButton>
                    ) : null}
                    <Button
                      sx={{
                        bgcolor: theme.palette.orange.main,
                        "&:hover": { bgcolor: theme.palette.orange.main },
                      }}
                      variant="contained"
                      onClick={() => setOpen(false)}
                    >
                      back
                    </Button>
                  </Box>
                </FormProvider>
              </>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ModelUploadDoc;
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
