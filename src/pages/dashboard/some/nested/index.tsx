// @mui
import { styled } from "@mui/material/styles";
// layouts
import Layout from "@root/layouts";
// components
import Page from "@root/components/Page";
// sections

// next-i18
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import { TitleWithBreadcrumbs } from "@root/components/PageBreadcrumbs";
import { Logo } from "@root/assets/svg";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(2),
}));

// ----------------------------------------------------------------------

TestPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function TestPage() {
  const { t } = useTranslation(["common", "footer"]);

  return (
    <Page title="Test Page">
      <TitleWithBreadcrumbs title="Test Page" />
      <RootStyle>
        <ContentStyle>
          <Logo variant="theme" />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
