import ChildDaylogEventsReportInfo from "../child-daylog-events-report-info/ChildDaylogEventsReportInfo";
import { Card } from "@mui/material";

const ChildDaylogEventsReportInfoCard = () => {
  return (
         <Card
          sx={{
          p:  2,
          boxShadow: undefined
        }}
      >
      <ChildDaylogEventsReportInfo />
      </Card>

  );
};

export default ChildDaylogEventsReportInfoCard;
