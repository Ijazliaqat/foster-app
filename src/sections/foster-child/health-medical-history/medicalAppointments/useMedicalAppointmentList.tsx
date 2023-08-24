import { useTableParams } from "@root/hooks/useTableParams";
import { useMedicalAppointmentsListQuery } from "@root/services/foster-child/health-medical-history/medicalAppointments/medicalAppointments";
import { useState } from "react";

const useMedicalAppointmentList = (props: any) => {
  const { fosterChildId } = props;
  const [search, setSearch] = useState("");
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: MedicalAppointmentListdata,
    isError: MedicalAppointmentListIserror,
    isLoading: MedicalAppointmentListisLoading,
    isFetching: MedicalAppointmentListisFetching,
    isSuccess: MedicalAppointmentListisSuccess,
  } = useMedicalAppointmentsListQuery({
    params,
    search,
    fosterChildId,
  });
  return {
    MedicalAppointmentListdata,
    MedicalAppointmentListIserror,
    MedicalAppointmentListisLoading,
    MedicalAppointmentListisFetching,
    MedicalAppointmentListisSuccess,
    params,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};

export default useMedicalAppointmentList;
