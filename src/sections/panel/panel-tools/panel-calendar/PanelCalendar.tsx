import React from 'react'
import { Box, Card, Typography } from '@mui/material';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from '@fullcalendar/timegrid'
import { viewPanelCalendarData } from '.';
import { usePanelCalendar } from './usePanelCalendar';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';

const PanelCalendar = () => {
    const { theme, handleEventContent, isExpandCalendar, handleExpandCalendar, chevronColor } = usePanelCalendar();

    return (
        <>
            <Card sx={{ p: 2, }}>
                <Typography variant='h2' sx={styles.heading(theme)}>Panel Calendar: Using Amazon Chime</Typography>
                <Typography component="p" sx={styles.description(theme)}>Book Calendar --- Panel chair, Panel admin, Panel organizer, SSW, Panel members, Panel date, Panel venue, Time</Typography>
                <Box sx={styles.calendarWrapper}>
                    <Box sx={styles.calendarLabel(theme.palette.mode)} onClick={handleExpandCalendar}>
                        <Typography sx={styles.panelText(theme.palette.mode)}>Panel Date</Typography>
                        <Box sx={styles.iconWrapper}>
                            <GoChevronDown style={{ transform: !isExpandCalendar ? 'rotate(180deg)' : 'rotate(0deg)', color: chevronColor, fontSize: "20px" }} />
                            <AiOutlineExpandAlt style={{ color: chevronColor, fontSize: "20px" }} />
                        </Box>
                    </Box>
                    {!isExpandCalendar &&
                        <Box sx={styles.calendarStyles(theme.palette.mode, theme.palette.primary)}>
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
                                    year: 'numeric',
                                    month: 'long'
                                }}
                                dayMaxEventRows={2}
                                events={viewPanelCalendarData}
                                eventContent={(info: any) => {
                                    let { events } = handleEventContent(info)
                                    return (
                                        <Box sx={styles.eventWrapper}>
                                            <Typography sx={styles.eventTitle(theme.palette.mode)}>{events?.title}</Typography>
                                        </Box>
                                    )
                                }}
                            />
                        </Box>
                    }
                </Box>
            </Card>
        </>
    )
}

export default PanelCalendar;

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
