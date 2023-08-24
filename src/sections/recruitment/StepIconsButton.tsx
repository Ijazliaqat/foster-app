import { Box, Typography } from '@mui/material'
import React from 'react'

const StepIconsButton = (number: any, bgColors: any) => {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        height: 30,
        width: 30,
        background: bgColors,
        display: { sm: "flex", xs: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="white" variant="body1">
        {number + 1}
      </Typography>
    </Box>
  )
}

export default StepIconsButton