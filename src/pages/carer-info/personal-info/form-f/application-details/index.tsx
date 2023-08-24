import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import { ApplicationDetailsForm } from "@root/sections/carer-info/personal-info/form-f/application-details";
import {
  usePutApplicationDetails1Mutation,
  usePutApplicationDetails2Mutation,
} from "@root/services/carer-info/personal-info/form-f/applicationDetailsApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants
const PAGE_TITLE = "Form F";

ApplicationDetails.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ApplicationDetails() {
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
      name: "Application Details",
    },
  ];

  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data: applicant1Data } = useFormFQuery("applicationDetails1", {
    skip,
  });
  const { data: applicant2Data } = useFormFQuery("applicationDetails2", {
    skip,
  });
  //---------------=================-----------------//
  //----------------------API Calls-----------------------------
  const [
    putApplicant1Data,
    { isLoading: isLoading1, isError: isError1, isSuccess: isSuccess1 },
  ] = usePutApplicationDetails1Mutation();
  const [
    putApplicant2Data,
    { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 },
  ] = usePutApplicationDetails2Mutation();
  //==============================//==================================//

  //----------------------Submit Functions-----------------------------
  const submitDataHandler1 = async (formData: any) => {
    // putApplicant1Data(formData);
    try {
      const res: any = await putApplicant1Data({
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

  const submitDataHandler2 = async (formData: any) => {
    try {
      const res: any = await putApplicant2Data({
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

  //==============================//==================================//
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizontalTabs tabsDataArray={["Applicant 1", "Applicant 2"]}>
        <ApplicationDetailsForm
          title="Applicant 1"
          formData={submitDataHandler1}
          isLoading={isLoading1}
          isError={isError1}
          isSuccess={isSuccess1}
        />
        <ApplicationDetailsForm
          title="Applicant 2"
          formData={submitDataHandler2}
          isLoading={isLoading2}
          isError={isError2}
          isSuccess={isSuccess2}
        />
      </HorizontalTabs>
    </Page>
  );
}
