import React, { useState } from 'react'
import { useLocalAuthorityTable } from './useLocalAuthorityTable'
import TableHeader from '@root/components/TableHeader'
import CustomTable from '@root/components/Table/CustomTable'
import { Card, Box, Button } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const LocalAuthorityTable = () => {
    const { TableData, tableHeaderRefTwo, theme, columns, router, pathname } = useLocalAuthorityTable()

    return (
        <Card sx={{ p: 1, pb: 1, boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)", borderRadius: "10px", }}>
            <TableHeader
                ref={tableHeaderRefTwo}
                title="Local Authority"
                showAddBtn
                onAdd={() => router.push({ pathname: pathname, query: { action: 'add-local-authority' } })}
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
                rootSX={{ my: theme.spacing(0.5) }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                }}
            >
                <Button onClick={() => router.push(`${router.pathname}/local-authority-tab/view-all-local-authority`)}>
                    View All
                    <ExpandMore />
                </Button>
            </Box>


        </Card>

    )
}

export default LocalAuthorityTable