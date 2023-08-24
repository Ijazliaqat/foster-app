import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const columns = [
  {
    id: "select",
    header: ({ table, row }: any) => {
      console.log(table.getSelectedRowModel().flatRows);
      return (
        <Box>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
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
    accessorFn: (row: any) => row.srNo,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr.No</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.documentName,
    id: "documentName",
    cell: (info: any) => info.getValue(),
    header: "Document Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.documentType,
    id: "documentType",
    cell: (info: any) => info.getValue(),
    header: "Document Type",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.documentDate,
    id: "documentDate",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Document Date",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.personUploaded,
    id: "personUploaded",
    cell: (info: any) => info.getValue(),
    header: "Person Uploaded",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.password,
    id: "password",
    cell: (info: any) => info.getValue(),
    header: "Password",
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        {/* <TableAction type="edit" onClicked={() => alert("Edit")} /> */}
        <TableAction type="delete" onClicked={() => alert("Delete")} />
        {/* <DeleteModel onDeleteClick={() => {}} /> */}
        <TableAction type="view" onClicked={() => alert("View")} />
        <TableAction type="download" onClicked={() => alert("Download")} />
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const UPLOAD_DOCUMENT_DATA = [
  {
    id: 1,
    srNo: "1",
    documentName:'Activity info',
    documentType:'PDF',
    documentDate: new Date(),
    personUploaded:'Sharukhan',
    password:'123abc'
  },
  {
    id: 2,
    srNo: "2",
    documentName:'Activity info',
    documentType:'PDF',
    documentDate: new Date(),
    personUploaded:'Sharukhan',
    password:'123abc'
  },
];
