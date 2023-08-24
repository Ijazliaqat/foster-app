import React from 'react'
import { useLaEmployeeDirectory } from './useLaEmployeeDirectory';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';

const LaEmployeeDirectory = () => {
    const { TableData, tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns } = useLaEmployeeDirectory()

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="LA Employee"
                showAddBtn
                showSelectFilters={true}
                selectFilters={SELECT_FILTERS}
                onAdd={() => router.push(`${router.pathname}/add-local-authority-employee`)}
                onChanged={(data: any) => {
                    console.log("Updated params: ", data);
                }}
            />
            {/* table body start here */}
            <CustomTable
                data={TableData}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                isPagination={false}
                // count={Math.ceil(data?.data?.meta?.total / limit)}
                currentPage={1}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
                rootSX={{ my: theme.spacing(2) }}
            />
        </>
    )
}
export default LaEmployeeDirectory