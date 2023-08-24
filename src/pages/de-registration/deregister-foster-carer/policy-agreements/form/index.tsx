import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AgencyPolicyAgreementsTabs from '@root/sections/de-registration/deregister-foster-dashboard/dereg-contracts-agreements/agency-policy-agreements/agency-policy-agreements-tabs/AgencyPolicyAgreementsTabs';

const PAGE_TITLE = "Agency Policies Form";

DeregisterCarer.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "DeRegistration Agency Policies",
                    href: "/de-registration/deregister-foster-carer/policy-agreements",
                },
                {
                    name: "Form",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function DeregisterCarer() {
    return (
        <Page title={PAGE_TITLE}>
            <AgencyPolicyAgreementsTabs />
        </Page>
    );
}