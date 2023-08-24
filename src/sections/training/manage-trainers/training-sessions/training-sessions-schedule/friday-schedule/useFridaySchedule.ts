import React, { useState } from 'react'
import { All_SCHEDULE_DATA } from '.';
export const useFridaySchedule = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(All_SCHEDULE_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}