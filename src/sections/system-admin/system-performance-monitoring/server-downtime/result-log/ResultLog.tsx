import { Card, useTheme } from "@mui/material"
import CustomTable from "@root/components/Table/CustomTable"
import TableHeader from "@root/components/TableHeader"

export const ResultLog = () => {
    const theme = useTheme();
    const data = [{
        from: '01/11/2023  10:50:40 Am',
        to: '01/11/2023  10:50:40 Am',
        responseTime: '20 days'
    }];

    const columns = [
        {
            accessorFn: (row: any) => row.from,
            id: "from",
            cell: (info: any) => info.getValue(),
            header: () => <span>From</span>,
        },
        {
            accessorFn: (row: any) => row.to,
            id: "to",
            cell: (info: any) => info.getValue(),
            header: () => <span>To</span>,
        },
        {
            accessorFn: (row: any) => row.responseTime,
            id: "responseTime",
            cell: (info: any) => info.getValue(),
            header: () => <span>Response Time</span>,
        },
    ]

    return (
        <Card sx={{ py: 1, px: 0, mt: '15px', background: theme.palette.mode === 'light' ? "white !important" : '#212B36 !important' }}>
            <TableHeader
                title={'Notifications'}
                showSelectFilters
                selectFilters={[
                    {
                        key: 'selectUserType',
                        label: 'Select User Type',
                        options: [{ value: 'user name', label: 'user name' }]
                    }
                ]}
            />
            <CustomTable
                isSuccess
                data={data}
                columns={columns}
                isPagination={false}
            />
        </Card>
    )
}