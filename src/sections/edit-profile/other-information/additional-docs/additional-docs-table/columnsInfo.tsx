import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { shortName } from "@root/sections/edit-profile/util/Util";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel } = parms;
  return [
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      // cell: (info: any) => shortName(info.getValue()),
      cell: (info: any) => info.getValue(),
      header: "Document Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.startDate,
      id: "attachments",
      cell: (info: any) => (
        <FileCopyIcon
          sx={{ cursor: "pointer" }}
          onClick={() => openViewUpdateModel(info.row.original.id)}
        />
      ),
      header: "Attachments",
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
