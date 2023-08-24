import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { childAdvocacyFormDefaultValues, childAdvocacyFormValidationSchema } from ".";

export const useChildAdvocacyForm = () => {

    let [expand, setExpand] = useState(false);
    const [showChildStatistics, setShowChildStatistics] = useState<boolean>();
    const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
    const [shareModal, setShareModal] = useState<boolean>(false);
    const handleShareModal = () => setShareModal(!shareModal);
    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();

    const methods: any = useForm({
        resolver: yupResolver(childAdvocacyFormValidationSchema),
        defaultValues: childAdvocacyFormDefaultValues,
    });


    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {
        console.log('data', data);
    }

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
            accessorFn: (row: any) => row.carer,
            id: "carer",
            cell: (info: any) => info.getValue(),
            header: () => <span>Parent / Carer</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.socialWorker,
            id: "socialWorker",
            cell: (info: any) => info.getValue(),
            header: () => <span>Social Worker</span>,
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
                        onClicked={() => router.push({ pathname: '/advocacy/child-advocacy/details/advocacy-form/form', query: { id: info.row.original.id, action: "view-child-advocacy" } })}
                    />
                    <TableAction
                        type="headerShare"
                        onClicked={handleShareModal}
                    />
                    <TableAction
                        type="print"
                        onClicked={()=>window.print()}
                    />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    const meetingRecordingColumns = [
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
            accessorFn: (row: any) => row.agenda,
            id: "agenda",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Agenda</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Uploaded Date</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.file,
            id: "file",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting File</span>,
            isSortable: true
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => router.push({ pathname: '/advocacy/child-advocacy/details/advocacy-form/form', query: { id: info.row.original.id, action: "view-child-advocacy" } })}
                    />
                    <TableAction
                        type="edit"
                        onClicked={() => setIsUploadModalOpen(true)}
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
        expand,
        setExpand,
        showChildStatistics,
        setShowChildStatistics,
        methods,
        handleSubmit,
        onSubmit,
        meetingRecordingColumns,
        isUploadModalOpen,
        setIsUploadModalOpen,
        handleShareModal,
        shareModal
    }
}