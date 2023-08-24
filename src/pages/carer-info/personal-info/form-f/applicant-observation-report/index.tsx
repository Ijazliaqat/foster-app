import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { ApplicantObservationOnReportForm } from "@root/sections/carer-info/personal-info/form-f/applicant-observation-on-report";
import { usePutApplicantObservationMutation } from "@root/services/carer-info/personal-info/form-f/applicantObservationReportApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants
const PAGE_TITLE = "Form F";

ApplicantObservationReport.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ApplicantObservationReport() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Form F List",
      href: makePath({
        path: "/carer-info/personal-info/form-f",
      }),
    },
    {
      name: "Applicant Observation Report",
    },
  ];

  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("applicantsObservation", { skip });
  //---------------=================-----------------//
  const [putData, { isSuccess, isError, isLoading }] =
    usePutApplicantObservationMutation();

  const receiveDataHandler = async (formData: any) => {
    try {
      const res: any = await putData({
        formData,
        params: `fosterCarerId=${id}`,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Application Details Submitted!`, {
        variant: "success",
      });
      router.push(`/carer-info/personal-info/form-f?fosterCarerId=${id}`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <ApplicantObservationOnReportForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />{" "}
    </Page>
  );
}
