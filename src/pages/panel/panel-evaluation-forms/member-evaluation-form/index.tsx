import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import MemberSelfEvaluationFormList from '@root/sections/panel/panel-evaluation-forms/member-self-evaluation-form/MemberSelfEvaluationForm';

const PAGE_TILE = "Panel Members List";

MemeberEvaluationFomrPage.getLayout = function getLayout(page: any) {
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
                    name: "Panel Member Self-Evaluation Form",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function MemeberEvaluationFomrPage() {
    return (
        <Page title={PAGE_TILE}>
            <MemberSelfEvaluationFormList />
        </Page>
    );
}