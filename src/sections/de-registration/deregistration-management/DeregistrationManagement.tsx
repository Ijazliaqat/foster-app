import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
// import { TableData } from '.'
import { useDeregistrationManagement } from './useDeregistrationManagement'
import { TableData } from '.'
import React from 'react'


const DeregistrationManagement = () => {
    const { tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns, } = useDeregistrationManagement()

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Carer List"
                showSelectFilters={true}
                selectFilters={SELECT_FILTERS}
            // onChanged={(data: any) => {
            //     console.log("Updated params: ", data);
            // }}
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

export default DeregistrationManagement