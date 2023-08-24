import { useRef, } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";

export const useMemberQuestionnaire = () => {

    let router = useRouter();
    const navgiate = useRouter();
    const theme = useTheme();
    let tableHeaderRefTwo = useRef<any>();

    const columns = [
        {
            id: "select",
            header: ({ table, row }: any) => {
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
            accessorFn: (row: any) => row.questionnaireNumber,
            id: "questionnaireNumber",
            cell: (info: any) => info.getValue(),
            header: () => <span>Questionnaire Number</span>,
        },
        {
            accessorFn: (row: any) => row.submissionDate,
            id: "submissionDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date of Submission</span>,
        },
        {
            accessorFn: (row: any) => row.officeArea,
            id: "officeArea",
            cell: (info: any) => info.getValue(),
            header: () => <span>Office Area</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => router.push({ pathname: `/panel/panel-evaluation-forms/member-questionnaire/view-form/${info.row.id}` })}
                    />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        columns,
        navgiate,
        theme,
        tableHeaderRefTwo,
    };
};
