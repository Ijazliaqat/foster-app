import React, { useState } from 'react'
import { useRouter } from 'next/router';

export const useAdditionalNotesQuestions = () => {

  const router = useRouter();
  const { query } = router;
  const disabled = query.action === 'view' ? true : false
  const [noteValue, setNoteValue] = useState('');

  const handleBack = () => router.push({ pathname: '/placement/placement-plan/placement-plan-details', query })

  const handleChange = (event: any) => setNoteValue(event.target.value);

  return {
    noteValue,
    handleChange,
    handleBack,
    disabled
  }
}