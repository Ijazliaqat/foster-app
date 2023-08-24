import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import MemberReviewFormList from '@root/sections/panel/panel-evaluation-forms/member-review-form/MemberReviewForm';

const PAGE_TILE = "Panel Members List";

ChairReviewFormPage.getLayout = function getLayout(page: any) {
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
                    name: "Panel Member Review Form",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function ChairReviewFormPage() {
    return (
        <Page title={PAGE_TILE}>
            <MemberReviewFormList />
        </Page>
    );
}