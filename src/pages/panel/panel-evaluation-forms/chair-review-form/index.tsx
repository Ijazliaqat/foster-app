import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChairReviewFormList from '@root/sections/panel/panel-evaluation-forms/chair-review-form/ChairReviewForm';

const PAGE_TILE = "Panel Chair List";

ChairReviewForm.getLayout = function getLayout(page: any) {
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
                    name: "Panel Chair Review Form",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ChairReviewForm() {
    return (
        <Page title={PAGE_TILE}>
            <ChairReviewFormList />
        </Page>
    );
}