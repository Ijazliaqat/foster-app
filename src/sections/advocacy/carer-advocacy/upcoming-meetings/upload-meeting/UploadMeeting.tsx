import React from "react";
import { UploadMeetingData } from ".";
import { Box, Card, Typography } from "@mui/material";
import { useUploadMeeting } from "./useUploadMeeting";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import MeetingRecordingForm from "./meeting-recording-form/MeetingRecordingForm";

// ===================================================================

const UploadMeeting = () => {
  const { UploadMeetingColumns, theme, setIsAddModalOpen, isAddModalOpen, setActionType, actionType } = useUploadMeeting();

  return (
    <>
      <Card sx={styles.card}>
        <Box sx={styles.header}>
          <Typography variant="h6" component="h6" sx={styles.title}>
            Upcoming the Meeting Recording
          </Typography>
        </Box>
        <Box sx={{ py: 1.5, px: 1 }}>
          <TableHeader
            title="Meetings"
            rootSX={{ overflowX: "scroll" }}
            searchKey="search"
            showAddBtn
            onAdd={() => {
              setIsAddModalOpen(true);
              setActionType("add");
            }}
          />
          <CustomTable
            data={UploadMeetingData}
            columns={UploadMeetingColumns}
            isLoading={false}
            isFetching={false}
            isError={false}
            isSuccess={true}
            currentPage={1}
            onPageChange={(data: any) => {
              console.log("Current page data: ", data);
            }}
            onSortByChange={(data: any) => {
              console.log("Sort by: ", data);
            }}
            rootSX={{ my: theme.spacing(2) }}
          />
        </Box>
      </Card>
      {isAddModalOpen && <MeetingRecordingForm isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} actionType={actionType} />}
    </>
  );
};

export default UploadMeeting;

// ====================================================================================
const styles = {
  card: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "19.3rem",
  },
  header: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #0E918C", opacity: "0.5px" },
  title: {
    color: "#212529",
    py: 1.2,
    px: 1.2,
    fontSize: "14px !important",
    fontWeight: 500,
  },
};
