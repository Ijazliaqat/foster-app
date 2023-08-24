import React from "react";
import { useTrainingSessionsSchedule } from "./useTrainingSessionsSchedule";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import FullSchedule from "./full-schedule/FullSchedule";
import ThursdaySchedule from "./thursday-schedule/ThursdaySchedule";
import FridaySchedule from "./friday-schedule/FridaySchedule";
import FullCalenderView from "./full-calender-view/FullCalenderView";

const TrainingSessionsSchedule = () => {
  const { scheduleDataMap } = useTrainingSessionsSchedule();
  console.log(scheduleDataMap);
  const tabs = [
    "Full Schedule",
    "Thursday schedule (11/18)",
    "Friday schedule (11/19)",
    "Full Calender view",
  ];
  return (
    <div>
      {/* <VericalTabs tabsDataArray={scheduleDataMap}>
        <ScheduleDataTable />
      </VericalTabs> */}
      <VerticalSmallTabs tabs={tabs}>
        <FullSchedule />
        <ThursdaySchedule />
        <FridaySchedule />
        <FullCalenderView />
      </VerticalSmallTabs>
    </div>
  );
};

export default TrainingSessionsSchedule;
