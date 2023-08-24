import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import ChildFormWrapper from '@root/sections/advocacy/child-advocacy/child-details/ChildAdvocacyForm/ChildFormWrapper/ChildFormWrapper';

const PAGE_TITLE = "Advocacy Form to be Filled By Child List";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />, 
                    name: "Advocacy Form to be Filled By Child List",
                    href: "/advocacy/child-advocacy/details/advocacy-form",
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

export default function AdvocacyPage() {
    return (
        <Page title={PAGE_TITLE}>
            <ChildFormWrapper/>
        </Page>
    );
}