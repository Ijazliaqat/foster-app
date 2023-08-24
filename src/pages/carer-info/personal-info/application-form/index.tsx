import Layout from "@root/layouts";
import React from "react";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import {
  BasicInformationForm,
  defaultValues as BasicdefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/basic-information";
import {
  ContactForm,
  defaultValues as contactDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/contact";
import {
  OtherInfoForm,
  defaultValues as otherInfoDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/other-info";
import {
  PlacementPreferenceForm,
  defaultValues as placementPreferenceDefaultValues,
} from "@root/sections/carer-info/personal-info/application-form/placement-preference";
import FamilyTable from "@root/sections/carer-info/personal-info/application-form/family/FamilyTable";
import Reference from "@root/sections/carer-info/personal-info/application-form/reference/ReferenceTable";
import Employers from "@root/sections/carer-info/personal-info/application-form/employers/EmployersTable";
import ExPartners from "@root/sections/carer-info/personal-info/application-form/ex-partners/ExPartnersTable";

import HomeIcon from "@mui/icons-material/Home";
import { DocumentTable } from "@root/sections/carer-info/personal-info/application-form/documents/DocumentTable";
import { useGetApplicationFormDataQuery } from "@root/services/carer-info/personal-info/application-form/ApplicationFormAllApi";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { useRouter } from "next/router";

const PAGE_TITLE = "Application Form";

export const ApplicationTabsData = [
  "Basic Information",
  "Contact",
  "Family",
  "Reference",
  "Employers",
  "Other Info",
  "Ex-Partners",
  "Placement Preference",
  "Documents",
];

// ----------------------------------------------------------------------

ApplicationForm.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function ApplicationForm() {
  let role = "ifa";
  let router = useRouter();
  let { fosterCarerId } = router.query;
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: `/carer-info?fosterCarerId=${fosterCarerId}`,
    },
    {
      name: "Application Form",
      href: ``,
    },
  ];
  const { data, isLoading, isError }: any = useGetApplicationFormDataQuery({});
  if (isLoading) {
    return (
      <Page title={PAGE_TITLE}>
        <SkeletonFormdata />
      </Page>
    );
  }
  const applicationFormid = data?.data?.id;
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs tabsDataArray={ApplicationTabsData}>
        <BasicInformationForm
          role={role}
          disabled={role == "foster-carer" ? true : false}
          id={applicationFormid}
          data={{
            ...BasicdefaultValues,
            ...(data?.data?.basicInformation && {
              ...data?.data?.basicInformation,
              hasDisability: JSON.parse(
                data?.data?.basicInformation?.hasDisability
              ),
              hasEverConvicted: JSON.parse(
                data?.data?.basicInformation?.hasEverConvicted
              ),
              applicationFilledDate: new Date(
                data?.data?.basicInformation?.applicationFilledDate
              ),
              dateOfBirth: new Date(data?.data?.basicInformation?.dateOfBirth),
            }),
          }}
        />
        <ContactForm
          role={role}
          applicationFormid={applicationFormid}
          data={{
            ...contactDefaultValues,
            ...(data?.data?.contact && {
              ...data?.data?.contact,
            }),
          }}
          disabled={role == "foster-carer" ? true : false}
        />
        <FamilyTable role={role} applicationFormid={applicationFormid} />
        <Reference role={role} applicationFormid={applicationFormid} />
        <Employers role={role} applicationFormid={applicationFormid} />
        <OtherInfoForm
          role={role}
          data={{
            ...otherInfoDefaultValues,
            ...(data?.data?.otherInfo && {
              ...data?.data?.otherInfo,
              authorityOrAgency: data?.data?.otherInfo.authorityOrAgency
                ? "Yes"
                : "No",
              haveApplied: data?.data?.otherInfo.haveApplied ? "Yes" : "No",
            }),
          }}
          applicationFormid={applicationFormid}
          disabled={role == "foster-carer" ? true : false}
        />
        <ExPartners role={role} applicationFormid={applicationFormid} />
        <PlacementPreferenceForm
          role={role}
          applicationFormid={applicationFormid}
          data={{
            ...placementPreferenceDefaultValues,
            ...(data?.data?.placementPreference && {
              ...data?.data?.placementPreference,
            }),
          }}
          disabled={role == "foster-carer" ? true : false}
        />
        <DocumentTable applicationFormid={applicationFormid} role={role} />
      </HorizaontalTabs>
    </>
  );
}
