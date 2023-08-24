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
    accessorFn: (row: any) => row.carerName,
    id: "carerName",
    cell: (info: any) => info.getValue(),
    header: "Carer Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.carerType,
    id: "carerType",
    cell: (info: any) => info.getValue(),
    header: "Carer Type",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.dateOfImmunisation,
    id: "dateOfImmunisation",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: "Date of Immunisation",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.immunisationType,
    id: "immunisationType",
    cell: (info: any) => info.getValue(),
    header: "Immunisation Type",
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction type="edit" onClicked={() => alert("Edit")} />
        <TableAction type="delete" onClicked={() => alert("Delete")} />
        {/* <DeleteModel onDeleteClick={() => {}} /> */}
        <TableAction type="view" onClicked={() => alert("View")} />
        {/* <TableAction type="download" onClicked={() => alert("Download")} /> */}
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },
];

export const IMMUNISATIONS_DATA = [
  {
    id: 1,
    srNo: "1",
    carerName:"John Doe",
    carerType:"Backup Carer",
    dateOfImmunisation: new Date() ,
    immunisationType:"Typhoid",
  },
  {
    id: 2,
    srNo: "2",
    carerName:"Edward",
    carerType:"Backup Carer",
    dateOfImmunisation: new Date() ,
    immunisationType:"Measles",
  },
];
