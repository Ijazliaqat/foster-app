import React from "react";
import { Box, Card, Checkbox } from "@mui/material";
import AdvocacyIcon from "../../../../assets/svg/safeguarding/advocacy-icon.svg"
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import ShareModal from "@root/components/modal/shareModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import Image from "next/image";
import TableHeader from "@root/components/TableHeader";
import { safeGuardingChildAdvocacyData } from ".";
import { useSafeguardingChildAdvocacyTable } from "./useSafeguardingChildAdvocacyTable";

const SafeguardingAddressTable = () => {
    const { isShareModalOpen, setIsShareModalOpen, isDeleteModal, setIsDeleteModal, theme, router } = useSafeguardingChildAdvocacyTable();

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
            accessorFn: (row: any) => row.safeguardingCaseId,
            id: "Safeguarding Case ID",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Case ID</span>,
        },
        {
            accessorFn: (row: any) => row.childName,
            id: "Child Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name</span>,
        },
        {
            accessorFn: (row: any) => row.childAdvocacy,
            id: "Child Advocacy",
            cell: (info: any) => <Box sx={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                <Image src={AdvocacyIcon} alt="advocacy-icon" />
            </Box>,
            header: () => <span>Child Advocacy</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="view" onClicked={() => router.push("")} />
                    <TableAction type="edit" onClicked={() => router.push("")} />
                    <TableAction type="share" onClicked={() => setIsShareModalOpen(true)} />
                    <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return (
        <>
            <Card sx={{ p: 2 }}>
                <TableHeader
                    // ref={tableHeaderRefTwo}
                    hideSearch={true}
                    title="Safeguarding -  Child Advocacy"
                    showAddBtn
                />
                <CustomTable
                    data={safeGuardingChildAdvocacyData}
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
                <ShareModal
                    open={isShareModalOpen}
                    setOpen={() => setIsShareModalOpen(true)}
                    handleClose={() => setIsShareModalOpen(false)}
                    onSubmit={(data: any) => console.log('dada', data)}
                    data={[{ email: "john@gmail.com" }]}
                />
                <DeleteModel
                    open={isDeleteModal}
                    handleClose={() => setIsDeleteModal(false)}
                />
            </Card>
        </>
    );
}
export default SafeguardingAddressTable;