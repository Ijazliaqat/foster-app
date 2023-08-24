import React from "react";
import { data } from ".";
import { useRouter } from "next/router";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// ============================================================================

const CyberAccordionTable = ({ name }: any) => {
  const router = useRouter();
  const theme = useTheme();

  const CyberEssentailsColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
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
      accessorFn: (row: any) => row.id,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "title",
      cell: (info: any) => info.getValue(),
      header: () => <span>Title</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateUploaded,
      id: "dateUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.author,
      id: "author",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.versions,
      id: "versions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Versions</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClick={() =>
              router.push({ pathname: "/policies-and-guidelines/cyber-essentials/cyber-essentials-form", query: { title: name, action: "view" } })
            }
          />
          <TableAction size="small" type="print" onClick={() => alert("printer icon")} />
          <TableAction size="small" type="download" onClick={() => alert("printer icon")} />
        </Box>
      ),
      header: () => <span>action</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <CustomTable
        data={data}
        columns={CyberEssentailsColumns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2), mt: 0 }}
      />
    </>
  );
};

export default CyberAccordionTable;
