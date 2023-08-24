import React from "react";
import { Box, Card, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import Microphone from "../../../assets/svg/Microphone.svg";
import Image from "next/image";
import { tableData } from ".";
import { useMarketingPlanMeetings } from "./useMarketingPlanMeetings";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useRouter } from "next/router";

const MarketingPlanMeetings = () => {

  const router = useRouter();

  const { handleDeleteModal, openDeleteModal, handleAction } =
    useMarketingPlanMeetings();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
          <span>Sr. No</span>
        </>
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingDate,
      id: "meetingDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingAttendees,
      id: "meetingAttendees",
      cell: (info: any) => (
        <ul style={{ listStyle: "none" }}>
          {info?.row?.original?.meetingAttendees?.map(
            (attendee: any, i: number) => (
              <li key={i}>{attendee}</li>
            )
          )}
        </ul>
      ),
      header: () => <span>Meeting Attendees (Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingAgenda,
      id: "meetingAgenda",
      cell: (info: any) => (
        <ul style={{ listStyle: "none" }}>
          {info?.row?.original?.meetingAttendees?.map(
            (attendee: any, i: number) => (
              <li key={i}>{attendee}</li>
            )
          )}
        </ul>
      ),
      header: () => <span>Meeting Agenda</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingActions,
      id: "meetingActions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Actions</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingMinutes,
      id: "meetingMinutes",
      cell: (info: any) => <Image src={Microphone} alt="icon" />,
      header: () => <span>Meeting Minutes</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingOutcome,
      id: "meetingOutcome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Outcome</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.marketingCoordinator,
      id: "marketingCoordinator",
      cell: (info: any) => info.getValue(),
      header: () => <span>Marketing Coordinator</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingManager,
      id: "meetingManager",
      cell: (info: any) => (
        <ul style={{ listStyle: "none" }}>
          {info?.row?.original?.meetingAttendees?.map(
            (attendee: any, i: number) => (
              <li key={i}>{attendee}</li>
            )
          )}
        </ul>
      ),
      header: () => <span>Meeting Manager</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit", "delete"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 1 }}>
      <TableHeader
        title={"Marketing Plan Meeting Records"}
        showAddBtn
        onAdd={() => router.push('/marketing/plan-meetings/form')}
      />
      <CustomTable
        isLoading={false}
        isError={false}
        isFetching={false}
        isSuccess={true}
        data={tableData}
        columns={columns}
        rootSX={{ mt: 1 }}
      />
      {openDeleteModal && (
        <DeleteModel
          open={openDeleteModal}
          handleClose={handleDeleteModal}
          onDeleteClick={() => {}}
        />
      )}
    </Card>
  );
};

export default MarketingPlanMeetings;
