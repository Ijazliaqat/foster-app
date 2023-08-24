import { Box, Card, Grid, MenuItem, Select, Typography, useTheme } from '@mui/material'
import VericalTabs from '@root/components/VericalTabs';
import { systemPerformanceTabs, usageTimeOptions } from '.';

const PerformanceMonitoring = () => {
  const theme = useTheme();


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Grid container justifyContent="space-between" alignItems="end">
              <Grid item xs={3}>
                <Typography fontSize={14} fontWeight={600} color={theme.palette.mode}>Usage Time:</Typography>
                <Select name='advocacyRequirement' fullWidth size='small' defaultValue="default">
                  <MenuItem value="default" disabled>Select</MenuItem>
                  {usageTimeOptions.map((option, i) => (
                    <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" gap={2} sx={{ float: "right" }}>
                  <Box display="flex" gap='5px'>
                    <Typography fontWeight={600} color={theme.palette.primary.main}>Memory Usage: </Typography>
                    <Typography fontWeight={600} color={theme.palette.mode}>92.31%</Typography>
                  </Box>
                  <Box display="flex" gap={'5px'}    >
                    <Typography fontWeight={600} color={theme.palette.primary.main}>Memory Usage: </Typography>
                    <Typography fontWeight={600} color={theme.palette.mode}>92.31%</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sx={styles.tabs(theme.palette.mode)}>
          <VericalTabs tabsDataArray={systemPerformanceTabs}>
            {systemPerformanceTabs?.map((item: any,i:number) => (
              <Box key={i}>{item?.innerData && item?.innerData}</Box>
            ))}
          </VericalTabs>
        </Grid>
      </Grid>
    </>
  )
}

export default PerformanceMonitoring

const styles = {
  tabs: (theme: any) => ({
    '& .MuiTabs-root.MuiTabs-vertical': {
      backgroundColor: theme === 'light' ? '#fff !important' : '#212B36',
      height: '100%',
      boxShadow: "0px 0px 7px 0px rgba(14, 145, 140, 0.20)",
      borderRadius: "10px",
      padding: "14px",
      '.MuiButtonBase-root': {
        height: "36px",
        borderRadius: '4px',
        boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.20) inset',
        marginBottom: '15px',
        '&.Mui-selected': {
          '.MuiBox-root': {
            background: theme === 'light' ? 'linear-gradient(270deg, rgba(34, 171, 113, 0.13) 0%, rgba(43, 182, 101, 0.13) 100%)' : '#161C24',
          }
        },
        '.MuiBox-root': {
          background: theme === 'light' ? '#f5f5f5' : 'rgba(22, 28, 36, 0.3)',
          '.MuiTypography-root': {
            color: theme === 'light' ? '#152536' : theme,
            fontSize: '14px',
            fontWeight: 500,
          }
        }
      }
    },
    '& .MuiPaper-root': {
      height: "auto",
      // padding: '0px',
      background: 'transparent',
      boxShadow: 'none',
      '.MuiTypography-h5': {
        display: 'none'
      },
      '.MuiBox-root': {
        padding: 0
      }
    }
  })
}