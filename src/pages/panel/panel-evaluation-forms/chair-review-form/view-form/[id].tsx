import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import MemberSelfEvaluationFormList from '@root/sections/panel/panel-evaluation-forms/member-self-evaluation-form/MemberSelfEvaluationForm';
import ViewMemberSelfEvaluationForm from '@root/sections/panel/panel-evaluation-forms/member-self-evaluation-form/view-member-self-evaluation-form/ViewMemberSelfEvaluationForm';
import ViewChairReviewForm from '@root/sections/panel/panel-evaluation-forms/chair-review-form/view-chair-review-form/ViewChairReviewForm';

const PAGE_TILE = "View Form";

ViewChairReviewFormPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Panel Chair List",
                    href: "/panel/panel-evaluation-forms/chair-review-form",
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

export default function ViewChairReviewFormPage() {
    return (
        <Page title={PAGE_TILE}>
            <ViewChairReviewForm disabled={true}/>
        </Page>
    );
}