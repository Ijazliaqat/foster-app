import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Checkbox, FormControlLabel, FormGroup, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";

export const useSafeguardingTemplate = () => {
    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefTwo = useRef<any>();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const handleClose = () => setIsDeleteModalOpen(false);

    const methods: any = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: any) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("data", data);
        alert(
            JSON.stringify(
                {
                    ...data,
                },
                null,
                2
            )
        );
        reset();
    };

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
            accessorFn: (row: any) => row.templateName,
            id: "templateName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Template name</span>,
        },
        {
            accessorFn: (row: any) => row.uploadedDate,
            id: "uploadedDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Uploaded</span>,
        },
        {
            accessorFn: (row: any) => row.description,
            id: "description",
            cell: (info: any) => info.getValue(),
            header: () => <span>Description</span>,
        },
        {
            accessorFn: (row: any) => row.version,
            id: "version",
            cell: (info: any) => info.getValue(),
            header: () => <span>Version</span>,
        },
        {
            accessorFn: (row: any) => row.authorRole,
            id: "authorRole",
            cell: (info: any) => info.getValue(),
            header: () => <span>Author (Role)</span>,
        },
        {
            accessorFn: (row: any) => row.approverRole,
            id: "approverRole",
            cell: (info: any) => <Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked sx={{ paddingBlock: 0 }} />} label="Tom Hanks (Director)" />
                    <FormControlLabel control={<Checkbox defaultChecked sx={{ paddingBlock: 0 }} />} label="Snape Roy (Registered Manager)" />
                </FormGroup>
            </Box>,
            header: () => <span>Approver (Role)</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => router.push("/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/view-template")}
                    // onClicked={() =>console.log(info,'info')}
                    />

                    <TableAction
                        type="edit"
                        onClicked={() => router.push("/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details/edit-template")
                        }
                    />
                    <TableAction
                        type="delete"
                        onClicked={() => setIsDeleteModalOpen(true)}
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
        isDeleteModalOpen,
        tableHeaderRefTwo,
        handleClose,
        isSubmitting, methods, handleSubmit, onSubmit,

    };
};
