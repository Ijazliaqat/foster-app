import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import AboutApplicantsForm from "@root/sections/carer-info/personal-info/form-f/about-the-applicants/AboutApplicantsForm";
import { usePutAboutTheApplicantMutation } from "@root/services/carer-info/personal-info/form-f/aboutApplicantApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants
const PAGE_TITLE = "Form F";

AboutTheApplicant.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function AboutTheApplicant() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const breadcrumbs = [
    {
      icon: <HomeIcon />,
      name: "Form F List",
      href: makePath({
        path: "/carer-info/personal-info/form-f",
      }),
    },
    {
      name: "About The Applicant",
    },
  ];
  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("aboutApplicants", { skip });
  //---------------=================-----------------//

  const [putData, { isSuccess, isError, isLoading }] =
    usePutAboutTheApplicantMutation();

  const receiveDataHandler = async (formData: any) => {
    try {
      const res: any = await putData({
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
        breadcrumbs={breadcrumbs}
        title={PAGE_TITLE}
      />
      <AboutApplicantsForm
        formData={receiveDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
