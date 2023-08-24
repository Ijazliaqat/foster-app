import React, { useState } from 'react'
import { NotificationData } from '.';
import { useTheme } from '@emotion/react';

export default function useUpcommingMarketingEvents() {
  let [expand, setExpand] = useState(false);
  const [notifications, setNotifications] = useState(
    NotificationData.slice(0, 6)
  );
  const handleExpand = () => {
    setExpand(!expand);
    !expand
      ? setNotifications(NotificationData)
      : setNotifications(NotificationData.slice(0, 6));
  };
  const theme: any = useTheme();
  return {
    theme,
    notifications,
    handleExpand,
    expand
  }
}
