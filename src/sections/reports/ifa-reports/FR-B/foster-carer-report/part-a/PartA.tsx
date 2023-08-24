import { Box, Button, Grid, Tooltip, TooltipProps, Typography, styled, useTheme } from '@mui/material';
import { FormProvider } from '@root/components/hook-form'
import React from 'react'
import { formData } from '.';
import { LoadingButton } from '@mui/lab';
import { usePartA } from './usePartA';
import InfoIcon from '@mui/icons-material/Info';


const PartA = ({ disabled, handleNextTab }: any) => {
  const theme = useTheme();
  const { methods, onSubmit, handleSubmit, handleBack } = usePartA(handleNextTab);
  return (
    <FormProvider
      methods={methods} onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={4}>
        {formData.map((form: any, i: number) => (
          <Grid item xs={12} md={form.gridLength} key={i}>
            {form.tooltip ?
              <TitleWithTooltip title={form.title} msg={form.tooltipMsg} theme={theme} /> :
              <CustomTypography title={form.title} theme={theme} />
            }
            {form.border && <Box sx={{ border: '1px solid #898989' }} />}
            {form.head && <CustomTypography isHead title={form.head} theme={theme} />}

            {form.component && <form.component
              size='small'
              disabled={disabled}
              {...form.otherOptions}
            >
              {form.otherOptions.select
                ? form.otherOptions.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
            </form.component>}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box
            sx={{ display: "flex", gap: '1rem' }}>
            <LoadingButton
              type="submit"
              variant="contained"
            >
              Submit
            </LoadingButton>
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

export default PartA;

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