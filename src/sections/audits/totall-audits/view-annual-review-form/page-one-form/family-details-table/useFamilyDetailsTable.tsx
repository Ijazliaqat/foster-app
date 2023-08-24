import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

// =================================================================

export const useFamilyDetailsTable = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const columns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <>Name</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dob,
      id: "dob",
      cell: (info: any) => info.getValue(),
      header: () => <>Date of Birth</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue(),
      header: () => <>Relation</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.livingAtHome,
      id: "livingAtHome",
      cell: (info: any) => info.getValue(),
      header: () => <>Is living at home</>,
      isSortable: true,
    },
  ];

  return { theme, router, columns };
};
