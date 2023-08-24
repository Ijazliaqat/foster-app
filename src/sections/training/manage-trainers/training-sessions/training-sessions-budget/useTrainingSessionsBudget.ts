import React from 'react'
import { budgetData } from '.'
import { useTheme } from '@mui/material'

export const useTrainingSessionsBudget = () => {
    const theme = useTheme()
    const budgetDataMap = budgetData.map((item, idx)=>{
        return(
            {
                ...item,
                background: theme.palette.primary.main
            }
        )
    })
  return {
    budgetDataMap
  }
}
