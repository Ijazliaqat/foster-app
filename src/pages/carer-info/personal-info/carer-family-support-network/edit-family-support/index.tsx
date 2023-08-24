// components
import Page from "@root/components/Page";
import { CarerFamilySupportNetworkForm } from "@root/sections/carer-info/personal-info/carer-family-support-network";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import {
  useGetCarerFamilyByIdQuery,
  usePutCarerFamilyByIdMutation,
} from "@root/services/carer-info/personal-info/carer-family-support-network/carerFamilyApi";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
// Constants

const PAGE_TITLE = "Family Support Network";

EditFamilySupport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EditFamilySupport() {
  const router: any = useRouter();
  const { familyId } = router.query;
  const { makePath } = usePath();

  const { data, isLoading, isError } = useGetCarerFamilyByIdQuery(familyId);

  const [updateData, { isSuccess, isError: isErrorPut }] =
    usePutCarerFamilyByIdMutation();

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
      name: "Edit Member Details",
      href: "",
    },
  ];

  if (isError) return <Error />;

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
          initialValueProps={{
            ...data,
            dateOfBirth: new Date(data?.dateOfBirth),
          }}
          onSubmitHandler={updateData}
          message={"Updated"}
          isError={isErrorPut}
          isSuccess={isSuccess}
        />
      )}
    </Page>
  );
}
