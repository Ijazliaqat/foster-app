import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import RegularAssessmentMeetingList from "@root/sections/recruitment/assessment-stage-one/regular-assessment-meeting/RegularAssessmentMeetingList";
import RegularAssessmentMeetingForm from "@root/sections/recruitment/assessment-stage-one/regular-assessment-meeting/RegularAssessmentMeetingForm";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Assessment stage 1",
    href: "/recruitment",
  },
  {
    name: "Regular Assessment Meeting",
    href: "",
  },
];

const PAGE_TITLE = "Recruitment";
RegularAssessmentMeeting.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function RegularAssessmentMeeting() {
  const [open, setOpen] = useState(false);
  const [fieldsDisable, setFieldsDisable] = useState(false);
  const [actionType, setActionType] = useState("");
  const [id, setId] = useState("");

  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 1 }}>
        <RegularAssessmentMeetingList
          open={open}
          setOpen={setOpen}
          setId={setId}
          setFieldsDisable={setFieldsDisable}
          setActionType={setActionType}
        />
      </Card>

      {open && (
        <RegularAssessmentMeetingForm
          open={open}
          setOpen={setOpen}
          id={id}
          setId={setId}
          fieldsDisable={fieldsDisable}
          setFieldsDisable={setFieldsDisable}
          actionType={actionType}
        />
      )}
    </Page>
  );
}
