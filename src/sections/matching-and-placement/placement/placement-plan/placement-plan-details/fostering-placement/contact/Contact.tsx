import React from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from '@mui/lab';
import { useContact } from './useContact';
import TableHeader from '@root/components/TableHeader';
import CustomTable from '@root/components/Table/CustomTable';

const Contact = () => {

  const { methods, handleSubmit, onSubmit, disabled, handleBack, formData, handleTableAdd } = useContact();

  return (
    <Card sx={styles.card}>
      <Typography sx={styles.title}>Contact</Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {
            formData.map((item, i) => (
              <Grid item key={i} md={item.gridLength} xs={12}>
                {item.requireTable && <>
                  <TableHeader
                    title={item.tableTitle}
                    hideSearch
                    showAddBtn={disabled ? false : true}
                    onAdd={() => handleTableAdd(item.type)}
                  />
                  <CustomTable
                    columns={item.tableCoulmns}
                    data={item.tableData}
                    isLoading={false}
                    isError={false}
                    isSuccess={true}
                  />
                  {item.modal}
                </>}
                {item.component ?
                  <item.component
                    size={"small"}
                    fullWidth
                    disabled={disabled}
                    {...item.otherOptions}
                  /> :
                  <Typography sx={styles.title}>{item.title}</Typography>
                }
              </Grid>
            ))
          }
          <Grid item xs={12} display={"flex"} gap={"10px"} sx={{ mt: 2 }}>
            {!disabled && (
              <LoadingButton type="submit" variant="contained">
                Submit
              </LoadingButton>
            )}
            <Button
              sx={styles.btnStyle}
              type="button"
              variant="contained"
              onClick={handleBack}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  )
}

export default Contact

const styles = {
  card: { p: 2, boxShadow: '0px 0px 7px 3px #0E918C33' },
  title: { color: '#0E918C', fontSize: '16px', fontWeight: 600, margin: '20px 0px' },
  btnStyle: {
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}