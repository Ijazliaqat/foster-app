import { useRouter } from "next/router";
import { TableDemoData } from ".";
import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import Image from "next/image";
import { useState } from "react";

export const useSupervisoryHomeVisit = () => {
  const path = "/reports/ifa-reports/supervisory-home-visit/form";
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (value: any) => setCurrentTab(value);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.supervisingSocialWorker,
      id: "supervisingSocialWorker",
      cell: (info: any) => info.getValue(),
      header: () => <span>Supervising Social Worker</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.visitDate,
      id: "visitDate",
      cell: (info: any) => info.getValue(),
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
      accessorFn: (row: any) => row.signature,
      id: "signature",
      cell: (info: any) => (
        <Image
          src={info.getValue()}
          width={30}
          height={30}
          alt="Picture"
          style={{ margin: "0 auto" }}
        />
      ),
      header: () => <span>FC Signature</span>,
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => handleAction("view", info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];

  return {
    TableDemoData,
    router,
    columns,
    handleNextTab,
    handlePreviousTab,
    currentTab,
    handleTabChange,
  };
};
