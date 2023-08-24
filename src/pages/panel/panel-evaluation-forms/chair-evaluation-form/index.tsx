import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChairSelfEvaluationFormList from '@root/sections/panel/panel-evaluation-forms/chair-self-evaluation-form/ChairSelfEvaluationForm';

const PAGE_TILE = "Panel Chair List";

ChairEvaluationForm.getLayout = function getLayout(page: any) {
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
                    name: "Panel Chair Self-Evaluation Form",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ChairEvaluationForm() {
    return (
        <Page title={PAGE_TILE}>
            <ChairSelfEvaluationFormList />
        </Page>
    );
}