import Image from "next/image";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";
import UserImg from "../../../assets/img/ifaAvatar.png";

// =================================================================

export const useOrignalChildReferral = () => {
  let router = useRouter();
  const theme: any = useTheme();

  const SELECT_FILTERS = [
    {
      key: "localAuthority",
      label: "Local Authority",
      options: [{ label: "Local Authority", value: "test-value" }],
    },
  ];

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      accessorFn: (row: any) => row.photo,
      id: "photo",
      cell: (info: any) => (
        <Box sx={{ borderRadius: "50px" }}>
          <Image width={40} height={40} style={{ borderRadius: "50px", objectFit: "cover" }} src={UserImg} alt="" />
        </Box>
      ),
      header: () => <span>Image</span>,
    },
    {
      accessorFn: (row: any) => row.specialNeeds,
      id: "specialNeeds",
      cell: (info: any) => info.getValue(),
      header: () => <span>Special Needs</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childIdentifier,
      id: "childIdentifier",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Identifire</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateBirth,
      id: "dateBirth",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referrerDate,
      id: "referrerDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Referral Date</span>,
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
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="view" onClicked={() => router.push("/referral/original-child-referral/original-child-referral-form")} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return { theme, router, columns, SELECT_FILTERS };
};
