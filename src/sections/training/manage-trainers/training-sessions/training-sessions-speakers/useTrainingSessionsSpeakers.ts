import React from 'react'
import { speakerData } from '.'
import { useTheme } from '@mui/material'
export const useTrainingSessionsSpeakers = () => {
    const theme = useTheme()
    const speakerDataMap = speakerData.map((item, idx)=>{
        return(
            {
                ...item,
                background: theme.palette.primary.main,
            }
        )
    })
  return {
    speakerDataMap
  }
}


