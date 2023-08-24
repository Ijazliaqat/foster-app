import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ViewMemberQuestionnaire from '@root/sections/panel/panel-evaluation-forms/member-questionnaire/view-member-questionnaire/ViewMemberQuestionnaire';

const PAGE_TILE = "View Form";

QuestionnaireViewFormPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel Questionnaire List",
                    href: "/panel/panel-evaluation-forms/member-questionnaire",
                },
                {
                    name: "Panel Member Questionnaire",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function QuestionnaireViewFormPage() {
    return (
        <Page title={PAGE_TILE}>
            <ViewMemberQuestionnaire />
        </Page>
    );
}