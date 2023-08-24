import React from "react";
import { Box, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { laPoliciesAgreementData } from ".";
import { useLaPoliciesAgreement } from "./useLaPoliciesAgreement";
import AddPoliciesAgreementForm from "./add-policies-agreement-form/AddPoliciesAgreementForm";

const LaPoliciesAgreement = () => {
    const { theme, isAddModalOpen, setIsAddModalOpen, actionType, setActionType, route } = useLaPoliciesAgreement()

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
            accessorFn: (row: any) => row.title,
            id: "Title",
            cell: (info: any) => info.getValue(),
            header: () => <span>Title</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.dateUploaded,
            id: "Date Uploaded",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Uploaded</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.author,
            id: "Author",
            cell: (info: any) => info.getValue(),
            header: () => <span>Author</span>,
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
            accessorFn: (row: any) => row.versions,
            id: "Versions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Versions</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="view" onClicked={() => { setIsAddModalOpen(true); setActionType('edit') }} />
                    <TableAction type="print" />
                    <TableAction type="download" />
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
                data={laPoliciesAgreementData}
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
            <AddPoliciesAgreementForm isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} actionType={actionType} setActionType={setActionType} />
        </>
    );
}
export default LaPoliciesAgreement;