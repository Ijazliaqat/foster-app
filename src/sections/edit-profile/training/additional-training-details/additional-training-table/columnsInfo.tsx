import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel } = parms;
  return [
    {
      accessorFn: (row: any) => row.trainingName,
      id: "trainingName",
      cell: (info: any) => info.getValue(),
      header: "Taining Name",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "certificateissued",
      cell: (info: any) => "Issue Date",
      header: "Certificate issued",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.updatedAt,
      id: "certificateExp",
      cell: (info: any) => "Expiry Date",
      header: "Certificate Expiry Date",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "emailID",
      cell: (info: any) => "Email",
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
