import { useState } from "react";
import { useRouter } from "next/router";
import { TableDummyData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import approveIcon from "../../../../assets/img/Approve.png";
import DeleteModel from "@root/components/modal/DeleteModel";
import Image from "next/image";

export const useTrainerRegistrationTable = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
  const router = useRouter();
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.sr_no,
      id: "sr_no",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainerName,
      id: "trainerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Trainer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courses,
      id: "courses",
      cell: (info: any) => info.getValue(),
      header: () => <span>Courses</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.specialisation,
      id: "specialisation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Specialisation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.availability,
      id: "availability",
      cell: (info: any) => info.getValue(),
      header: () => <span>Availability</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingType,
      id: "trainingType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvalStatus,
      id: "approvalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approval Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvedBy,
      id: "approvedBy",
      cell: (info: any) => info.getValue(),
      header: "Approved by (Role)",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvedDate,
      id: "approvedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved Date</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* <ActionModal content={info} /> */}
          <TableAction
            type="edit"
            onClicked={() => {
              router.push(
                "/training/manage-trainees/course-evaluation"
              );
            }}
            size="small"
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => setCancelDelete(!cancelDelete)}
          />
          <TableAction
            type="view"
            onClicked={() => {
              router.push(
                "/training/manage-trainees/course-evaluation"
              );
            }}
            size="small"
          />
          <Image
            src={approveIcon}
            style={{ cursor: "pointer" }}
            alt="img"
            width={30}
            height={30}
            onClick={() => alert("Request Approved")}
          />

          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };
  return {
    TableDummyData,
    router,
    handleDelete,
    columns,
  };
};
