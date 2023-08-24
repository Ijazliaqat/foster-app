import React from "react";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import AllSpeakers from "./all-speakers/AllSpeakers";
import ConfirmedSpeakers from "./confirmed-speakers/ConfirmedSpeakers";
import UnconfirmedSpeakers from "./unconfirmed-speakers/UnconfirmedSpeakers";

const TrainingSessionsSpeakers = () => {
  const tabs = ["All speakers", "Confirmed speakers", "Unconfirmed speakers"];
  return (
    <VerticalSmallTabs tabs={tabs}>
      <AllSpeakers />
      <ConfirmedSpeakers />
      <UnconfirmedSpeakers />
    </VerticalSmallTabs>
  );
};

export default TrainingSessionsSpeakers;
