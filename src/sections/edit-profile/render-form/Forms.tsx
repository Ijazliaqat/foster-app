import { lazy } from "react";
import { localFormNames } from "../layout/static-data";

const PersonalDetailsForm = lazy(
  () =>
    import(
      "../about-candidate/personal-details/personalDetailsForm/PersonalDetailForm"
    )
);
const AddressDetailsForm = lazy(
  () =>
    import(
      "../about-candidate/address-details/addressDetailsForm/AddressDetailsForm"
    )
);

const PhotoForId = lazy(
  () => import("../about-candidate/photo-for-id/PhotoForId")
);

const IdUpload = lazy(() => import("../about-candidate/id-upload/IdUpload"));
const AddReference = lazy(
  () => import("../references/add-reference/AddReference")
);

const TrainingCertificteForm = lazy(
  () => import("../training/training-certificate/TrainingCertificteForm")
);

const AdditionalTrainingDetails = lazy(
  () =>
    import("../training/additional-training-details/AdditionalTrainingDetails")
);

const WorkExperienceUnemployment = lazy(
  () =>
    import(
      "../training/work-experience-unemployment/WorkExperienceUnemployment"
    )
);

const SpecialitiesForm = lazy(
  () => import("../training/specialities/SpecialitiesForm")
);

const DBS = lazy(() => import("../background-checks/dbs/DBS"));

const WriteToWork = lazy(
  () => import("../background-checks/right-to-work/WriteToWork")
);

const NextOfKin = lazy(
  () => import("../other-information/next-of-kin/NextOfKin")
);

const ContactPrefernce = lazy(
  () => import("../other-information/contact-perfernce/ContactPrefernce")
);

const EmplymentStatus = lazy(
  () => import("../other-information/employment-status/EmplymentStatus")
);

const PayForm = lazy(
  () => import("../other-information/employment-status/pay-form/PayForm")
);

const OpportunityDeclaration = lazy(
  () =>
    import(
      "../other-information/opportunity-declaration/OpportunityDeclaration"
    )
);

const AdditionalDocs = lazy(
  () => import("../other-information/additional-docs/AdditionalDocs")
);

const BankDetails = lazy(
  () => import("../other-information/bank-details/BankDetails")
);

const Immunisation = lazy(
  () => import("../medical-history/immunisation/Immunisation")
);

const MedicalQuestionnaire = lazy(
  () => import("../medical-history/medical-questionnaire/MedicalQuestionnaire")
);

const AddDeclaration = lazy(
  () => import("../declaration/add-declaration/AddDeclaration")
);

const Forms = {
  personalInfo: PersonalDetailsForm,
  addressdetail: AddressDetailsForm,
  badgeId: PhotoForId,
  passport: IdUpload,
  reference: AddReference,
  trainingCertificate: TrainingCertificteForm,
  trainingDetail: AdditionalTrainingDetails,
  workExperience: WorkExperienceUnemployment,
  specialities: SpecialitiesForm,
  dbs: DBS,
  workRight: WriteToWork,
  nextOfKim: NextOfKin,
  contactPreferance: ContactPrefernce,
  employmentStatus: EmplymentStatus,
  pay: PayForm,
  opportunityDeclaration: OpportunityDeclaration,
  documents: AdditionalDocs,
  bankDetail: BankDetails,
  immunisation: Immunisation,
  questionair: MedicalQuestionnaire,
  declaration: AddDeclaration,
};

// @ts-ignore
export const RForm: any = (props) => {
  const Com =
    // @ts-ignore
    Forms[localFormNames[localFormNames.indexOf(props.name) + 1]];
  return <Com {...props} />;
};
