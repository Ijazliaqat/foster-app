import { Box, Button, Grid, Tooltip, TooltipProps, Typography, styled, useTheme } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { formData } from '.';
import { LoadingButton } from '@mui/lab';
import { usePartB } from './usePartB';
import InfoIcon from '@mui/icons-material/Info';
import { usePartA } from '../part-a/usePartA';


const PartB = ({ disabled }: any) => {
  const theme = useTheme();
  const { methods, onSubmit, handleSubmit } = usePartB();
  const { handleBack } = usePartA();
  return (
    <FormProvider
      methods={methods} onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={4}>
        {
          formData.map((item, index) => {
            return (
              <Grid item md={item.gridLength} xs={12} key={index}>
                {item.tooltip ?
                  <TitleWithTooltip title={item.title} msg={item.tooltipMsg} theme={theme} /> :
                  <CustomTypography title={item.title} theme={theme} />
                }
                {item.head && <CustomTypography isHead title={item.head} theme={theme} />}
                {item.component && <item.component disabled={disabled} size='small' {...item.otherOptions} />}
              </Grid>
            )
          })
        }
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", gap: '1rem' }}>
            {!disabled && <LoadingButton
              type="submit"
              variant="contained"
            >
              Submit
            </LoadingButton>}
            <Button
              sx={{ backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", }, }}
              type="button"
              variant="contained"
              onClick={handleBack}
            >Back</Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default PartB;

const CustomTypography = ({ isHead, title, theme }: any) => {
  const textColor = isHead ? '#0E918C' : theme.palette.mode
  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: '16px',
      color: theme.palette.primary.main
      }}
    >
      {title}
    </Typography>
  )
}

const TitleWithTooltip = ({ title, msg, theme }: any) => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={2}>
      <CustomTypography title={title} theme={theme} />
      <StyledTooltip
        title={msg}
        placement='right'
        arrow
      >
        <InfoIcon sx={{ color: theme.palette.grey[500], cursor: 'pointer' }} />
      </StyledTooltip>
    </Box>
  )
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip  {...props} classes={{ popper: className }} />
))`
& .MuiTooltip-tooltip {
  background: #0E918C;
  padding: 8px 12px;
  max-Width:700px;
  font-size:14px;
}
& .MuiTooltip-arrow {
  color: #0E918C
}
`;