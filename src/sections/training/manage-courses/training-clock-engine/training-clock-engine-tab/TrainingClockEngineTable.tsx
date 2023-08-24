import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import TableHeader from '@root/components/TableHeader';
import { Grid } from "@mui/material";
import DeleteModel from '@root/components/modal/DeleteModel';
import { TrainingClockEngineTableData } from '.';
import { useTrainingClockEngineTable } from './useTrainingClockEngineTable';
import TrainingClockEngineModal from '../modals/training-clock-engine-modal/TrainingClockEngineModal';





const TrainingClockEngineTable = () => {
  const { IsDeleteModal, setIsDeleteModal, tableHeaderRef, TrainingClockEngineTableColumns, theme,
    IsOpenTrainingClockModal,
    setIsOpenTrainingClockModal,
    setActionType,
    selectedRowId,
     actionType,
     handleEditClicked
  } = useTrainingClockEngineTable()
  console.log("Selected row ID:", selectedRowId);


  return (
    <Grid container >
      <Grid xs={12} item>
        <TrainingClockEngineModal
          title={actionType === 'add' ? 'Add New Setting' : 'Edit Setting'}
          open={IsOpenTrainingClockModal}
          handleClose={() => setIsOpenTrainingClockModal(false)}
          SubmitBtnText={actionType === "edit" ? "Update" : "Submit"}
          CancelBtnText="Cancel"
        
        />

        <TableHeader
          ref={tableHeaderRef}
          title="Training Clock Engine"
          searchKey="search"
          showAddBtn
          onAdd={() => { setIsOpenTrainingClockModal(true); setActionType('add') }}
        />
        <CustomTable
          data={TrainingClockEngineTableData}
          columns={TrainingClockEngineTableColumns.map(column => {
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
          rootSX={{ my: theme.spacing(2) }}

        />
        <DeleteModel open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
      </Grid>
    </Grid>
  )
}

export default TrainingClockEngineTable
