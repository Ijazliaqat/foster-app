import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box, Card, Typography } from '@mui/material';
import { eventCalenderData } from '.';
import { useEventCalenderTab } from "./useEventCalenderTab";

const EventCalenderTab = () => {
  const { theme, handleEventContent, isExpandCalendar, handleExpandCalendar, chevronColor } = useEventCalenderTab();

  return (
    <div>
      <Box
        sx={styles.calendarStyles(theme.palette.mode, theme.palette.primary)}
      >
        <FullCalendar
          height="100vh"
          initialView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "today prev next",
            center: "title",
            right: "dayGridMonth",
          }}
          titleFormat={{
            year: "numeric",
            month: "long",
          }}
          dayMaxEventRows={2}
          events={eventCalenderData}
          eventContent={(info: any) => {
            let { events } = handleEventContent(info);
            return (
              <Box sx={styles.eventWrapper}>
                <Typography sx={styles.eventTitle(theme.palette.mode)}>
                  {events?.title}
                </Typography>
              </Box>
            );
          }}
        />
      </Box>
    </div>
  );
};

export default EventCalenderTab;

const styles = {
  calendarWrapper: { border: "2px solid #ddd", mt: 4 },
  calendarLabel: (mode: any) => ({
      background: mode === 'light' ? "#212B36 !important" : '#ddd',
      p: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
  }),
  iconWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "3px"
  },
  panelText: (mode: any) => ({
      fontSize: "16px !important",
      fontWeight: 600,
      lineHeight: "19px",
      color: mode === 'light' ? "#fff" : "#212B36",
      pl: "5px"
  }),
  heading: (theme: any) => ({
      fontSize: "16px !important",
      fontWeight: 600,
      lineHeight: "19px",
      color: theme.palette.primary.main
  }),
  description: (theme: any) => ({
      fontSize: "14px !important",
      fontWeight: 600,
      lineHeight: "19px",
      color: theme.palette.primary.main,
      pt: "7px"
  }),
  calendarStyles: (mode: any, color: any) => ({
      p: 2,
      '& .fc-toolbar-chunk button': {
          textTransform: "capitalize",
          background: mode === 'light' ? '#212B36 !important' : '#fff !important',
          border: mode === 'light' ? '#212B36 !important' : '#fff !important',
          color: mode === 'light' ? '#fff !important' : '#000 !important',
          "&:nth-child(2)": {
              background: "none !important",
              border: "none !important",
              color: mode === 'light' ? '#212B36 !important' : '#fff !important',
              p: "0 !important"
          },
          "&:nth-child(3)": {
              background: "none !important",
              border: "none !important",
              color: mode === 'light' ? '#212B36 !important' : '#fff !important',
              p: "0 !important"
          },
      },
      "& .fc-toolbar-chunk .fc-toolbar-title": {
          fontSize: "28px !important",
          fontWeight: 600,
      },
      "& .fc-button-primary:not(:disabled):active:focus, .fc-button-primary:not(:disabled).fc-button-active:focus,": {
          boxShadow: "none !important"
      },
      "& .fc-h-event": {
          background: "none !important",
          border: "none !important"
      },
      "& .fc-theme-standard .fc-popover-header": {
          background: color.main,
          color: "#fff !important"
      },
      "& .fc-daygrid-day": {
          height: "150px !important"
      },
      "& .fc .fc-button:focus": {
          boxShadow: "none !important"
      }
  }),

  eventTitle: (mode: any) => ({
      color: "#000",
      fontWeight: 700
  }),
  eventWrapper: {
      backgroundColor: "#FFEFB7",
      p: "5px",
      borderRadius: "5px",
      mb: "10px !important"
  }
}
