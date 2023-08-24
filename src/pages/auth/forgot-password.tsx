// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import ForgotPasswordForm from "@root/sections/auth/forgot-password/ForgotPasswordForm";
import Layout from "@root/layouts";

// ----------------------------------------------------------------------

ForgotPassword.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Forgot Password">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  return (
    <GuestGuard>
      <Page title="Forgot Password">
        <ForgotPasswordForm />
      </Page>
    </GuestGuard>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "login"])),
  },
});
