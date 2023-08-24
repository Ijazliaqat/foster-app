import React, { useState } from 'react'

export const useSwotCompetitor = () => {

  const [open, setopen] = useState<boolean>(false);

  const handleClose = () => {

    setopen(false);
  }
  return {
    open,
    setopen,
    handleClose
  }
}

