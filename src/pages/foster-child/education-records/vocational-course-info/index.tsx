import VocationalCourseInfoTable from "@root/sections/foster-child/vocational-course-info/vocational-course-info-table/VocationalCourseInfoTable";
import React from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";
import { useGetSelectedSubstituteCarerQuery } from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Page from "@root/components/Page";
import usePath from "@root/hooks/usePath";
import { useVocationalInfoListQuery } from "@root/services/foster-child/vocational-info-list/VocationalInfoListApi";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Vocational Course Info";

VocationalCourseInfo.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function VocationalCourseInfo() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterChildId;

  const { data } = useVocationalInfoListQuery(id, { skip: !!!id });

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Foster Child",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "Vocational Course Info List",
      href: "/foster-child/education-records/vocational-course-info",
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <VocationalCourseInfoTable
        tableData={{}}
        meta={{}}
        searchedText={(text: any) => console.log(text)}
        apiStatus={{}}
        onPageChange={(page: any) => console.log(page)}
        route={`/foster-child/education-records/vocational-course-info/details${
          id ? "?fosterChildId=" + id : ""
        }`}
      />
    </Page>
  );
}
