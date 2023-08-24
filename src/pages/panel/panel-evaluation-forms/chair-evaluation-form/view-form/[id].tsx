import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ViewChairSelfEvaluationForm from '@root/sections/panel/panel-evaluation-forms/chair-self-evaluation-form/view-chair-self-evaluation-form/ViewChairSelfEvaluationForm';

const PAGE_TILE = "View Form";

ViewChairEvaluationFormPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel Chair List",
                    href: "/panel/panel-evaluation-forms/chair-evaluation-form",
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

export default function ViewChairEvaluationFormPage() {
    return (
        <Page title={PAGE_TILE}>
            <ViewChairSelfEvaluationForm disabled={true}/>
        </Page>
    );
}