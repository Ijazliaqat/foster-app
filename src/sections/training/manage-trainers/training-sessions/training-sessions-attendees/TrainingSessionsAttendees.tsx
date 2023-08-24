import React from "react"; 
import VerticalSmallTabs from "@root/components/VerticalSmallTabs"; 
import AllAttendees from "./all-attendees/AllAttendees";
import RegistrationForm from "./registration-form/RegistrationForm";
import ConfirmedAttendees from "./confirmed-attendees/ConfirmedAttendees";
import UnconfirmedAttendees from "./unconfirmed-attendees/UnconfirmedAttendees";

const TrainingSessionsAttendees = () => { 
  const tabs = [
    "All attendees",
    "Registration form",
    "Confirmed attendees",
    "Unconfirmed attendees",
  ];
  return ( 
      <VerticalSmallTabs tabs={tabs}>
        <AllAttendees />
        <RegistrationForm />
        <ConfirmedAttendees />
        <UnconfirmedAttendees />
      </VerticalSmallTabs> 
  );
};

export default TrainingSessionsAttendees;
