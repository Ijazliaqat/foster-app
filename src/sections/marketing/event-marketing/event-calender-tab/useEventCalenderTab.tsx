import { useTheme, Box } from "@mui/material";
import { useState } from "react";

export const useEventCalenderTab = () => {
  const theme = useTheme();
  const [isExpandCalendar, setIsExpandCalendar] = useState<boolean>(false);
 
  const chevronColor = theme.palette.mode === 'light' ? "#fff" : "#212B36";

  const handleExpandCalendar = () => setIsExpandCalendar(!isExpandCalendar)

  const handleEventContent = (eventInfo: any) => {
    const events = eventInfo?.event?._def
    return { events }
  };

  return {
    theme,
    handleEventContent,
    isExpandCalendar,
    handleExpandCalendar,
    chevronColor
  };
};
