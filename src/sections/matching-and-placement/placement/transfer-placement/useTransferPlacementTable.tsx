import Image from "next/image";
import router from "next/router";
import { Box, Button, useTheme } from "@mui/material";
import documentIcon from "../../../../assets/img/documentIcon.png";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useState } from "react";

// ===================================================================================

export const useTransferPlacementTable = () => {
  const [DeleteModal, setDeleteModal] = useState(false);
  const theme = useTheme();

  const SELECT_FILTERS = [
    {
      key: "selectCarer",
      label: "Foster Carer",
      options: [{ label: "option 1", value: "options" }],
    },
  ];

  const handleDeleteModal = () => setDeleteModal(!DeleteModal);

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "edit":
        router.push({ pathname: `/placement/transfer/placement-form/${id}` });
        break;
      case "delete":
        handleDeleteModal();
        break;
      default:
        break;
    }
  };

  const transferPlacementColumns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerNameFrom,
      id: "carerNameFrom",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name(From)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerNameTo,
      id: "carerNameTo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name(Transferred To)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfTransfer,
      id: "dateOfTransfer",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Transfer</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.transferReport,
      id: "transferReport",
      cell: (info: any) => (
        <Box display="flex" justifyContent="center">
          <Image width={28} height={32} src={documentIcon} alt="" />
        </Box>
      ),
      header: () => <span>Transport Report</span>,
    },
    {
      accessorFn: (row: any) => row.approvedBy,
      id: "approvedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved By(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthority,
      id: "localAuthority",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.localAuthoritySw,
      id: "localAuthoritySw",
      cell: (info: any) => info.getValue(),
      header: () => <span>Local Authority SW</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status,
      id: "status",
      cell: (info: any) => (
        <Box>
          <Button variant="contained">{info.getValue()}</Button>
        </Box>
      ),
      header: () => <span>Status</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <>
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
          <DeleteModel
            open={DeleteModal}
            handleClose={handleDeleteModal}
            onDeleteClick={handleDeleteModal}
          />
        </>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return {
    transferPlacementColumns,
    theme,
    router,
    SELECT_FILTERS,
  };
};
