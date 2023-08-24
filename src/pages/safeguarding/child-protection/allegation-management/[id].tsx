import Layout from '@root/layouts';
import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import { Card } from '@mui/material';
import AddAllegationForm from '@root/sections/safeguarding/child-protection/allegation-management/AddAllegationForm/AddAllegationForm';
import { useRouter } from 'next/router';

const PAGE_TITLE = "Edit Allegation Management";

AddAllegationManagement.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Safeguarding Panel",
                    href: "/safeguarding",
                },
                {
                    name: "Allegation Management List",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function AddAllegationManagement() {
    const router = useRouter();
    const { action, id } = router.query;
    const disabled = action === 'view' ? true : false;
    return (
        <Page title={PAGE_TITLE}>
            <Card sx={{ p: 1 }}>
                <AddAllegationForm disabled={disabled} action={action} />
            </Card>
        </Page>
    );
}