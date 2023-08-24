import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { useHRNotifications } from './useHRNotifications';
import { data } from '..';
import { Button } from '@mui/material';

const HRNotifications = () => {
    const { columns, theme, tableHeaderRefThree } = useHRNotifications();

    return (
        <>
            <TableHeader
                ref={tableHeaderRefThree}
                title="Scheduler Notification"
                searchKey="search"
                showSelectFilters
                onChanged={(data: any) => {
                    console.log("Updated params: ", data);
                }}
            />
            <CustomTable
                data={data}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={false}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
                rootSX={{ mt: theme.spacing(2) }}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mr: 2 }}
            >
                Submit
            </Button>
        </>
    )
}

export default HRNotifications