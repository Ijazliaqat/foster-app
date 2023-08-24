import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChildDetails from '@root/sections/advocacy/child-advocacy/child-details/ChildDetails';

const PAGE_TITLE = "Child Advocacy";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Child List",
                    href: "/advocacy/child-advocacy",
                },
                {
                    name: "Child Details",
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
            <ChildDetails/>
        </Page>
    );
}