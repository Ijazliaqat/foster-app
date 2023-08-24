import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";
export const getColumns = (parms: any) => {
  const { openViewUpdateModel, delReference } = parms;
  return [
    {
      accessorFn: (row: any) => row.referenceType,
      id: "ReferenceType",
      cell: (info: any) => info.getValue(),
      header: "Reference Type",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.refereeName,
      id: "fullName",
      cell: (info: any) => info.getValue(),
      header: "Full name of the referee",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.contactNo,
      id: "contactNo",
      cell: (info: any) => info.getValue(),
      header: "Contact No. ",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "emailID",
      cell: (info: any) => info.getValue(),
      header: "Email ID",
      isSortable: false,
    },

    {
      accessorFn: (row: any) => row.status,
      id: "approvalStatus",
      cell: (info: any) => info.getValue(),
      header: "Approval Status",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "refView",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Ref. viewed on",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.updatedAt,
      id: "refeCompletedOn",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Ref. completed on",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() => openViewUpdateModel(info.row.original.id, true)}
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() => openViewUpdateModel(info.row.original.id)}
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => delReference(info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
