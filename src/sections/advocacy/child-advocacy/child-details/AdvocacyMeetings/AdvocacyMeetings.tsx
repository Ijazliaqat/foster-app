import { Card, Grid } from '@mui/material';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';
import { meetingRecordingsData } from '.';
import AddMeetingRecording from './UploadMeetingFormModal/UploadMeetingFormModal';
import { useAdvocacyMeetings } from './useAdvocacyMeetings';

const AdvocacyMeetings = () => {
    const { meetingRecordingColumns, theme, tableHeaderRefThree, setIsUploadModalOpen, isUploadModalOpen, methods, handleSubmit, onSubmit, actionType, setActionType } = useAdvocacyMeetings();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ p: 1 }}>
                        <TableHeader
                            ref={tableHeaderRefThree}
                            title="Advocacy Meetings"
                            searchKey="search"
                            showSelectFilters
                            showAddBtn
                            onAdd={() => { setIsUploadModalOpen(true); setActionType('upload') }}
                            onChanged={(data: any) => {
                                console.log("Updated params: ", data);
                            }}
                        />
                        <CustomTable
                            data={meetingRecordingsData}
                            columns={meetingRecordingColumns}
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
            {isUploadModalOpen && <AddMeetingRecording isUploadModalOpen={isUploadModalOpen} setIsUploadModalOpen={setIsUploadModalOpen} methods={methods} handleSubmit={handleSubmit} onSubmit={onSubmit} actionType={actionType} />}
        </>
    )
}

export default AdvocacyMeetings