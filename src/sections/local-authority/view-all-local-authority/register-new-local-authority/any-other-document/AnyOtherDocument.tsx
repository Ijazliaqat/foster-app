import React from "react";
import { Box, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { anyOtherDocumentData } from ".";
import { useAnyOtherDocument } from "./useAnyOtherDocument";
import AddOtherDocument from "./add-other-document/AddOtherDocument";
import DeleteModel from "@root/components/modal/DeleteModel";

const AnyOtherDocument = () => {
    const { theme, isAddModalOpen, setIsAddModalOpen, viewTableRow, setViewTableRow, actionType, setActionType, isDeleteModalOpen, setIsDeleteModalOpen, route } = useAnyOtherDocument();

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
            accessorFn: (row: any) => row.no,
            id: "Sr. No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentName,
            id: "Document Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentType,
            id: "Document Type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Type</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.documentDate,
            id: "Document Date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Document Date</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.personUploaded,
            id: "Person Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Person Uploaded</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="refresh" />
                    <TableAction type="download" />
                    {route.query.action !== 'view-local-authority' && <TableAction type="delete" onClicked={() => setIsDeleteModalOpen(true)} />}
                    <TableAction type="view" onClicked={() => { setIsAddModalOpen(true); setActionType('edit'); setViewTableRow(info?.row?.original) }} />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <>
            <TableHeader
                title={''}
                showAddBtn={route.query.action !== 'view-local-authority' && true}
                onAdd={() => { setIsAddModalOpen(true); setActionType('add') }}
            />
            <CustomTable
                data={anyOtherDocumentData}
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
            <AddOtherDocument isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} actionType={actionType} viewTableRow={viewTableRow} />
            <DeleteModel open={isDeleteModalOpen} handleClose={() => setIsDeleteModalOpen(false)} />
        </>
    );
}
export default AnyOtherDocument;