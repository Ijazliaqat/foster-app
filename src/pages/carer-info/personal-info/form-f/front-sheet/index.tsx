import Layout from "@root/layouts";
import { FrontSheetForm } from "@root/sections/carer-info/personal-info/form-f/front-sheet";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useFrontSheetMutation } from "@root/services/carer-info/personal-info/form-f/frontSheetApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// Constants
const PAGE_TITLE = "Form F";

FrontSheet.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function FrontSheet() {
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
    { name: "Front Sheet" },
  ];
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("frontSheet", { skip });

  console.log(user.defaultRole);
  console.log("data ata h data jata h", data);

  const [postFrontSheetData, { isLoading, isError, isSuccess }] =
    useFrontSheetMutation();
  const submitDataHandler = async (formData: any) => {
    try {
      const res: any = await postFrontSheetData({
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
      <FrontSheetForm
        formData={submitDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
