import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel } = parms;
  return [
    {
      accessorFn: (row: any) => row.userName,
      id: "userName",
      // cell: (info: any) => shortName(info.getValue()),
      cell: (info: any) => info.getValue(),
      header: "Account User Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.bankName,
      id: "bankName",
      cell: (info: any) => info.getValue(),
      header: "Name of the Bank",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.sortCode,
      id: "sortCode",
      cell: (info: any) => info.getValue(),
      header: "Sort Code",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.accountNumber,
      id: "accountNumber",
      cell: (info: any) => info.getValue(),
      header: "Account Number",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.accountPreference,
      id: "accountPreference",
      cell: (info: any) => info.getValue(),
      header: "Account Preference",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() => openViewUpdateModel(info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
