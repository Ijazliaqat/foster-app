import { Card, Grid } from '@mui/material';
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import React from 'react'
import { data } from '.';
import { useSomeoneElseAdvocacyForm } from './useSomeoneElseAdvocacyForm';
import ShareModal from '@root/components/modal/shareModal';

const SomeoneElseAdvocacyForm = () => {
    const { columns, theme, tableHeaderRefThree, router, shareModal, handleShareModal } = useSomeoneElseAdvocacyForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ p: 1 }}>
                        <TableHeader
                            ref={tableHeaderRefThree}
                            title="Child Advocacy"
                            searchKey="search"
                            showSelectFilters
                            showAddBtn
                            onAdd={() => router.push('/advocacy/child-advocacy/details/someone-else-form/create-advocacy')}
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
                    </Card>
                </Grid>
            </Grid>
            {shareModal && <ShareModal
                open={shareModal}
                setOpen={handleShareModal}
                handleClose={handleShareModal}
                onSubmit={(data: any) => { }}
                data={[
                    { email: 'asif@ceative.co.uk' }
                ]}
                handleAccess={() => { }}
            />}
        </>
    )
}

export default SomeoneElseAdvocacyForm