import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Button, Grid } from "@mui/material";
import {safeguardingMeasureDurationData } from '.';
import { useSafeguardingMeasureDurationTable } from './useSafeguardingMeasureDuration';





const SafeguardingMeasureDuration = ({handleIncreamentStep}: any) => {
  const {safeguardingMeasureDurationColumns,theme,
  } = useSafeguardingMeasureDurationTable()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>
     

        <CustomTable
          data={safeguardingMeasureDurationData}
          columns={safeguardingMeasureDurationColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2) ,p:2.5}}

        />
      </Grid>
      <Grid item xs={12}  ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Continue</Button>
        </Grid>
    </Grid>
  )
}

export default SafeguardingMeasureDuration
const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};