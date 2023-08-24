import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import CreateAdvocacy from '@root/sections/advocacy/child-advocacy/child-details/SomeoneElseAdvocacyForm/CreateAdvocacy/CreateAdvocacy';

const PAGE_TITLE = "Create Advocacy";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Forms Listing",
                    href: "/advocacy/child-advocacy/details/someone-else-form",
                },
                {
                    name: "Advocacy Type",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function AdvocacyPage() {
    return (
        <Page title={PAGE_TITLE}>
            <CreateAdvocacy />
        </Page>
    );
}