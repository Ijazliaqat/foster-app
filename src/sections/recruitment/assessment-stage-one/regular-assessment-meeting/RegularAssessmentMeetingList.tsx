import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import {
  useGetRegularAssessmentAttendeesQuery,
  useGetRegularAssessmentDetailsQuery,
} from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";
import dayjs from "dayjs";
import React, { useRef } from "react";

const RegularAssessmentMeetingList = (props: any) => {
  const { setOpen, setId, setFieldsDisable, setActionType } = props;
  const tableHeaderRef = useRef<any>();
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } = useTableParams();
  const { data, isLoading, isError, isFetching, isSuccess } = useGetRegularAssessmentDetailsQuery({
    params,
  });
  const { data: attendeesData } = useGetRegularAssessmentAttendeesQuery({
    params,
  });

  const meta = data?.meta;
  const regularAssessmentList = data?.regularAssessmentList;
  const filteredAttendees =
    attendeesData?.data
      ?.map((item: any) => item)
      .filter((names: any, index: any, currentVal: any) => currentVal.indexOf(names) === index)
      ?.map((item: any) => ({ value: item, label: item })) || [];

  const SELECT_FILTERS = [
    {
      key: "attendees",

      label: "Attendees",

      options: [{ label: "All", value: "" }, ...filteredAttendees],
    },
  ];
  const meetingListColumns = [
    {
      accessorFn: (row: any) => row?.meetingDate + " " + dayjs(row?.meetingTime).format("hh:mm A"),
      id: "meetingDate",
      cell: (info: any) => info.getValue(),
      header: "Meeting Date/time",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.meetingAgenda,
      id: "meetingAgenda",
      cell: (info: any) => info.getValue(),
      header: "Meeting Agenda",
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row?.meetingAttendees,
      id: "meetingAttendees",
      cell: (info: any) => info.getValue(),
      header: "Meeting Attendees",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.meetingOutcomes,
      id: "meetingOutcomes",
      cell: (info: any) => info.getValue(),
      header: "Meeting Outcomes",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.meetingAction,
      id: "meetingAction",
      cell: (info: any) => info.getValue(),
      header: "Meeting Actions",
      isSortable: true,
    },

    {
      accessorFn: (row: any) =>
        row?.nextAssessmentDate + " " + dayjs(row?.nextAssessmentTime).format("hh:mm A"),
      id: "nextAssessmentDate",
      // cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Next Assessment plan",
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() => {
              setOpen(true);
              setId(info?.row?.original?.id);
              setActionType("edit");
            }}
          />
          <TableAction
            type="view"
            onClicked={() => {
              setOpen(true);
              setId(info?.row?.original?.id);
              setFieldsDisable(true);
              setActionType("view");
            }}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        showSelectFilters
        disabled={isLoading}
        title="Meeting Agenda"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          setOpen(true);
          setActionType("add");
        }}
        onChanged={headerChangeHandler}
        selectFilters={SELECT_FILTERS}
      />
      <CustomTable
        data={regularAssessmentList}
        columns={meetingListColumns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default RegularAssessmentMeetingList;
