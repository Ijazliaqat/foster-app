import React from 'react'
import { attendeesData } from '.'
import { useTheme } from '@mui/material'

export const useTrainingSessionsAttendees = () => {
    const theme = useTheme()
    const attendeesDataMap = attendeesData.map((item, idx)=>{
        return (
            {
                ...item,
                background: theme.palette.primary.main
            }
        )
    })

  return {
    attendeesDataMap
  }
}

