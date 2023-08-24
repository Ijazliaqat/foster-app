import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { advocacyFormDefaultValues, advocacyFormSchema } from ".";

export const useSomeoneElseAdvocacyForm = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
    const [actionType, setActionType] = useState('add');
    const [shareModal, setShareModal] = useState<boolean>(false);
    const handleShareModal = () => setShareModal(!shareModal);
    const [advocacyRequirment, setAdvocacyRequirment] = useState('');
    const handleAdvocacy = ({ target }: any) => setAdvocacyRequirment(target.value);
    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();
    const methods: any = useForm({
        resolver: yupResolver(advocacyFormSchema),
        defaultValues: advocacyFormDefaultValues
    });

    const { handleSubmit, reset } = methods;
    const onSubmit = (data: any) => { console.log(data, "data"); reset() }

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
            accessorFn: (row: any) => row.srNo,
            id: "srNo",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.type,
            id: "type",
            cell: (info: any) => info.getValue(),
            header: () => <span>Advocacy Type</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.raisedAgainst,
            id: "raisedAgainst",
            cell: (info: any) => info.getValue(),
            header: () => <span>Raised Against</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.status,
            id: "status",
            cell: (info: any) => info.getValue(),
            header: () => <span>Status</span>,
            isSortable: true
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => { router.push('/advocacy/child-advocacy/details/someone-else-form/create-advocacy/form?action=view&time=10pm') }}
                    />
                    <TableAction
                        type="headerShare"
                        onClicked={handleShareModal}
                    />
                    <TableAction
                        type="print"
                        onClicked={() => window.print()}
                    />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        columns,
        theme,
        router,
        tableHeaderRefThree,
        isUploadModalOpen,
        setIsUploadModalOpen,
        actionType,
        setActionType,
        methods,
        handleAdvocacy,
        advocacyRequirment,
        onSubmit,
        handleSubmit,
        handleShareModal,
        shareModal
    }
}