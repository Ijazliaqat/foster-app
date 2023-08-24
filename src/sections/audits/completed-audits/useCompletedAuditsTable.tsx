import Image from "next/image";
import { useRouter } from "next/router";
import { IconButton, useTheme } from "@mui/material";
import ActionIcon from "../../../assets/img/audits/report-icon.png";

// =================================================================

export const useCompletedAuditsTable = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <>Sr.No</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <>Name</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <>Role</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.auditType,
      id: "auditType",
      cell: (info: any) => info.getValue(),
      header: () => <>Audit Type</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.assignee,
      id: "assignee",
      cell: (info: any) => info.getValue(),
      header: () => <>Assignee</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.assigneeRole,
      id: "assigneeRole",
      cell: (info: any) => info.getValue(),
      header: () => <>Assignee Role</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.auditOutcome,
      id: "auditOutcome",
      cell: (info: any) => info.getValue(),
      header: () => <>Audit Outcome</>,
      isSortable: true,
    },
    {
      id: "reports",
      cell: (info: any) => (
        <IconButton onClick={() => router.push("/audits/completed-audits/review-form")}>
          <Image src={ActionIcon} alt="icon" />
        </IconButton>
      ),
      header: () => <span>Reports</span>,
      isSortable: false,
    },
  ];

  return { theme, router, columns };
};
