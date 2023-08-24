// layouts
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
// sections

// --------Leaving this import as and example ------------
// import {
//   HomeHero,
//   HomeDarkMode,
//   HomeLookingFor,
//   HomeColorPresets,
//   HomePricingPlans,
//   HomeAdvertisement,
//   HomeCleanInterfaces,
//   HomeHugePackElements,
// } from '../sections/home';
// -------------------------------------------------------

// next-i18
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Charts",
    href: "/dashboard/charts",
  },
  {
    name: "Weekend",
    href: "/dashboard/charts/weekend",
  },
  {
    name: "Day",
    href: "/dashboard/charts/weekend/day",
  },
];

const PAGE_TITLE = "Home Page";

// ----------------------------------------------------------------------
// Page Layout
Dashboard.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  // const { t } = useTranslation(["common", "footer"]);

  return <Page title={PAGE_TITLE}></Page>;
}

// export const getServerSideProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
//   },
// });
