import Page from "@root/components/Page";

import Layout from "@root/layouts";

import {
  InterviewRecordAndAnalysisComponent,
  defaultValues,
} from "@root/sections/carer-info/personal-info/interview-record-and-analysis";

import React from "react";
import Error from "@root/components/Error";

import HomeIcon from "@mui/icons-material/Home";

import { Box, Card } from "@mui/material";

import { useGetInterviewRecordAnalysisQuery } from "@root/services/carer-info/personal-info/interview-record-analysis/InterviewRecordAnalysis";

import IsFetching from "@root/components/loaders/IsFetching";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TITLE = "Interview Record and Analysis";

InterviewRecordAndAnalysis.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function InterviewRecordAndAnalysis() {
  let role = "ifa";
  let router = useRouter();
  let { fosterCarerId } = router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      href: `/`,
    },
    {
      name: "Carer Info",
      href: `/carer-info?fosterCarerId=${fosterCarerId}`,
    },
    {
      name: "Interview Record And Analysis",
      href: ``,
    },
  ];

  const {
    data: fetchData,
    isLoading,
    isError,
  }: any = useGetInterviewRecordAnalysisQuery();

  if (role == "foster-carer" && isError) {
    return <Error />;
  }

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
        <Card sx={{ p: 4 }}>
          <InterviewRecordAndAnalysisComponent
            data={{
              ...defaultValues,
              ...(fetchData?.data && {
                ...fetchData?.data,
                interviewDate: new Date(fetchData?.data.interviewDate),
                signatureDate: new Date(fetchData?.data.signatureDate),
                accessorSignatureDate: new Date(
                  fetchData?.data.accessorSignatureDate
                ),
              }),
            }}
            disabled={role == "foster-carer" ? true : false}
            role={role}
          />
        </Card>
      )}
    </>
  );
}
