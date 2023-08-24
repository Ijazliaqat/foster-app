import React, { useState } from 'react'
import { TOTAL_BUDGET_DATA } from '.';
export const useTotalBudget = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(TOTAL_BUDGET_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}