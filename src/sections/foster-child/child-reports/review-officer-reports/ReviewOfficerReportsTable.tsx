import { useRouter } from "next/router";
import React from "react";

import { Box, Card } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useReviewOfficerReportsTable } from "./useReviewOfficerReportsTable";
export const ReviewOfficerReportsTable = (props: any) => {
  const router = useRouter();
  const { fosterChildId } = props;
  const {
    //   data,
    // isError,
    // isLoading,
    // isSuccess,
    // isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useReviewOfficerReportsTable();

  const TableData = [
    {
      fosterCareer: "Allie Grater",
      DateofReviewMeeting: "04/11/2021",
      ReviewingOfficer: "RoseMarry",
      SupervisingSocialWorker: "Anne Teak",
      fosterCareers: "Teri Dactyl",
    },
  ];

  const columns = [
    {
      accessorFn: (row: any) => row?.fosterCareer,
      id: "fosterCareer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Foster Carer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.DateofReviewMeeting,
      id: "DateofReviewMeeting",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Review Meeting</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.ReviewingOfficer,
      id: "ReviewingOfficer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reviewing Officer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.SupervisingSocialWorker,
      id: "SupervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.fosterCareers,
      id: "fosterCareers",
      cell: (info: any) => info.getValue(),
      header: () => <span>{`Foster Career's`}</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/review-officer-reports/${info.getValue()}/view`,
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction
            type="print"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/review-officer-reports/${info.getValue()}/print`,
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction
            type="share"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-reports/review-officer-reports/${info.getValue()}/share`,
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];

  return (
    <>
      <Card>
        <TableHeader
          // showAddBtn
          title="REVIEWING OFFICER REPORTS"
          searchKey="search"
          onChanged={headerChangeHandler}
          // onAdd={() =>
          //   router.push({
          //     pathname:"/money-management/kidiee-saving/add-kidiee-saving-form",
          //     // query: { fosterChildId: fosterChildId },
          //   })
          // }
        />
        <CustomTable
          showSerialNo
          data={TableData}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isPagination={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};
