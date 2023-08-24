import Layout from '@root/layouts';
import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AgencyPolicyAgreements from '@root/sections/de-registration/deregister-foster-dashboard/dereg-contracts-agreements/agency-policy-agreements/AgencyPolicyAgreements';


const PAGE_TITLE = "De-reg Contracts & Agreements";

DeregisterCarer.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "DeRegistration",
                    href: "/de-registration/deregister-foster-carer",
                },
                {
                    name: "Agency Policies ",
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
            <AgencyPolicyAgreements />
        </Page>
    );
}