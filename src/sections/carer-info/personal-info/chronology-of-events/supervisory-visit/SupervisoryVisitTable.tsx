import CustomTable from "@root/components/Table/CustomTable";
import React, { useRef } from "react";
import { useSupervisoryVisit } from "./useSupervisoryVisit";
import TableHeader from "@root/components/TableHeader";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import dayjs from "dayjs";

const SupervisoryVisitTable = () => {
  const tableHeaderRef = useRef<any>();
  //OOH Report Custom Hook
  const { data, router } = useSupervisoryVisit();

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.socialWorker ?? "-",
      id: "socialWorker",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateVisit ?? "-",
      id: "dateVisit",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitType,
      id: "visitType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Visit Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.locked,
      id: "locked",
      cell: (info: any) => info.getValue(),
      header: () => <span>Locked</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childOutcome,
      id: "childOutcome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Outcome</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.fcSignature,
      id: "fcSignature",
      cell: (info: any) => info.getValue(),
      header: () => <span>Fc Signature</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-chronology-of-events/supervisory-visit"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <TableHeader
        ref={tableHeaderRef}
        title="Supervisory Home Visit"
        searchKey="search"
        onChanged={(data: any) => {}}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </>
  );
};

export default SupervisoryVisitTable;
