import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import Calendar from "react-calendar";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CalendarEvents() {
  const theme: any = useTheme();

  let dateArray: any = [
    {
      date: "2023-08-05T09:47:17.456000Z",
      colorName: "highlight",
    },
    {
      date: "2023-08-13T09:47:17.456000Z",
      colorName: "highlight",
    },
    {
      date: "2023-08-14T09:47:17.456000Z",
      colorName: "highlight",
    },
  ];

  const setClass = (date: any) => {
    const dateobj = dateArray.find((x: any) => {
      return (
        date.getDay() === new Date(x.date).getDay() &&
        date.getMonth() === new Date(x.date).getMonth() &&
        date.getDate() === new Date(x.date).getDate()
      );
    });
    return dateobj ? dateobj.colorName : "";
  };
  return (
    <NewCalender
      tileClassName={({ activeStartDate, date, view }: any) => setClass(date)}
      onChange={(value: any) => {
        console.log(value);
      }}
      iconsStyles={{
        fontSize: "25px",
        color: theme.palette.primary.main,
      }}
    />
  );
}

const NewCalender = styled(({ iconsStyles, ...props }: any) => (
  <Calendar
    navigationLabel={({ date, label, locale, view }) => (
      <p>{`Upcoming Panels - ${label}`}</p>
    )}
    {...props}
    nextLabel={<ArrowRightIcon sx={iconsStyles} />}
    next2Label={<SkipNextIcon sx={iconsStyles} />}
    prevLabel={<ArrowLeftIcon sx={iconsStyles} />}
    prev2Label={<SkipPreviousIcon sx={iconsStyles} />}
  />
))(({ theme }: any) => ({
  height: "auto",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.grey[700],
  boxShadow: theme.shadows[5],
  borderColor: "transparent",
  padding: "10px",
  borderRadius: 7,

  "&  .react-calendar__tile": {
    padding: "0px 0px",

    lineHeight: "71px",
    color: theme.palette.text.primary,
    fontSize: "18px",
  },
  "& .react-calendar__month-view__days": {
    padding: "25px 0px",
  },
  "&  .highlight": {
    backgroundColor: "#F6830F",
    borderRadius: "8px",
  },

  "& .react-calendar__tile--active": {
    background: `${theme.palette.primary.main} !important `,
    borderRadius: "8%",
  },
  "& .react-calendar__tile--now": {
    background: `${theme.palette.primary.light} !important `,
    color: theme.palette.primary.contrastText,
    borderRadius: "8%",
  },
  "&.react-calendar button:enabled:hover": {
    borderRadius: "8%",
  },
  "& .react-calendar__tile--hasActive": {
    background: "unset !important",
  },

  "& .react-calendar__navigation": {
    justifyContent: "center",
    "& button": {
      minWidth: "35px",
      color: theme.palette.grey[700],
      fontWeight: 650,
    },
    "& button span": {
      fontFamily: theme.typography.fontFamily,
    },
  },
}));
