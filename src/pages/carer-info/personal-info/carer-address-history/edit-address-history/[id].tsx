import Page from "@root/components/Page";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CarerAddressHistoryForm from "@root/sections/carer-info/personal-info/carer-address-history/CarerAddressHistoryForms";
import { Card } from "@mui/material";
import { useRouter } from "next/router";
import { useGetHistoryQuery } from "@root/services/carer-info/personal-info/carer-address-history/CarerAddressHistoryApi";
import { defaultValues } from "@root/sections/carer-info/personal-info/carer-address-history";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Carer Info",
    href: "/carer-info",
  },
  {
    name: "Carer Adrress",
    href: "",
  },
];
const PAGE_TITLE = "Carer Address History";

EditAddressHistory.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
      variant="dashboard"
    >
      {page}
    </Layout>
  );
};

export default function EditAddressHistory() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useGetHistoryQuery({ id });

  return (
    <Page title={PAGE_TITLE}>
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <Card sx={{ p: 2 }}>
          <CarerAddressHistoryForm
            historyData={{
              ...defaultValues,
              ...(data?.data?.data && {
                ...data?.data?.data,
                dateMovedOut: new Date(data?.data?.data.dateMovedOut),
              }),
            }}
            formType={"edit"}
          />
        </Card>
      )}
    </Page>
  );
}
