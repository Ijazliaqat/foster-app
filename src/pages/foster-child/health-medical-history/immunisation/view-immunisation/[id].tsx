import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import ImmunisationFrom from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-form/immunisationFrom";
import ImmunisationUploadTable from "@root/sections/foster-child/health-medical-history/immunisation/immunisation-upload/immunisationUploadTable";
import Page from "@root/components/Page";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { useGetImmunisationDetailQuery } from "@root/services/foster-child/health-medical-history/immunisation/ImmunisationApi";
import { immunisationInfoListValue } from "@root/sections/foster-child/health-medical-history/immunisation";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
const PAGE_TITLE = "Immunisation";

ViewImmunisation.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function ViewImmunisation() {
  const router: any = useRouter();
  const { id, fosterChildId } = router.query;

  const { data, isLoading, isError }: any = useGetImmunisationDetailQuery({
    id,
  });
  let BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: `/`,
    },
    {
      name: "Child Immunisation Info",
      href: `/foster-child/health-medical-history/immunisation?fosterChildId=${fosterChildId}`,
    },
    {
      name: "Immunisation info",
      href: "",
    },
  ];
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <Box>
          <HorizaontalTabs
            tabsDataArray={["Immunisations Info", "Uploaded Documents"]}
          >
            <ImmunisationFrom
              immunisationData={{
                ...immunisationInfoListValue,
                ...(data?.data && {
                  ...data?.data,
                  date: new Date(data?.data?.date),
                  dueDate: new Date(data?.data?.dueDate),
                }),
              }}
              action="view"
              id={id}
            />
            <ImmunisationUploadTable action="view" immunisationId={id} />
          </HorizaontalTabs>
        </Box>
      )}
    </>
  );
}
