import { useState } from "react";
import { useTheme } from "@mui/material";
import { UpcomingMeetingsData } from ".";

// ==========================================================


export const useUpcomingMeeting = () =>{
    const theme: any = useTheme();
    let [expand, setExpand] = useState(false);
    const [notifications, setNotifications] = useState(UpcomingMeetingsData.slice(0, 4));
    const handleExpand = () => {
      setExpand(!expand);
      !expand ? setNotifications(UpcomingMeetingsData) : setNotifications(UpcomingMeetingsData.slice(0, 4));
    };
  return{
    theme,
    expand,
    notifications,
    handleExpand,
  }
}