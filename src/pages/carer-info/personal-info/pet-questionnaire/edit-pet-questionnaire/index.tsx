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
import { useRouter } from "next/router";
import {
  useGetPetQuestionnaireByIdQuery,
  usePatchPetQuestionnaireAApiMutation,
  usePatchPetQuestionnaireBApiMutation,
  usePatchPetQuestionnaireCApiMutation,
  usePatchPetQuestionnaireDApiMutation,
} from "@root/services/carer-info/personal-info/pet-questionnaire/petQuestionnaireApi";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import Error from "@root/components/Error";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Pet Questionnaire";

// ----------------------------------------------------------------------

EditPetQuestionnaire.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function EditPetQuestionnaire() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Pet Questionnaire List",
      href: makePath({
        path: "/carer-info/personal-info/pet-questionnaire",
        skipQueries: ["petId"],
      }),
    },
    {
      name: "Edit Pet Questionnaire",
      href: "",
    },
  ];

  const router = useRouter();
  const { petId } = router.query;

  const { data, isLoading, isError } = useGetPetQuestionnaireByIdQuery(petId);

  const [patchDataA] = usePatchPetQuestionnaireAApiMutation();
  const [patchDataB] = usePatchPetQuestionnaireBApiMutation();
  const [patchDataC] = usePatchPetQuestionnaireCApiMutation();
  const [patchDataD, { isSuccess }] = usePatchPetQuestionnaireDApiMutation();

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
            initialValueProps={data?.petQuestionnaire1}
            onSubmitHandler={(data: any) => patchDataA({ ...data, petId })}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
          />
          <PetQuestionnaireB
            initialValueProps={{
              ...data?.petQuestionnaire2,
              registeredAVet: data?.petQuestionnaire2?.registeredAVet
                ? "Yes"
                : "No",
            }}
            onSubmitHandler={(data: any) => patchDataB({ ...data, petId })}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
          />
          <PetQuestionnaireC
            initialValueProps={{
              ...data?.petQuestionnaire3,
              date: new Date(data?.petQuestionnaire3?.date),
            }}
            onSubmitHandler={(data: any) => patchDataC({ ...data, petId })}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
          />
          <PetQuestionnaireD
            initialValueProps={{
              ...data?.petQuestionnaire4,
              date1: new Date(data?.petQuestionnaire4?.date1),
              date2: new Date(data?.petQuestionnaire4?.date2),
            }}
            onSubmitHandler={(data: any) => patchDataD({ ...data, petId })}
            message={"Updated"}
            isError={isError}
            isSuccess={isSuccess}
          />
        </HorizaontalTabs>
      )}
    </Page>
  );
}
