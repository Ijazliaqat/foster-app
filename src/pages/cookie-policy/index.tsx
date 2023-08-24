import HeroSection from "@root/components/static-page/HeroSection";
import Layout from "@root/layouts";
import CookiesPolicy from "@root/sections/sales-site/cookie-policy/CookiesPolicy";
import React from "react";

const PAGE_TITLE = "Cookie Policy";
CookiePolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function CookiePolicy() {
  return (
    <>
      {/* Privacy Page Hero Section */}
      <HeroSection
        mainTitle="Cookie Policy"
        description="Last Modification 5/23"
      />
      {/* Cookie Section */}
      <CookiesPolicy />
    </>
  );
}
