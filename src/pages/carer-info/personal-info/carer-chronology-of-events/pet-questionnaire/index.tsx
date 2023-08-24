// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PetQuestionnaireA from "@root/sections/carer-info/personal-info/pet-questionnaire/A/PetQuestionnaireAFrom";
import PetQuestionnaireB from "@root/sections/carer-info/personal-info/pet-questionnaire/B/PetQuestionnaireBFrom";
import PetQuestionnaireC from "@root/sections/carer-info/personal-info/pet-questionnaire/C/PetQuestionnaireCFrom";
import PetQuestionnaireD from "@root/sections/carer-info/personal-info/pet-questionnaire/D/PetQuestionnaireDFrom";
import { useGetPetQuestionnaireByIdQuery } from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";
import { useRouter } from "next/router";
import Error from "@root/components/Error";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import usePath from "@root/hooks/usePath";

const PAGE_TITLE = "Pet Questionnaire";

PetQuestionnaire.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function PetQuestionnaire() {
  const router = useRouter();
  const { petId } = router.query;

  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Pet Questionnaire List",
      href: makePath({
        path: "/carer-info/personal-info/carer-chronology-of-events",
        skipQueries: ["petId"],
      }),
    },
    {
      name: "View Pet Questionnaire",
      href: "",
    },
  ];

  const { data, isLoading, isError } = useGetPetQuestionnaireByIdQuery(petId);

  if (isError) return <Error />;

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      {isLoading ? (
        <SkeletonFormdata />
      ) : (
        <HorizaontalTabs
          tabsDataArray={[
            "Pet Questionnaire A",
            "Pet Questionnaire B",
            "Pet Questionnaire C",
            "Pet Questionnaire D",
          ]}
        >
          <PetQuestionnaireA
            disabled
            initialValueProps={data?.petQuestionnaire1}
          />
          <PetQuestionnaireB
            disabled
            initialValueProps={{
              ...data?.petQuestionnaire2,
              registeredAVet: data?.petQuestionnaire2?.registeredAVet
                ? "Yes"
                : "No",
            }}
          />
          <PetQuestionnaireC
            disabled
            initialValueProps={{
              ...data?.petQuestionnaire3,
              date: new Date(data?.petQuestionnaire3?.date),
            }}
          />
          <PetQuestionnaireD
            disabled
            initialValueProps={{
              ...data?.petQuestionnaire4,
              date1: new Date(data?.petQuestionnaire4?.date1),
              date2: new Date(data?.petQuestionnaire4?.date2),
            }}
          />
        </HorizaontalTabs>
      )}
    </Page>
  );
}
