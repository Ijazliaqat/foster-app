import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import CreateAdvocacyFormWrapper from '@root/sections/advocacy/child-advocacy/child-details/SomeoneElseAdvocacyForm/CreateAdvocacyFormWrapper/CreateAdvocacyFormWrapper';

const PAGE_TITLE = "Create Advocacy Form";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Create Advocacy",
                    href: "/advocacy/child-advocacy/details/someone-else-form/create-advocacy",
                },
                {
                    name: "All",
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
            <CreateAdvocacyFormWrapper />
        </Page>
    );
}