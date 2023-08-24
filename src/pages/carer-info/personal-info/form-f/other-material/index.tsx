import Layout from "@root/layouts";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import OtherMaterialTable from "@root/sections/carer-info/personal-info/form-f/other-material/OtherMaterialTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";
import { useRouter } from "next/router";
import { useLazyFormFAllQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";
import { useGetFormFOtherInfoQuery } from "@root/services/carer-info/personal-info/form-f/otherInfoApi";

// Constants
const PAGE_TITLE = "Form F";

OtherMaterial.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function OtherMaterial() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;
  const [getFormFTrigger] = useLazyFormFAllQuery();
  const [formFId, setFormFId] = useState<any>(false);
  const otherInfoData = useGetFormFOtherInfoQuery(formFId, { skip: !formFId });

  // Fetch data on mount and when form is updated or deleted in the database
  const getFormFData = async () => {
    const { data, error, isError } = await getFormFTrigger(null, true);
    if (isError || !data?.id) {
      console.log(error);
    } else {
      setFormFId(data?.id);
    }
  };
  useEffect(() => {
    getFormFData();
  }, []);
  console.log(otherInfoData);

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Form F List",
      href: makePath({
        path: "/carer-info/personal-info/form-f",
      }),
    },
    { name: "Other Material" },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <OtherMaterialTable />
    </Page>
  );
}
