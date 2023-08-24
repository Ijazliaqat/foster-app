import React, { useState } from 'react'
import { ONGOING_EVENT_TRAINING_SESSIONS_DATA } from '.';
export const useOngoingEvent = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [data, setData] = useState(ONGOING_EVENT_TRAINING_SESSIONS_DATA)
  return {
    data,
    openDelete,
    setOpenDelete
  }
}

