import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import { ClaDocumentationForm } from "@root/sections/foster-child/child-background-info/cla-documentation-list/cla-documentation-form/CLADocumentationForm";
import { useGetClaDocumentationByIdQuery } from "@root/services/foster-child/child-background-info/cla-documentation-list/CLADocumentationListAPI";
import { useRouter } from "next/router";

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/cla-documentation?fosterChildId=${query}`,
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "Edit CLA Documentation";
// ----------------------------------------------------------------------

EditClaDocumentationList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditClaDocumentationList() {
  const { query } = useRouter();
  const router = useRouter();
  const documentId = query["cla_document_id"];
  const { data, isLoading, isSuccess, isError } =
    useGetClaDocumentationByIdQuery(documentId);
  console.log(data, "When Edit");

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <ClaDocumentationForm
            defaultFormType={data.data.documentType}
            defaultValues={{
              ...data?.data,
              // PEP default values
              assessmentDate: new Date(data?.data?.assessmentDate),
              pepDuration: {
                to: new Date(data?.data?.pepDuration?.to),
                from: new Date(data?.data?.pepDuration?.from),
              },
              // EHCP default values
              fosterPlacement: {
                date: new Date(data?.data.fosterPlacement?.date),
                onfile: data?.data.fosterPlacement?.onfile,
                comments: data?.data.fosterPlacement?.comments,
              },
              placementInfoRecord: {
                date: new Date(data?.data.placementInfoRecord?.date),
                onfile: data?.data.placementInfoRecord?.onfile,
                comments: data?.data.placementInfoRecord?.comments,
              },
              localAuthorityPlacementPlan: {
                date: new Date(data?.data.localAuthorityPlacementPlan?.date),
                onfile: data?.data.localAuthorityPlacementPlan?.onfile,
                comments: data?.data.localAuthorityPlacementPlan?.comments,
              },
              localAuthorityRiskAssesssment: {
                date: new Date(data?.data.localAuthorityRiskAssesssment?.date),
                onfile: data?.data.localAuthorityRiskAssesssment?.onfile,
                comments: data?.data.localAuthorityRiskAssesssment?.comments,
              },
              delegatedAuthority: {
                date: new Date(data?.data.delegatedAuthority?.date),
                onfile: data?.data.delegatedAuthority?.onfile,
                comments: data?.data.delegatedAuthority?.comments,
              },
              claReviewDate: {
                date: new Date(data?.data.claReviewDate?.date),
                onfile: data?.data.claReviewDate?.onfile,
                comments: data?.data.claReviewDate?.comments,
              },
              claMedicalDate: {
                date: new Date(data?.data.claMedicalDate?.date),
                onfile: data?.data.claMedicalDate?.onfile,
                comments: data?.data.claMedicalDate?.comments,
              },
              carePlanPt1: {
                date: new Date(data?.data.carePlanPt1?.date),
                onfile: data?.data.carePlanPt1?.onfile,
                comments: data?.data.carePlanPt1?.comments,
              },
              carePlanPt2: {
                date: new Date(data?.data.carePlanPt2?.date),
                onfile: data?.data.carePlanPt2?.onfile,
                comments: data?.data.carePlanPt2?.comments,
              },
              perDate: {
                date: new Date(data?.data.perDate?.date),
                onfile: data?.data.perDate?.onfile,
                comments: data?.data.perDate?.comments,
              },
              ehcpDate: {
                date: new Date(data?.data.ehcpDate?.date),
                onfile: data?.data.ehcpDate?.onfile,
                comments: data?.data.ehcpDate?.comments,
              },
              pathwayPlan: {
                date: new Date(data?.data.pathwayPlan?.date),
                onfile: data?.data.pathwayPlan?.onfile,
                comments: data?.data.pathwayPlan?.comments,
              },
              garbPack: {
                date: new Date(data?.data.garbPack?.date),
                onfile: data?.data.garbPack?.onfile,
                comments: data?.data.garbPack?.comments,
              },
            }}
          />
        )}
      </Paper>
    </Page>
  );
}
