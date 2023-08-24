import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableAction from "@root/components/TableAction";
import { Grid, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import dayjs from "dayjs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

export default function UploadDocumentModal(props: any) {
  const [open, setOpen] = useState(false);

  const theme: any = useTheme();

  const {
    content,
    readOnly,
    btnType,
    openModal,
    closeModal,
    formData,
    column,
  } = props;
  const selectedRow = content?.row?.original;
  // console.log(selectedRow);

  const handleOpen = () => {
    setOpen(true);
    console.log("View", content?.row?.original);
  };
  const handleClose = () => {
    setOpen(false);
    closeModal && closeModal(false);
  };

  return (
    <div>
      {btnType && (
        <TableAction type={btnType} onClicked={handleOpen} size="small" />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal || open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal || open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="body1"
              component="p"
              mb={3}
            >
              Person Uploaded :{selectedRow?.[column[3]]}
            </Typography>
            <DocumentModalForm
              disableForm={readOnly}
              selectedRow={selectedRow}
              formData={formData}
              column={column}
            >
              <Button
                size="small"
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.error.main,
                  "&:hover": { bgcolor: theme.palette.error.dark },
                }}
                onClick={handleClose}
              >
                {readOnly ? "Close" : "Cancel"}
              </Button>
            </DocumentModalForm>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const DocumentModalForm = (props: any) => {
  const { disableForm, children, selectedRow, formData, column } = props;
  const theme: any = useTheme();
  //-------------------------------------------//
  const defaultValues = {
    documentType: selectedRow?.[column[1]],
    documentDate: new Date(
      dayjs(selectedRow?.[column[2]]).format("MM/DD/YYYY")
    ),
    password: selectedRow?.[column[4]],
    chosenFile: { name: selectedRow?.[column[0]] },
  };
  //-----------------------------------------------//
  const FormSchema = Yup.object().shape({
    documentType: Yup.string().required("Required"), //1
    documentDate: Yup.date().required("Required"), //2
    password: Yup.string().required("Required"), //3
    chosenFile: Yup.mixed().required("Required"), //4
  });

  const methods: any = useForm({
    // resolver: yupResolver(FormSchema),//
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: any) => {
    // console.log(data, "submitted data");
    formData(data);
    // reset();
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {formDataArray.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <form.component
                {...form.componentProps}
                size="small"
                disabled={disableForm}
              >
                {" "}
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
        <Grid item xs={12} md={12}>
          <RHFUploadFile
            name="chosenFile"
            {...methods}
            disabled={disableForm}
          />
          {!!selectedRow?.[column[0]] && (
            <Grid container alignItems={"center"}>
              <iframe
                style={{ marginTop: "10px" }}
                src={
                  "https://ifa-s3-public-dev-001.s3.eu-west-2.amazonaws.com/" +
                  selectedRow?.[column[0]]
                }
                width={50}
                height={50}
              />
              <IframeModal
                src={
                  "https://ifa-s3-public-dev-001.s3.eu-west-2.amazonaws.com/" +
                  selectedRow?.[column[0]]
                }
              />
            </Grid>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {!disableForm && (
            <Button
              size="small"
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                bgcolor: theme.palette.primary.main,
                "&:hover": { bgcolor: theme.palette.primary.dark },
              }}
            >
              Submit
            </Button>
          )}
          {children}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

function IframeModal(props: any) {
  const { src, children } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <iframe
            style={{ marginTop: "10px" }}
            src={src}
            width={350}
            height={350}
          />
          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
export const formDataArray = [
  {
    id: 1,
    gridLength: 12,
    componentProps: {
      name: "documentType",
      label: "Document Type",
      fullWidth: true,
      select: true,
      options: [
        { value: "word", label: "Word" },
        { value: "pdf", label: "PDF" },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "documentDate",
      label: "Document Date",
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "password",
      label: "Password to open document",
    },
  },
];
