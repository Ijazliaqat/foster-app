// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
import { useGetCarerFamilyByIdQuery } from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";

// ----------------------------------------------------------------------
// Constants
const PAGE_TITLE = "Family Support Network";

// ----------------------------------------------------------------------

ViewFamilySupport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ViewFamilySupport() {
  const router = useRouter();
  const { familyId } = router.query;
  const { makePath } = usePath();

  const { data, isLoading, isError } = useGetCarerFamilyByIdQuery(familyId);

  if (isError) return <Error />;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Family Support Network List",
      href: makePath({
        path: "/carer-info/personal-info/carer-family-support-network",
        skipQueries: ["familyId"],
      }),
    },
    {
      name: "View Member Details",
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
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <CarerFamilySupportNetworkForm
          disabled
          initialValueProps={{
            ...data,
            dateOfBirth: new Date(data?.dateOfBirth),
          }}
        />
      )}
    </Page>
  );
}
