import {
  useCreatemedicalAppointmentsMutation,
  useDeletemedicalAppointmentsMutation,
  useLazyMedicalAppointmentsByIdQuery,
  useUpdatemedicalAppointmentsMutation,
} from "@root/services/foster-child/health-medical-history/medicalAppointments/medicalAppointments";
import router from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { MedicalAppointmentsInfoListValue } from ".";

const useMedicalAppointmentForm = (props: any) => {
  const { action, fosterChildId, medicalAppointmentID } = props;
  //States
  const [isloading, setisloading] = useState(false);
  const [isFatching, setisFatching] = useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  ///api handlers
  const [createmedicalAppointments] = useCreatemedicalAppointmentsMutation();
  const [updatemedicalAppointments] = useUpdatemedicalAppointmentsMutation();
  const [medicalAppointmentsById] = useLazyMedicalAppointmentsByIdQuery();
  const [deletemedicalAppointments] = useDeletemedicalAppointmentsMutation();
  const SubmitData = (data: any) => {
    setisFatching(true);
    const senddata: any = {};
    const keys = Object.keys(MedicalAppointmentsInfoListValue);
    for (const medicalkeys of keys) {
      if (data[medicalkeys]) {
        senddata[medicalkeys] = data[medicalkeys];
      }
    }

    if (action === "add") {
      createmedicalAppointments({
        params: {
          fosterChildId: fosterChildId,
        },
        body: data,
      })
        .unwrap()
        .then((data) => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });

          router.push({
            pathname:
              "/foster-child/health-medical-history/medical-appointments/actions",
            query: {
              action: "edit",
              fosterChildId: fosterChildId,
              medicalAppointmentID: data?.data?.id,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else if (action === "edit") {
      updatemedicalAppointments({
        params: {
          medicalAppointmentId: medicalAppointmentID,
        },
        body: senddata,
      })
        .unwrap()
        .then(() => {
          setisFatching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/foster-child/health-medical-history/medical-appointments/",
            query: {
              fosterChildId: fosterChildId,
            },
          });
        })
        .catch((error: { data: { message: any } }) => {
          setisFatching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
        });
    } else {
      return null;
    }
  };
  const getDefaultValue = async () => {
    setisloading(true);

    if (action === "view" || action === "edit") {
      const { data, isError } = await medicalAppointmentsById({
        params: {
          medicalAppointmentId: medicalAppointmentID,
        },
      });

      setisloading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return MedicalAppointmentsInfoListValue;
      }
      const responseData = { ...data?.data?.getMedicalAppointment };
      for (const key in responseData) {
        if (key.includes("Date") || key.includes("date")) {
          responseData[key] = new Date(responseData[key]);
        }
      }

      return responseData;
    } else {
      setisloading(false);
      return MedicalAppointmentsInfoListValue;
    }
  };
  const deleteHander = (medicalAppointmentId: any) => {
    deletemedicalAppointments({
      params: {
        medicalAppointmentId: medicalAppointmentId,
      },
    })
      .unwrap()
      .then(() => {
        enqueueSnackbar("Information Delete Successfully", {
          variant: "success",
        });
      })
      .catch((error: { data: { message: any } }) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  return {
    SubmitData,
    isloading,
    isFatching,
    modelOpen,
    getDefaultValue,
    deleteHander,
  };
};
export default useMedicalAppointmentForm;
