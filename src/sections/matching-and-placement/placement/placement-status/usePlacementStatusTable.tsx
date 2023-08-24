import Image from "next/image";
import router from "next/router";
import { Box, Button, useTheme } from "@mui/material";
import documentIcon from "../../../../assets/img/documentIcon.png";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useState } from "react";

// ===================================================================================

export const usePlacementStatusTable = () => {
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
        router.push({ pathname: `/placement/status/placement-form/${id}` });
        break;
      case "delete":
        handleDeleteModal();
        break;
      default:
        break;
    }
  };

  const placementStatusColumns = [
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.typeOfPlacement,
      id: "typeOfPlacement",
      cell: (info: any) => info.getValue(),
      header: () => <span>Type of Placement</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfPlacement,
      id: "dateOfPlacement",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Placement</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementEndDate,
      id: "placementEndDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement End date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.agencySocialWorker,
      id: "agencySocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Agency Social Worker</span>,
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
      accessorFn: (row: any) => row.laSocialWorker,
      id: "laSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>LA Social Worker</span>,
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
      accessorFn: (row: any) => row.placementPlan,
      id: "placementPlan",
      cell: (info: any) => (
        <Box display="flex" justifyContent="center">
          <Image width={28} height={32} src={documentIcon} alt="" />
        </Box>
      ),
      header: () => <span>Placement Plan</span>,
    },
    {
      accessorFn: (row: any) => row.placementAgreements,
      id: "placementAgreements",
      cell: (info: any) => (
        <Box display="flex" justifyContent="center">
          <Image width={28} height={32} src={documentIcon} alt="" />
        </Box>
      ),
      header: () => <span>Placement Agreements</span>,
    },
    {
      accessorFn: (row: any) => row.approvedBy,
      id: "approvedBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approved By(Role)</span>,
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
    placementStatusColumns,
    theme,
    SELECT_FILTERS,
    router,
  };
};
