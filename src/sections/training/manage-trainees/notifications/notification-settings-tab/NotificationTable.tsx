import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid, ThemeProvider} from "@mui/material";
import DeleteModel from '@root/components/modal/DeleteModel';
import { NotificationTableData } from '.';
import { useNotificationTable } from './useNotificationTable';
import NotificationModal from '@root/sections/training/manage-courses/training-clock-engine/modals/notification-modal/NotificationModal';






const NotificationTable = () => {
  const { NotificationTableColumns,
    IsDeleteModal,
    setIsDeleteModal,
    tableHeaderRef, theme,
    IsOpenNotificationModal,
    setIsOpenNotificationModal, handleEditClicked,
    selectedRowId, actionType,
    setActionType
  } = useNotificationTable()
  console.log("Selected row ID:", selectedRowId);

  return (
    <Grid container >
      <Grid xs={12} item>
        <NotificationModal title={actionType === 'add' ? ' Add New Notification' : 'Edit Notification '} open={IsOpenNotificationModal}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
          handleClose={() => setIsOpenNotificationModal(false)}

        />
        <TableHeader
          ref={tableHeaderRef}
          title="Notification Setting"
          searchKey="search"
          showAddBtn
          onAdd={() => { setIsOpenNotificationModal(true); setActionType('add') }}
        />
        <ThemeProvider theme={theme}>
          <CustomTable
            data={NotificationTableData}
            columns={NotificationTableColumns.map(column => {
              if (column.id === "actions") {
                return {
                  ...column,
                  cell: (info: any) => column.cell({
                    ...info,
                    handleEditClicked: handleEditClicked
                  })
                };
              }
              return column;
            })}
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
        </ThemeProvider>
        <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
      </Grid>
    </Grid>
  )
}

export default NotificationTable
