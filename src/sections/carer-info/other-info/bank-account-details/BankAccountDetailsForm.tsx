import React, { useState, useEffect, useCallback } from "react";
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
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";

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
export default function BankAccountDetailsForm(props: any) {
  const {
    content,
    readOnly,
    btnType,
    openModal,
    closeModal,
    formData,
    status,
    modalStatus,
  }: any = props;

  const theme: any = useTheme();
  const [open, setOpen] = useState(false);

  const selectedRow = content?.row?.original;

  const handleOpen = () => {
    modalStatus(true);
    setOpen(true);
  };
  // const handleClose = () => {
  //   modalStatus(false);
  //   setOpen(false);
  //   !readOnly && closeModal(false);
  // };
  const handleClose = useCallback(() => {
    modalStatus(false);
    setOpen(false);
    !readOnly && closeModal(false);
  }, [modalStatus, setOpen, closeModal, readOnly]);

  useEffect(() => {
    status?.isSuccess && handleClose();
  }, [status?.isSuccess]);
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
              Person Uploaded :{selectedRow?.personUploaded}
            </Typography>
            <FormPiece
              disableForm={readOnly}
              selectedRow={selectedRow}
              formData={formData}
              isError={status?.isError}
              isLoading={status?.isLoading}
            >
              <Button
                size="small"
                variant="contained"
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.dark },
                }}
                onClick={handleClose}
              >
                {readOnly ? "Close" : "Cancel"}
              </Button>
            </FormPiece>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const FormPiece = (props: any) => {
  const { disableForm, children, selectedRow, formData, isError, isLoading } =
    props;

  //-------------------------------------------//
  const defaultValues = {
    accountNumber: selectedRow?.accountNumber || "",
    sortName: selectedRow?.sortName || "",
    accountType: selectedRow?.accountType || "Platinum",
    accountName: selectedRow?.accountName || "",
    bankName: selectedRow?.bankName || "",
  };
  //-----------------------------------------------//
  const FormSchema = Yup.object().shape({
    accountNumber: Yup.string()
      .matches(/^UK0[0-9]{8}$/, "Please match UK0XXXXXXXX")
      .required("Required"), //1
    sortName: Yup.string().required("Required"), //2
    bankName: Yup.string().required("Required"), //3
    accountName: Yup.string().required("Required"), //4
    accountType: Yup.string().required("Required"), //5
  });

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { reset, handleSubmit } = methods;
  const onSubmit = (data: any) => {
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
        <Grid
          item
          xs={12}
          md={12}
          display={"flex"}
          justifyContent={"space-between"}
        >
          {!disableForm && (
            <LoadingButton
              size="small"
              loading={isLoading}
              type="submit"
              variant="contained"
              color={isError ? "error" : "primary"}
              sx={{
                mt: 1,
              }}
            >
              {isError ? "Try Again" : "Submit"}
            </LoadingButton>
          )}
          {children}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export const formDataArray = [
  {
    id: 1,
    componentProps: {
      name: "accountNumber",
      label: "Account Number",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "sortName",
      label: "Sort Name",
    },
    component: RHFTextField,
  },
  {
    id: 3,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "bankName",
      label: "Name OF Bank",
    },
  },
  {
    id: 4,
    component: RHFTextField,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "accountName",
      label: "Account Name",
    },
  },
  {
    id: 4,
    gridLength: 6,
    component: RHFSelect,
    componentProps: {
      select: true,
      options: [
        {
          value: "SECONDARY",
          label: "Secondary",
        },
        {
          value: "PRIMARY",
          label: "Primary",
        },
      ],
      fullWidth: true,
      name: "accountType",
      label: "Account Type",
    },
  },
];
