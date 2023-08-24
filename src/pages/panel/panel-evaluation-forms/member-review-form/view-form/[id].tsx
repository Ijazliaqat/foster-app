import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ViewMemberReviewForm from '@root/sections/panel/panel-evaluation-forms/member-review-form/view-member-review-form/ViewMemberReviewForm';

const PAGE_TILE = "View Form";

MemberReviewFormPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel Members List",
                    href: "/panel/panel-evaluation-forms/member-evaluation-form",
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

export default function MemberReviewFormPage() {
    return (
        <Page title={PAGE_TILE}>
            <ViewMemberReviewForm disabled={true}/>
        </Page>
    );
}