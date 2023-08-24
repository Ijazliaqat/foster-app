import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import MemberSelfEvaluationFormList from '@root/sections/panel/panel-evaluation-forms/member-self-evaluation-form/MemberSelfEvaluationForm';
import ViewMemberSelfEvaluationForm from '@root/sections/panel/panel-evaluation-forms/member-self-evaluation-form/view-member-self-evaluation-form/ViewMemberSelfEvaluationForm';

const PAGE_TILE = "View Form";

MemberSelfEvaluationForm.getLayout = function getLayout(page: any) {
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
                    name: "Panel Member Self-Evaluation Form",
                },
            ]}
            title={PAGE_TILE}
        >
            {page}
        </Layout>
    );
};

export default function MemberSelfEvaluationForm() {
    return (
        <Page title={PAGE_TILE}>
            <ViewMemberSelfEvaluationForm disabled={true}/>
        </Page>
    );
}