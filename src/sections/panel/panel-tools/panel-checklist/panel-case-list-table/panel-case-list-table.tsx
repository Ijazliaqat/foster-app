import React, { useRef, } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import TableHeader from "@root/components/TableHeader";
import { panelCaseListData } from ".";

const PanelCaseListTable = () => {
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    const router = useRouter();

    const columns = [
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
            accessorFn: (row: any) => row.careHome,
            id: "careHome",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name (Code)</span>,
        },
        {
            accessorFn: (row: any) => row.caseNumber,
            id: "caseNumber",
            cell: (info: any) => info.getValue(),
            header: () => <span>Case Name</span>,
        },
        {
            accessorFn: (row: any) => row.socialWorker,
            id: "socialWorker",
            cell: (info: any) => info.getValue(),
            header: () => <span>Social Worker</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="edit" onClicked={() => router.push(`/panel/panel-tools/checklist/${info.row.id}`)} />
                    <TableAction type="view" onClicked={() => router.push(`/panel/panel-tools/checklist/${info.row.id}`)} />
                </Box>
            ),
            header: () => <span>Action</span>,
            isSortable: false,
        },
    ];

    return (
        <Box>
            <TableHeader
                ref={tableHeaderRef}
                title="Panel Case List"
            />
            <CustomTable
                data={panelCaseListData}
                columns={columns}
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
                rootSX={{ my: theme.spacing(2) }}
            />
        </Box>
    );
}
export default PanelCaseListTable;