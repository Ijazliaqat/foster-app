import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const TableSubHeader = ({ data }: any) => {
  return (
    <Box sx={styles.container}>
      <Grid container spacing={2} justifyContent={'space-between'}>
        {
          data.map((item: any, index: any) => (
            <Grid item xl={3.5} lg={6} xs={12} key={index} sx={styles.list}>
              {
                item?.subData?.map((obj: any, i: number) => (
                  <Box display={'flex'} alignItems={'center'} gap={'20px'} key={i} sx={{ mb: '6px' }}>
                    <Typography sx={styles.label}>{obj.label}</Typography>
                    <Typography sx={styles.value}>{obj.value}</Typography>
                  </Box>
                ))
              }
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default TableSubHeader;

const styles = {
  container: {
    backgroundColor: '#0E918C',
    p: '15px 8px',
    boxShadow: '2px 4px 7px rgba(14, 145, 140, 0.2)',
    borderRadius: '4px',
    my: 0.5
  },
  list: { 
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      right: '-60px',
      height: '50px',
      border: '1px solid #fff',
      '@media screen and (max-width: 1535px)': {
        border: 'none',
      }
    },
    '&:nth-child(3)': {
      '&::before': {
        border: '1px solid transparent'
      }
    },

  },
  label: {
    fontWeight: 700,
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize',
    flex: 1
  },
  value: {
    color: '#fff',
    fontSize: '14px',
    textTransform: 'capitalize',
  }
}