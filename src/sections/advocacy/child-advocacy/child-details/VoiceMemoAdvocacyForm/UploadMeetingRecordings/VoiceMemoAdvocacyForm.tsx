import { Card, Grid } from '@mui/material';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';
import { meetingRecordingsData } from '.';
import AddMeetingRecording from './UploadMeetingFormModal/UploadMeetingFormModal';
import { useVoiceMemoAdvocacyForm } from './useVoiceMemoAdvocacyForm';

const VoiceMemoAdvocacyForm = () => {
    const { meetingRecordingColumns, theme, tableHeaderRefThree, setIsUploadModalOpen, isUploadModalOpen, methods, handleSubmit, onSubmit, actionType, setActionType } = useVoiceMemoAdvocacyForm();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ p: 1 }}>
                        <TableHeader
                            ref={tableHeaderRefThree}
                            title="Advocacy via Voice Memo"
                            searchKey="search"
                            showSelectFilters
                            showAddBtn
                            showRecordingBtn
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

export default VoiceMemoAdvocacyForm