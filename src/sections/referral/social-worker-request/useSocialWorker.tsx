import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { SOCIAL_WORKER_TABLE_DATA } from ".";

export const useSocialWorker = () => {
  const tableHeaderRefTwo = useRef<any>();
  const navigate = useRouter();
  const theme: any = useTheme();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox
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
      accessorFn: (row: any) => row.social_worker,
      id: "Social Worker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "Gender",
      cell: (info: any) => info.getValue(),
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date_of_birth,
      id: "Date of birth",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "Status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referral_date,
      id: "Referrals Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referrals Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referred_by,
      id: "Referred By",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referred By</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referred_role,
      id: "Referrer Role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referrer Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="delete" onClicked={() => setOpenDelete(true)} />
          <TableAction
            type="edit"
            onClicked={() =>
              navigate.push(
                "/referral/social-worker-request/add-social-worker?action=edit"
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              navigate.push(
                "/referral/social-worker-request/add-social-worker?action=view"
              )
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(SOCIAL_WORKER_TABLE_DATA);
  const [openDelete, setOpenDelete] = React.useState(false);
  return {
    tableHeaderRefTwo,
    navigate,
    theme,
    data,
    setData,
    columns,
    openDelete,
    setOpenDelete,
  };
};
