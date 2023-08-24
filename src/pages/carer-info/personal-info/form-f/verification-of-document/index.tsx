import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { VerificationOfDocumentsForm } from "@root/sections/carer-info/personal-info/form-f/verification-of-document";
import HorizontalTabs from "@root/components/HorizaontalTabs";
import {
  useVerificationApplication1Mutation,
  useVerificationApplication2Mutation,
} from "@root/services/carer-info/personal-info/form-f/verificationOfDocumentsApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants
const PAGE_TITLE = "Form F";

VerificationOfDocument.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function VerificationOfDocument() {
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
    { name: "Verification of Documents" },
  ];

  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data: verificationDocuments1 } = useFormFQuery(
    "verificationApplication1",
    { skip }
  );
  const { data: verificationDocuments2 } = useFormFQuery(
    "verificationApplication2",
    { skip }
  );
  //---------------=================-----------------//
  const [
    putHealthApplication1Data,
    { isLoading: isLoading1, isError: isError1, isSuccess: isSuccess1 },
  ] = useVerificationApplication1Mutation();
  const [
    putHealthApplication2Data,
    { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 },
  ] = useVerificationApplication2Mutation();
  //--------------------recieve functions----------------------------------//
  const receiveDataHandlerApplicant1 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication1Data({
        formData,
        params: `fosterCarerId=${id}`,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      router.push(`/carer-info/personal-info/form-f?fosterCarerId=${id}`);
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  const receiveDataHandlerApplicant2 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication2Data({
        formData,
        params: `fosterCarerId=${id}`,
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
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
      <HorizontalTabs tabsDataArray={["Applicant 1", "Applicant 2"]}>
        <VerificationOfDocumentsForm
          formData={receiveDataHandlerApplicant1}
          isLoading={isLoading1}
          isError={isError1}
          isSuccess={isSuccess1}
        />
        <VerificationOfDocumentsForm
          formData={receiveDataHandlerApplicant2}
          isLoading={isLoading2}
          isError={isError2}
          isSuccess={isSuccess2}
        />
      </HorizontalTabs>
    </Page>
  );
}
