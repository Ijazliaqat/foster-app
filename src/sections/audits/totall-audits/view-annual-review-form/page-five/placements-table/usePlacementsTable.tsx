import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

// =================================================================

export const usePlacementsTable = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const columns = [
    {
      accessorFn: (row: any) => row.childCode,
      id: "childCode",
      cell: (info: any) => info.getValue(),
      header: () => <>Child Code</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.age,
      id: "age",
      cell: (info: any) => info.getValue(),
      header: () => <>Age</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ethnicity,
      id: "ethnicity",
      cell: (info: any) => info.getValue(),
      header: () => <>Ethnicity</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.legalStatus,
      id: "legalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <>Legal Status</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementType,
      id: "placementType",
      cell: (info: any) => info.getValue(),
      header: () => <>Placement Type</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.placementDate,
      id: "placementDate",
      cell: (info: any) => info.getValue(),
      header: () => <>Placement Date</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dischargeDate,
      id: "dischargeDate",
      cell: (info: any) => info.getValue(),
      header: () => <>Discharge Date</>,
      isSortable: true,
    },
  ];

  return { theme, router, columns };
};
