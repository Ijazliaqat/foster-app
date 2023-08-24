// components
import Page from "@root/components/Page";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
// Api
import { usePostCarerFamilyApiMutation } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------
// Constants

const PAGE_TITLE = "Family Support Network";

// ----------------------------------------------------------------------

AddFamilySupport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function AddFamilySupport() {
  const [postData, { isError, isSuccess }] = usePostCarerFamilyApiMutation();
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Family Support Network List",
      href: makePath({
        path: "/carer-info/personal-info/carer-family-support-network",
      }),
    },
    {
      name: "Add Member Details",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <CarerFamilySupportNetworkForm
        onSubmitHandler={postData}
        message={"Added"}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
