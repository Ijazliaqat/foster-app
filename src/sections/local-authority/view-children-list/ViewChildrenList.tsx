import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React, { useState } from 'react'
import useViewChildrenList from './useViewChildrenList';
import AddChildModal from './add-child-modal/AddChildModal';

const ViewChildrenList = () => {
    const { TableData, tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns } = useViewChildrenList()
    const [modalType, setModalType] = useState({ value: "", type: "" })

    return (
        <>
            <TableHeader
                ref={tableHeaderRefTwo}
                title=" Children List"
                showAddBtn
                showSelectFilters={true}
                selectFilters={SELECT_FILTERS}
                onAdd={() => setModalType({ ...modalType, value: "", type: "add" })}
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
            <AddChildModal open={modalType.type} handleClose={() => { setModalType({ type: "", value: "" }); }} />
        </>

    )
}



export default ViewChildrenList


