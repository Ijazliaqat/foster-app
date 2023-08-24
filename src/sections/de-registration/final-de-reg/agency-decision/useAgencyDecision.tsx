import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useState } from "react";

export const useAgencyDecision = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const router = useRouter();
  const path = "/de-registration/deregister-foster-carer/agency-decision/form";
  const handleSearch = () => {};
  const handleCloseDeleteModal = () => setOpenDelete(!openDelete);
  const handleAction = (action?: string, id?: string) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
        break;
      case "edit":
        router.push({ pathname: path+"/edit" });
        break;
      case "view":
        router.push({ pathname: path+"/view" });
        break;
      case "delete":
        setOpenDelete(true);
        break;
      case "print":
        window.print();
      default:
        break;
    }
  };


  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row, table }: any) => (
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.time,
      id: "time",
      cell: (info: any) => info.getValue(),
      header: () => <span>Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.castName,
      id: "castName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Cast Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateMinutesCompleted,
      id: "dateMinutesCompleted",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Minutes Completed</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateSubmittedtoChairforRecommendation,
      id: "dateSubmittedtoChairforRecommendation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Submitted to Chair for Recommendation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.submitedAdmForApproval,
      id: "submitedAdmForApproval",
      cell: (info: any) => info.getValue(),
      header: () => <span>Submited ADM for approval</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ADMdecision,
      id: "ADMdecision",
      cell: (info: any) => info.getValue(),
      header: () => <span>ADM Decision</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ADMdecisionDate,
      id: "ADMdecisionDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>ADM Decision Date</span>,
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
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["edit"].map((action: string) => (
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
  return {
    handleSearch,
    handleAction,
    openDelete,
    columns,
    handleCloseDeleteModal,
  };
};
