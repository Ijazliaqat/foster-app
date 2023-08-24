import React from "react";
import { Badge, Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRef } from "react";
import router from "next/router";
import dayjs from "dayjs";
import useIncidentTable from "./useIncidentTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

const Incident = () => {
  const tableHeaderRefTwo = useRef<any>();
  // HANDLER FOR CONTROL TABLE
  const {
    incidentlist,
    incidentListError,
    incidentListIsloading,
    incidentlistIsfetching,
    incidentListIsSuccess,
    deleteHander,
    pageChangeHandler,
    sortChangeHandler,
    setsearch,
    fosterCarerId,
  } = useIncidentTable();

  const columns = [
    {
      accessorFn: (row: any) => row.incidentName,
      id: "incidentName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Name of Incident</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.incidentDate,
      id: "incidentDate",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>
      ),
      header: () => <span>Date of Incident</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: () => "-",
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <TableAction
              size="small"
              type="edit"
              onClicked={() =>
                router.push({
                  pathname:
                    "/carer-info/personal-info/carer-chronology-of-events/incident",
                  query: {
                    action: "edit",
                    id: `${info.row.original.id}`,
                    fosterCarerId: fosterCarerId,
                  },
                })
              }
            />
            <DeletePrompt
              onDeleteClick={() => deleteHander(info.row.original.id)}
            />

            <TableAction
              size="small"
              type="view"
              onClicked={() =>
                router.push({
                  pathname:
                    "/carer-info/personal-info/carer-chronology-of-events/incident",
                  query: {
                    action: "view",
                    id: `${info.row.original.id}`,
                    fosterCarerId: fosterCarerId,
                  },
                })
              }
            />
          </Box>
        );
      },
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Incident"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/incident",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
          onChanged={(e: any) => {
            setsearch(e.search);
          }}
        />
      </Box>
      <CustomTable
        data={incidentlist?.data?.incident ?? []}
        columns={columns}
        showSerialNo={true}
        isLoading={incidentListIsloading}
        isFetching={incidentlistIsfetching}
        isError={incidentListError}
        isSuccess={incidentListIsSuccess}
        isPagination={true}
        totalPages={incidentlist?.data?.meta?.pages ?? 0}
        currentPage={incidentlist?.data?.meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default Incident;

//Styling
