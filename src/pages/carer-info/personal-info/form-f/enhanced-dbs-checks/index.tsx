import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { EnhancedDbsChecksForm } from "@root/sections/carer-info/personal-info/form-f/enhanced-dbs-checks";
import { usePutEnhancedDbsChecksMutation } from "@root/services/carer-info/personal-info/form-f/enhancedDbsChecksApi";
import { Box } from "@mui/material";
import IsFetching from "@root/components/loaders/IsFetching";
import Error from "@root/components/Error";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";

// Constants
const PAGE_TITLE = "Form F";

EnhancedDbsChecks.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EnhancedDbsChecks() {
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
    { name: "Enhanced DBS Checks" },
  ];
  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("enhancedDBSCheck", { skip });
  //---------------=================-----------------//
  const [putDBSChecksData, { isLoading, isError, isSuccess }] =
    usePutEnhancedDbsChecksMutation();
  const recieveDataHandler = async (formData: any) => {
    try {
      const res: any = await putDBSChecksData({
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
      <EnhancedDbsChecksForm
        isLoading={isLoading}
        isError={isError}
        formData={recieveDataHandler}
        isSuccess={isSuccess}
      />
    </Page>
  );
}

//  if (isLoading)
//    return (
//      <Page title={PAGE_TITLE}>
//        <Box sx={{ position: "relative" }}>
//          <IsFetching isFetching />
//          <div style={{ textAlign: "center", margin: "auto" }}>
//            Loading . . .{" "}
//          </div>
//        </Box>
//      </Page>
//    );
//  else if (!isLoading && isError) return <Error />;
