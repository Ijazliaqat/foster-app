import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import MemberQuestionnaireList from '@root/sections/panel/panel-evaluation-forms/member-questionnaire/MemberQuestionnaire';

const PAGE_TILE = "Panel Questionnaire List";

MemberQuestionnairePage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel",
                    href: "/panel",
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

export default function MemberQuestionnairePage() {
    return (
        <Page title={PAGE_TILE}>
            <MemberQuestionnaireList />
        </Page>
    );
}