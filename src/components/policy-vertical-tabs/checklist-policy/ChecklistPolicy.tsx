import { Box, Checkbox, useTheme } from "@mui/material";
import CustomAccordian from "@root/components/CustomAccordian";
import ChecklistPolicyTable from "./ChecklistPolicyTable";
import React, { useMemo } from "react";
import { GDPRChecklistData, JobDescriptionData } from ".";
import { useRouter } from "next/router";

const ChecklistPolicy = () => {
  const route = useRouter();

    const ChecklistAccordianData = useMemo(() => [
        {
            title: 'Appendix A ( GDPR CHECKLIST )',
            formName: "Appendix A",
            component: <ChecklistPolicyTable tableData={GDPRChecklistData} checklistName={"Appendix A"} />,
        },
        {
            title: 'Appendix B ( Job Description of Data Protection officer  )',
            formName: "Appendix B",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Appendix B"} />,
        },
        {
            title: 'Appendix C ( GDPR specific Privacy Notice  )',
            formName: "Appendix C",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Appendix C"} />
        },
        {
            title: 'Appendix D ( Privacy Notice  for Foster Carer’s Network )',
            formName: "Appendix D",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Appendix D"} />
        },
        {
            title: 'Appendix E ( Privacy Notice  - Letter to Personal Referee )',
            formName: "Appendix E",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Appendix E"} />
        },
        {
            title: 'Appendix F ( Info to include in GDPR )',
            formName: "Appendix F",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Appendix F"} />
        },
        {
            title: 'DPO and 6 Core Principles',
            formName: "DPO and 6 Core Principles",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"DPO and 6 Core Principles"} />
        },
        {
            title: 'Cyber Essentials',
            formName: "Cyber Essentials",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Cyber Essentials"} />
        },
        {
            title: 'Cyber Essentials Checklist',
            formName: "Cyber Essentials Checklist",
            component: <ChecklistPolicyTable tableData={JobDescriptionData} checklistName={"Cyber Essentials Checklist"} />
        },
    ], []);


    return (
        <>
            <CustomAccordian data={ChecklistAccordianData} addShowBtn handleRowAdd={(item: any) => route.push({ pathname: `/policies-and-guidelines/checklists/checklist-form`, query: { name: item.formName, action: "add" } })} firstAccStyle />
        </>
    );
};

export default ChecklistPolicy;
