import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import SignaturePad from "@root/components/SignaturePad";
import DaysHourPicker from "./customPicker";
import * as Yup from "yup";

export const initialValues = {
  fosterCarerName1: "john doe",
  fosterCarerName2: "sarah doe",
  fosterCarerDOB1: new Date(),
  fosterCarerDOB2: new Date(),
  fosterCarerAddress: "lorem ipsum dolor sit amet",
  referenceNumber: "1234er4xwq2",
  supervisingSocialWorker: "teri dactyl",
  under18Name1: "carter",
  under18Name2: "ali carter",
  under18Name3: "judd trump",
  under18DOB1: new Date(),
  under18DOB2: new Date(),
  under18DOB3: new Date(),
  under18Relationship1: "daughter",
  under18Relationship2: "son",
  under18Relationship3: "daughter",
  adultName1: "john doe",
  adultName2: "john doe",
  adultDob1: new Date(),
  adultDob2: new Date(),
  RelationshipCarer1: "father",
  RelationshipCarer2: "mother",
  currentTermsOfApproval: "some text here",
  skillsLevelOrBanding: "some text here",
  carerEthnicity1: "white and asian",
  carerReligion1: "islam",
  carerLanguage1: "urdu",
  carerEmploymentDetails1: "days 100 and hours 20",
  carerEthnicity2: "white and asian",
  carerReligion2: "islam",
  carerLanguage2: "urdu",
  carerEmploymentDetails2: "days 100 and hours 20",
  childMinding: "Yes",
  skillsLevelOrBandingArrangements: "some text here",
  childPlacementName1: "sarah doe",
  childPlacementDob1: new Date(),
  childPlacementEthnicity1: "white and asian",
  childPlacementType1: "placement type",
  childPlacementDatePlaced1: new Date(),
  childPlacementAuthority1: "supervising social worker",
  childPlacementName2: "sarah doe",
  childPlacementDob2: new Date(),
  childPlacementEthnicity2: "white and asian",
  childPlacementType2: "placement type",
  childPlacementDatePlaced2: new Date(),
  childPlacementAuthority2: "supervising social worker",
  childPlacementName3: "sarah doe",
  childPlacementDob3: new Date(),
  childPlacementEthnicity3: "white and asian",
  childPlacementType3: "placement type",
  childPlacementDatePlaced3: new Date(),
  childPlacementAuthority3: "supervising social worker",
  childPlacementEndedName1: "john doe",
  childPlacementEndedDob1: new Date(),
  childPlacementEndedEthnicity1: "white and asian",
  childPlacementEndedType1: "john doe",
  childPlacementEndedDatePlaced1: new Date(),
  childPlacementEndedDatePlacedEnded1: new Date(),
  childPlacementEndedAuthority1: "supervising social worker",
  childPlacementEndedReasonPlacement1: "some reason",

  childPlacementEndedName2: "john doe",
  childPlacementEndedDob2: new Date(),
  childPlacementEndedEthnicity2: "white and asian",
  childPlacementEndedType2: "john doe",
  childPlacementEndedDatePlaced2: new Date(),
  childPlacementEndedDatePlacedEnded2: new Date(),
  childPlacementEndedAuthority2: "supervising social worker",
  childPlacementEndedReasonPlacement2: "some reason",

  childPlacementEndedName3: "john doe",
  childPlacementEndedDob3: new Date(),
  childPlacementEndedEthnicity3: "white and asian",
  childPlacementEndedType3: "john doe",
  childPlacementEndedDatePlaced3: new Date(),
  childPlacementEndedDatePlacedEnded3: new Date(),
  childPlacementEndedAuthority3: "supervising social worker",
  childPlacementEndedReasonPlacement3: "some reason",
  viewFRDForm: "Yes",
  whenUndertakingReview: "some reason",
  dateOfInitialApproval: new Date(),
  dateOfLastFosteringPanel: new Date(),
  dateOfLastReviewMeeting: new Date(),
  dateOfThisReviewMeeting: new Date(),
  dateOfLastReviewWasCompleted: new Date(),
  reasonForThisReview: "initial review",

  disclosureHouseholdingName1: "john doe",
  disclosureHouseholdingName2: "john doe",
  disclosureHouseholdingName3: "john doe",
  disclosureHouseholdingName4: "john doe",

  disclosureHouseholdingDate1: new Date(),
  disclosureHouseholdingDate2: new Date(),
  disclosureHouseholdingDate3: new Date(),
  disclosureHouseholdingDate4: new Date(),

  disclosureHouseholdingDetail: "some description",

  disclosureNonHouseholdingName1: "john doe",
  disclosureNonHouseholdingName2: "john doe",
  disclosureNonHouseholdingName3: "john doe",
  disclosureNonHouseholdingName4: "john doe",

  disclosureNonHouseholdingDate1: new Date(),
  disclosureNonHouseholdingDate2: new Date(),
  disclosureNonHouseholdingDate3: new Date(),
  disclosureNonHouseholdingDate4: new Date(),
  disclosureNonHouseholdingDetail: "some description",

  localAuthorityHouseholdingName1: "john doe",
  localAuthorityHouseholdingName2: "john doe",
  localAuthorityHouseholdingName3: "john doe",
  localAuthorityHouseholdingName4: "john doe",

  localAuthorityHouseholdingDate1: new Date(),
  localAuthorityHouseholdingDate2: new Date(),
  localAuthorityHouseholdingDate3: new Date(),
  localAuthorityHouseholdingDate4: new Date(),
  localAuthorityHouseholdingDetail: "some description",

  fosterCarerLastMedicalCheck1: new Date(),
  fosterCarerMedicaladvisor1: "some description",
  fosterCarerQuestionnaire1: new Date(),
  fosterCarerLastMedicalCheck2: new Date(),
  fosterCarerMedicaladvisor2: "some description",
  fosterCarerQuestionnaire2: new Date(),

  medicalCheckDetail: "some description",

  checkWithName1: "hello world",
  checkWithName2: "hello world",
  checkWithName3: "hello world",
  checkWithName4: "hello world",

  dateofCheck1: new Date(),
  dateofCheck2: new Date(),
  dateofCheck3: new Date(),
  dateofCheck4: new Date(),

  otherCheckOrReports: "some description",
  issueArisingFromOtherCheck: "some description",
  dateOfHealthAndSafetyCheck: "some description",
  dateOfUnannouncedInspectionVisit: "some description",
  anyActionRequiredUnannouncedVisit: "some description",
  planInCaseOfFire: "some description",
  relationSatisfactory: "some description",
  homeSafetyActionWithTargetCompletionDate: "some description",
  dateOfMostRecentPolicy: new Date(),
  wasThisReviewedAfterLastestPlacement: "Yes",
  anyActionRequiredCaringPolicy: "Yes",
  outStandingActionWithTargetCompleted: "some description",

  petsInTheFosteringHousehold: "Yes",
  petJoinedInTheReviewPeriod: "Yes",
  assessmentCompletedOnAllPetsInHousehold: "Yes",
  assessmentCompletedOnAllPetsInHouseholdComment: "Yes",
  smokerInFosteringHousehold: "Yes",
  smokingAgreementBeenCompleted: "Yes",
  concernDetails: "some description",
  dateOfFosterCareAgreement: new Date(),
  dateOfSupervisionAgreement: new Date(),
  toCarer1: new Date(),
  toCarer2: new Date(),
  complySupervisingAgreement: "Yes",
  workerOrPeriodsUnallocated: "some description",
  allegationReviewPeriodDate1: new Date(),
  allegationReviewPeriodDate2: new Date(),
  allegationReviewPeriodDetail1: "some description",
  allegationReviewPeriodDetail2: "some description",
  allegationSummaryOfOutcome1: "some description",
  allegationSummaryOfOutcome2: "some description",
  complaintsReviewPeriodDate1: new Date(),
  complaintsReviewPeriodDate2: new Date(),
  complaintsReviewPeriodDetail1: "some description",
  complaintsReviewPeriodDetail2: "some description",
  complaintsSummaryOfOutcome1: "some description",
  complaintsSummaryOfOutcome2: "some description",
  TDSAchieved: "Yes",
  dateSignedOff: new Date(),
  completionDate: new Date(),
  saferCaringTraining: "Yes",
  outstandingActionsCompletionDate: new Date(),
  personalDevelopmentPlan: "Yes",
  fosteringHistoryCarers: "some description",
  recommendationOfLastFosterhomeReview: "some description",
  exampleToShowCarerListens: "some description",
  exampleToShowCarerProvides: "some description",
  exampleToShowCarerCompliesWithPolicies: "some description",
  exampleToShowCarerWithSupervisingSocialWorker: "some description",
  exampleToShowCarerWithProfessional: "some description",
  exampleToShowCarerOfBirthFamilies: "some description",
  exampleToShowCarerPromotesHealthyPhysicalCare: "some description",
  exampleToShowCarerPromotesPositiveBehaviour: "some description",
  exampleToShowCarerCommuicateWithChildren: "some description",
  fosterCarerRecordKeeping: "some description",
  exampleToShowFosterCarerSupportChildrenAndYoungPeople: "some description",
  exampleToShowFosterCarerEncourageInPlay: "some description",
  fosterCarerSpecialEducationalNeeds: "some description",
  unplannedPlacementEndingsInReviewPeriod: "some description",
  childrenAndYoungPeopleFeelingSafe: "some description",
  fosterCarerManagesThePersonalImpact: "some description",
  fosterCarerAskedToCompleteFRDForm: "some description",
  fosterCarerDemonstratedCommitment1: "some description",
  fosterCarerDemonstratedCommitment2: "some description",
  IdentifyTheStrengthsAndLimitations: "some description",
  currentTermsOfApprovalAppropriate: "some description",
  recommendationRegarding: "some description",
  signature: new Date(),
  label: new Date(),
};

export const validationSchema = {
  fosterCarerName1: Yup.string().required("Field is required"),
  fosterCarerName2: Yup.string().required("Field is required"),
  fosterCarerDOB1: Yup.string().required("Field is required"),
  fosterCarerDOB2: Yup.string().required("Field is required"),
  fosterCarerAddress: Yup.string().required("Field is required"),
  referenceNumber: Yup.string().required("Field is required"),
  supervisingSocialWorker: Yup.string().required("Field is required"),
  under18Name1: Yup.string().required("Field is required"),
  under18Name2: Yup.string().required("Field is required"),
  under18Name3: Yup.string().required("Field is required"),
  under18DOB1: Yup.string().required("Field is required"),
  under18DOB2: Yup.string().required("Field is required"),
  under18DOB3: Yup.string().required("Field is required"),
  under18Relationship1: Yup.string().required("Field is required"),
  under18Relationship2: Yup.string().required("Field is required"),
  under18Relationship3: Yup.string().required("Field is required"),
  adultName1: Yup.string().required("Field is required"),
  adultName2: Yup.string().required("Field is required"),
  adultDob1: Yup.string().required("Field is required"),
  adultDob2: Yup.string().required("Field is required"),
  RelationshipCarer1: Yup.string().required("Field is required"),
  RelationshipCarer2: Yup.string().required("Field is required"),
  currentTermsOfApproval: Yup.string().required("Field is required"),
  skillsLevelOrBanding: Yup.string().required("Field is required"),
  carerEthnicity1: Yup.string().required("Field is required"),
  carerReligion1: Yup.string().required("Field is required"),
  carerLanguage1: Yup.string().required("Field is required"),
  carerEmploymentDetails1: Yup.string().required("Field is required"),
  carerEthnicity2: Yup.string().required("Field is required"),
  carerReligion2: Yup.string().required("Field is required"),
  carerLanguage2: Yup.string().required("Field is required"),
  carerEmploymentDetails2: Yup.string().required("Field is required"),
  childMinding: Yup.string().required("Field is required"),
  skillsLevelOrBandingArrangements: Yup.string().required("Field is required"),
  childPlacementName1: Yup.string().required("Field is required"),
  childPlacementDob1: Yup.string().required("Field is required"),
  childPlacementEthnicity1: Yup.string().required("Field is required"),
  childPlacementType1: Yup.string().required("Field is required"),
  childPlacementDatePlaced1: Yup.string().required("Field is required"),
  childPlacementAuthority1: Yup.string().required("Field is required"),
  childPlacementName2: Yup.string().required("Field is required"),
  childPlacementDob2: Yup.string().required("Field is required"),
  childPlacementEthnicity2: Yup.string().required("Field is required"),
  childPlacementType2: Yup.string().required("Field is required"),
  childPlacementDatePlaced2: Yup.string().required("Field is required"),
  childPlacementAuthority2: Yup.string().required("Field is required"),
  childPlacementName3: Yup.string().required("Field is required"),
  childPlacementDob3: Yup.string().required("Field is required"),
  childPlacementEthnicity3: Yup.string().required("Field is required"),
  childPlacementType3: Yup.string().required("Field is required"),
  childPlacementDatePlaced3: Yup.string().required("Field is required"),
  childPlacementAuthority3: Yup.string().required("Field is required"),
  childPlacementEndedName1: Yup.string().required("Field is required"),
  childPlacementEndedDob1: Yup.string().required("Field is required"),
  childPlacementEndedEthnicity1: Yup.string().required("Field is required"),
  childPlacementEndedType1: Yup.string().required("Field is required"),
  childPlacementEndedDatePlaced1: Yup.string().required("Field is required"),
  childPlacementEndedDatePlacedEnded1:
    Yup.string().required("Field is required"),
  childPlacementEndedAuthority1: Yup.string().required("Field is required"),
  childPlacementEndedReasonPlacement1:
    Yup.string().required("Field is required"),

  childPlacementEndedName2: Yup.string().required("Field is required"),
  childPlacementEndedDob2: Yup.string().required("Field is required"),
  childPlacementEndedEthnicity2: Yup.string().required("Field is required"),
  childPlacementEndedType2: Yup.string().required("Field is required"),
  childPlacementEndedDatePlaced2: Yup.string().required("Field is required"),
  childPlacementEndedDatePlacedEnded2:
    Yup.string().required("Field is required"),
  childPlacementEndedAuthority2: Yup.string().required("Field is required"),
  childPlacementEndedReasonPlacement2:
    Yup.string().required("Field is required"),

  childPlacementEndedName3: Yup.string().required("Field is required"),
  childPlacementEndedDob3: Yup.string().required("Field is required"),
  childPlacementEndedEthnicity3: Yup.string().required("Field is required"),
  childPlacementEndedType3: Yup.string().required("Field is required"),
  childPlacementEndedDatePlaced3: Yup.string().required("Field is required"),
  childPlacementEndedDatePlacedEnded3:
    Yup.string().required("Field is required"),
  childPlacementEndedAuthority3: Yup.string().required("Field is required"),
  childPlacementEndedReasonPlacement3:
    Yup.string().required("Field is required"),
  viewFRDForm: Yup.string().required("Field is required"),
  whenUndertakingReview: Yup.string().required("Field is required"),
  dateOfInitialApproval: Yup.string().required("Field is required"),
  dateOfLastFosteringPanel: Yup.string().required("Field is required"),
  dateOfLastReviewMeeting: Yup.string().required("Field is required"),
  dateOfThisReviewMeeting: Yup.string().required("Field is required"),
  dateOfLastReviewWasCompleted: Yup.string().required("Field is required"),
  reasonForThisReview: Yup.string().required("Field is required"),

  disclosureHouseholdingName1: Yup.string().required("Field is required"),
  disclosureHouseholdingName2: Yup.string().required("Field is required"),
  disclosureHouseholdingName3: Yup.string().required("Field is required"),
  disclosureHouseholdingName4: Yup.string().required("Field is required"),

  disclosureHouseholdingDate1: Yup.string().required("Field is required"),
  disclosureHouseholdingDate2: Yup.string().required("Field is required"),
  disclosureHouseholdingDate3: Yup.string().required("Field is required"),
  disclosureHouseholdingDate4: Yup.string().required("Field is required"),

  disclosureHouseholdingDetail: Yup.string().required("Field is required"),

  disclosureNonHouseholdingName1: Yup.string().required("Field is required"),
  disclosureNonHouseholdingName2: Yup.string().required("Field is required"),
  disclosureNonHouseholdingName3: Yup.string().required("Field is required"),
  disclosureNonHouseholdingName4: Yup.string().required("Field is required"),

  disclosureNonHouseholdingDate1: Yup.string().required("Field is required"),
  disclosureNonHouseholdingDate2: Yup.string().required("Field is required"),
  disclosureNonHouseholdingDate3: Yup.string().required("Field is required"),
  disclosureNonHouseholdingDate4: Yup.string().required("Field is required"),
  disclosureNonHouseholdingDetail: Yup.string().required("Field is required"),

  localAuthorityHouseholdingName1: Yup.string().required("Field is required"),
  localAuthorityHouseholdingName2: Yup.string().required("Field is required"),
  localAuthorityHouseholdingName3: Yup.string().required("Field is required"),
  localAuthorityHouseholdingName4: Yup.string().required("Field is required"),

  localAuthorityHouseholdingDate1: Yup.string().required("Field is required"),
  localAuthorityHouseholdingDate2: Yup.string().required("Field is required"),
  localAuthorityHouseholdingDate3: Yup.string().required("Field is required"),
  localAuthorityHouseholdingDate4: Yup.string().required("Field is required"),
  localAuthorityHouseholdingDetail: Yup.string().required("Field is required"),

  fosterCarerLastMedicalCheck1: Yup.string().required("Field is required"),
  fosterCarerMedicaladvisor1: Yup.string().required("Field is required"),
  fosterCarerQuestionnaire1: Yup.string().required("Field is required"),
  fosterCarerLastMedicalCheck2: Yup.string().required("Field is required"),
  fosterCarerMedicaladvisor2: Yup.string().required("Field is required"),
  fosterCarerQuestionnaire2: Yup.string().required("Field is required"),

  medicalCheckDetail: Yup.string().required("Field is required"),

  checkWithName1: Yup.string().required("Field is required"),
  checkWithName2: Yup.string().required("Field is required"),
  checkWithName3: Yup.string().required("Field is required"),
  checkWithName4: Yup.string().required("Field is required"),

  dateofCheck1: Yup.string().required("Field is required"),
  dateofCheck2: Yup.string().required("Field is required"),
  dateofCheck3: Yup.string().required("Field is required"),
  dateofCheck4: Yup.string().required("Field is required"),

  otherCheckOrReports: Yup.string().required("Field is required"),
  issueArisingFromOtherCheck: Yup.string().required("Field is required"),
  dateOfHealthAndSafetyCheck: Yup.string().required("Field is required"),
  dateOfUnannouncedInspectionVisit: Yup.string().required("Field is required"),
  anyActionRequiredUnannouncedVisit: Yup.string().required("Field is required"),
  planInCaseOfFire: Yup.string().required("Field is required"),
  relationSatisfactory: Yup.string().required("Field is required"),
  homeSafetyActionWithTargetCompletionDate:
    Yup.string().required("Field is required"),
  dateOfMostRecentPolicy: Yup.string().required("Field is required"),
  wasThisReviewedAfterLastestPlacement:
    Yup.string().required("Field is required"),
  anyActionRequiredCaringPolicy: Yup.string().required("Field is required"),
  outStandingActionWithTargetCompleted:
    Yup.string().required("Field is required"),

  petsInTheFosteringHousehold: Yup.string().required("Field is required"),
  petJoinedInTheReviewPeriod: Yup.string().required("Field is required"),
  assessmentCompletedOnAllPetsInHousehold:
    Yup.string().required("Field is required"),
  assessmentCompletedOnAllPetsInHouseholdComment:
    Yup.string().required("Field is required"),
  smokerInFosteringHousehold: Yup.string().required("Field is required"),
  smokingAgreementBeenCompleted: Yup.string().required("Field is required"),
  concernDetails: Yup.string().required("Field is required"),
  dateOfFosterCareAgreement: Yup.string().required("Field is required"),
  dateOfSupervisionAgreement: Yup.string().required("Field is required"),
  toCarer1: Yup.string().required("Field is required"),
  toCarer2: Yup.string().required("Field is required"),
  complySupervisingAgreement: Yup.string().required("Field is required"),
  workerOrPeriodsUnallocated: Yup.string().required("Field is required"),
  allegationReviewPeriodDate1: Yup.string().required("Field is required"),
  allegationReviewPeriodDate2: Yup.string().required("Field is required"),
  allegationReviewPeriodDetail1: Yup.string().required("Field is required"),
  allegationReviewPeriodDetail2: Yup.string().required("Field is required"),
  allegationSummaryOfOutcome1: Yup.string().required("Field is required"),
  allegationSummaryOfOutcome2: Yup.string().required("Field is required"),
  complaintsReviewPeriodDate1: Yup.string().required("Field is required"),
  complaintsReviewPeriodDate2: Yup.string().required("Field is required"),
  complaintsReviewPeriodDetail1: Yup.string().required("Field is required"),
  complaintsReviewPeriodDetail2: Yup.string().required("Field is required"),
  complaintsSummaryOfOutcome1: Yup.string().required("Field is required"),
  complaintsSummaryOfOutcome2: Yup.string().required("Field is required"),
  TDSAchieved: Yup.string().required("Field is required"),
  dateSignedOff: Yup.string().required("Field is required"),
  completionDate: Yup.date().required("Field is required"),
  saferCaringTraining: Yup.string().required("Field is required"),
  outstandingActionsCompletionDate: Yup.date().required("Field is required"),
  personalDevelopmentPlan: Yup.string().required("Field is required"),
  fosteringHistoryCarers: Yup.string().required("Field is required"),
  recommendationOfLastFosterhomeReview:
    Yup.string().required("Field is required"),
  exampleToShowCarerListens: Yup.string().required("Field is required"),
  exampleToShowCarerProvides: Yup.string().required("Field is required"),
  exampleToShowCarerCompliesWithPolicies:
    Yup.string().required("Field is required"),
  exampleToShowCarerWithSupervisingSocialWorker:
    Yup.string().required("Field is required"),
  exampleToShowCarerWithProfessional:
    Yup.string().required("Field is required"),
  exampleToShowCarerOfBirthFamilies: Yup.string().required("Field is required"),
  exampleToShowCarerPromotesHealthyPhysicalCare:
    Yup.string().required("Field is required"),
  exampleToShowCarerPromotesPositiveBehaviour:
    Yup.string().required("Field is required"),
  exampleToShowCarerCommuicateWithChildren:
    Yup.string().required("Field is required"),
  fosterCarerRecordKeeping: Yup.string().required("Field is required"),
  exampleToShowFosterCarerSupportChildrenAndYoungPeople:
    Yup.string().required("Field is required"),
  exampleToShowFosterCarerEncourageInPlay:
    Yup.string().required("Field is required"),
  fosterCarerSpecialEducationalNeeds:
    Yup.string().required("Field is required"),
  unplannedPlacementEndingsInReviewPeriod:
    Yup.string().required("Field is required"),
  childrenAndYoungPeopleFeelingSafe: Yup.string().required("Field is required"),
  fosterCarerManagesThePersonalImpact:
    Yup.string().required("Field is required"),
  fosterCarerAskedToCompleteFRDForm: Yup.string().required("Field is required"),
  fosterCarerDemonstratedCommitment1:
    Yup.string().required("Field is required"),
  fosterCarerDemonstratedCommitment2:
    Yup.string().required("Field is required"),
  IdentifyTheStrengthsAndLimitations:
    Yup.string().required("Field is required"),
  currentTermsOfApprovalAppropriate: Yup.string().required("Field is required"),
  recommendationRegarding: Yup.string().required("Field is required"),
  signature: Yup.string().required("Field is required"),
  label: Yup.string().required("Field is required"),
};

export const FRAFormData = [
  {
    title: "Foster Carers",
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: "Name *",
        subFields: [
          {
            otherOptions: {
              name: "fosterCarerName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "fosterCarerName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Date od Birth (age) *",
        subFields: [
          {
            otherOptions: {
              name: "fosterCarerDOB1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "fosterCarerDOB2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Address *",
        subFields: [
          {
            otherOptions: {
              name: "fosterCarerAddress",
              fullWidth: true,
              multiline: true,
              height: "initial",
              minRows: 3,
            },
            component: RHFTextField,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Reference Number *",
      name: "referenceNumber",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Supervising social worker *",
      name: "supervisingSocialWorker",
      fullWidth: true,
      select: true,
      options: [{ value: "teri dactyl", label: "teri dactyl" }],
    },
    component: RHFSelect,
  },
  {
    title: "Foster carer’s own children (under 18) in the household",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 4,
        title: "Name",
        subFields: [
          {
            otherOptions: {
              name: "under18Name1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "under18Name2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "under18Name3",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Date od Birth (age)",
        subFields: [
          {
            otherOptions: {
              name: "under18DOB1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "under18DOB2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "under18DOB3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Relationship to carer(s)",
        subFields: [
          {
            otherOptions: {
              name: "under18Relationship1",
              fullWidth: true,
              select: true,
              options: [{ value: "daughter", label: "daughter" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "under18Relationship2",
              fullWidth: true,
              select: true,
              options: [{ value: "son", label: "son" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "under18Relationship3",
              fullWidth: true,
              select: true,
              options: [{ value: "daughter", label: "daughter" }],
            },
            component: RHFSelect,
          },
        ],
      },
    ],
  },
  {
    title: "Other adults in the household",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 4,
        title: "Name",
        subFields: [
          {
            otherOptions: {
              name: "adultName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "adultName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Date od Birth (age)",
        subFields: [
          {
            otherOptions: {
              name: "adultDob1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "adultDob2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Relationship to carer(s)",
        subFields: [
          {
            otherOptions: {
              name: "RelationshipCarer1",
              fullWidth: true,
              select: true,
              options: [{ value: "father", label: "father" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "RelationshipCarer2",
              fullWidth: true,
              select: true,
              options: [{ value: "mother", label: "mother" }],
            },
            component: RHFSelect,
          },
        ],
      },
    ],
  },
  {
    head: "Term of approval",
  },
  {
    otherOptions: {
      label: "Current terms of approval *",
      name: "currentTermsOfApproval",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title:
      "Information on skills level or banding of carer/s where these exist",
    notice:
      "Provide any relevant information pertaining to the skills level or banding arrangements in your fostering service if appropriate in the box below.",
    otherOptions: {
      name: "skillsLevelOrBanding",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Key information",
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: "Information",
        subFields: [
          {
            head: "Ethnicity *",
          },
          {
            head: "Religion(practising/non-practising) *",
          },
          {
            head: "Language(s) spoken *",
          },
          {
            head: "Employment details (days and hours worked) *",
          },
        ],
      },
      {
        gridLength: 4,
        title: "Carer 1",
        subFields: [
          {
            otherOptions: {
              name: "carerEthnicity1",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerReligion1",
              fullWidth: true,
              select: true,
              options: [{ value: "islam", label: "islam" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerLanguage1",
              fullWidth: true,
              select: true,
              options: [{ value: "urdu", label: "urdu" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerEmploymentDetails1",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "days 100 and hours 20",
                  label: "days 100 and hours 20",
                },
              ],
            },
            component: DaysHourPicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Carer 2",
        subFields: [
          {
            otherOptions: {
              name: "carerEthnicity2",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerReligion2",
              fullWidth: true,
              select: true,
              options: [{ value: "islam", label: "islam" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerLanguage2",
              fullWidth: true,
              select: true,
              options: [{ value: "urdu", label: "urdu" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "carerEmploymentDetails2",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "days 100 and hours 20",
                  label: "days 100 and hours 20",
                },
              ],
            },
            component: DaysHourPicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    title: "Are the foster carer/s child-minding?",
    otherOptions: {
      name: "childMinding",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "Provide any relevant information pertaining to the skills level or banding arrangements in your fostering service if appropriate in the box below.",
    otherOptions: {
      name: "skillsLevelOrBandingArrangements",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Children currently in placement",
    gridLength: 12,
    addNew: true,
    isColumn: true,
    formFields: [
      {
        gridLength: 3,
        hideTitle: true,
        subFields: [
          {
            head: "Name *",
            info: "If your service requires initials not names, amend accordingly",
          },
          {
            head: "Date of birth (age) *",
          },
          {
            head: "Ethnicty *",
          },
          {
            head: "Placement type *",
          },
          {
            head: "Date Placed",
          },
          {
            head: "Placing authority (if appropriate)",
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 1",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementName1",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementDob1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEthnicity1",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementType1",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementDatePlaced1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementAuthority1",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 2",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementName2",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementDob2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEthnicity2",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementType2",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementDatePlaced2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementAuthority2",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 3",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementName3",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementDob3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEthnicity3",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementType3",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementDatePlaced3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementAuthority3",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
        ],
      },
    ],
  },
  {
    title: "Placements that ended since last review",
    gridLength: 12,
    addNew: true,
    isColumn: true,
    formFields: [
      {
        gridLength: 3,
        hideTitle: true,
        subFields: [
          {
            head: "Name *",
            info: "If your service requires initials not names, amend accordingly",
          },
          {
            head: "Date of birth (age) *",
          },
          {
            head: "Ethnicty *",
          },
          {
            head: "Placement type *",
          },
          {
            head: "Date Placed",
          },
          {
            head: "Date Placement ended",
          },
          {
            head: "Placing authority (if appropriate)",
          },
          {
            head: "Reason placement ended",
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 1",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementEndedName1",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDob1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedEthnicity1",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedType1",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlaced1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlacedEnded1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedAuthority1",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedReasonPlacement1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: "initial",
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 2",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementEndedName2",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDob2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedEthnicity2",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedType2",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlaced2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlacedEnded2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedAuthority2",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedReasonPlacement2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: "initial",
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 3,
        title: "Child 3",
        subFields: [
          {
            otherOptions: {
              name: "childPlacementEndedName3",
              fullWidth: true,
              height: "84px",
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDob3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedEthnicity3",
              fullWidth: true,
              select: true,
              options: [{ value: "white and asian", label: "white and asian" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedType3",
              fullWidth: true,
              select: true,
              options: [{ value: "placement type", label: "placement type" }],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlaced3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedDatePlacedEnded3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "childPlacementEndedAuthority3",
              fullWidth: true,
              select: true,
              options: [
                {
                  value: "supervising social worker",
                  label: "supervising social worker",
                },
              ],
            },
            component: RHFSelect,
          },
          {
            otherOptions: {
              name: "childPlacementEndedReasonPlacement3",
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: "initial",
            },
            component: RHFTextField,
          },
        ],
      },
    ],
  },
  {
    head: "Children currently in placement",
    gridLength: 12,
  },
  {
    gridLength: 12,
    title:
      "Are foster children’s views (Form FR-D) provided for all these children (subject to age and understanding)?",
    otherOptions: {
      name: "viewFRDForm",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers (subject to age and understanding), and the views of the placing authority.",
    otherOptions: {
      name: "whenUndertakingReview",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Fostering review history",
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        title: "Name",
        subFields: [
          {
            head: "Date of initial approval",
          },
          {
            head: "Date of last fostering panel",
          },
          {
            head: "Date of last review meeting",
          },
          {
            head: "Date of this review meeting",
          },
          {
            head: "Date of last review was completed",
          },
          {
            head: "Reason for this review",
          },
        ],
      },
      {
        gridLength: 6,
        title: "Date",
        subFields: [
          {
            otherOptions: {
              name: "dateOfInitialApproval",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateOfLastFosteringPanel",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateOfLastReviewMeeting",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateOfThisReviewMeeting",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateOfLastReviewWasCompleted",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "reasonForThisReview",
              fullWidth: true,
              select: true,
              options: [{ label: "initial review", value: "initial review" }],
            },
            component: RHFSelect,
          },
        ],
      },
    ],
  },
  {
    title:
      "Disclosure and Barring checks (foster carers/adult household members)",
    notice:
      "There is no legal requirement to update DBS checks after approval, but fostering services will have their own policies regarding the updating of these checks.",
    subText:
      "Detail the policy requirements of your fostering service either here or in the box underneath",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 6,
        title: "Name",
        subFields: [
          {
            otherOptions: {
              name: "disclosureHouseholdingName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingName3",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingName4",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 6,
        title: "Date of check",
        subFields: [
          {
            otherOptions: {
              name: "disclosureHouseholdingDate1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingDate2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingDate3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureHouseholdingDate4",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Details",
      name: "disclosureHouseholdingDetail",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Disclosure and Barring Service checks (non-household members)",
    notice:
      "There is no legal requirement to undertake DBS checks on non-household members but fostering services will have their own policies regarding this issue",
    subText:
      "Detail the policy requirements of your fostering service either here or in the box underneath",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 6,
        title: "Name",
        subFields: [
          {
            otherOptions: {
              name: "disclosureNonHouseholdingName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingName3",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingName4",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 6,
        title: "Date of check",
        subFields: [
          {
            otherOptions: {
              name: "disclosureNonHouseholdingDate1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingDate2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingDate3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "disclosureNonHouseholdingDate4",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Details",
      name: "disclosureNonHouseholdingDetail",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Local authority checks (foster carers/adult household members)",
    notice:
      "There is no legal requirement to update local authority checks after approval, but fostering services will have their own policies regarding the updating of these checks.",
    subText:
      "Detail the policy requirements of your fostering service either here or in the box below",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 6,
        title: "Name",
        subFields: [
          {
            otherOptions: {
              name: "localAuthorityHouseholdingName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingName3",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingName4",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 6,
        title: "Date of check",
        subFields: [
          {
            otherOptions: {
              name: "localAuthorityHouseholdingDate1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingDate2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingDate3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "localAuthorityHouseholdingDate4",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Details",
      name: "localAuthorityHouseholdingDetail",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Medical checks",
    notice:
      "There is no legal requirement to update medical checks after approval, or to use health questionnaires, but fostering services will have their own policies regarding this matter",
    subText:
      "Detail the policy requirements of your fostering service either here or in the box below",
    gridLength: 12,
    formFields: [
      {
        title: "Foster carer 1",
        subFields: [
          {
            head: "Date of last medical check",
          },
          {
            otherOptions: {
              name: "fosterCarerLastMedicalCheck1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            head: "Medical advisor comments",
          },
          {
            otherOptions: {
              name: "fosterCarerMedicaladvisor1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            head: "Date health questionnaire completed",
          },
          {
            otherOptions: {
              name: "fosterCarerQuestionnaire1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        title: "Foster carer 2",
        subFields: [
          {
            head: "Date of last medical check",
          },
          {
            otherOptions: {
              name: "fosterCarerLastMedicalCheck2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            head: "Medical advisor comments",
          },
          {
            otherOptions: {
              name: "fosterCarerMedicaladvisor2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            head: "Date health questionnaire completed",
          },
          {
            otherOptions: {
              name: "fosterCarerQuestionnaire2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Details",
      name: "medicalCheckDetail",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },

  {
    title: "Other checks or reports",
    notice:
      "Fostering services will have policies about what checks need to be completed at review stage and might include checks with health visitors, schools and others. Where appropriate, reports might be obtained using Form FR-F1 Detail the policy requirements of your fostering service either here or in the box below",
    subText:
      "Detail the policy requirements of your fostering service either here or in the box below",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 6,
        title: "Check with",
        subFields: [
          {
            otherOptions: {
              name: "checkWithName1",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "checkWithName2",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "checkWithName3",
              fullWidth: true,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "checkWithName4",
              fullWidth: true,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 6,
        title: "Date of check",
        subFields: [
          {
            otherOptions: {
              name: "dateofCheck1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateofCheck2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateofCheck3",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "dateofCheck4",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
    ],
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Details",
      name: "otherCheckOrReports",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Comment on any issues arising from these other checks",
  },
  {
    title: "Briefly describe the foster home accommodation, including *",
    points: [
      "number of bedrooms;",
      "where each person in the household sleeps;",
      "any arrangements for room sharing;",
      "a description of the child or young person’s room.",
    ],
    subTitle:
      "Fostering Services NMS (10.1) state that the foster home must comfortably accommodate all who live there. NMS (10.2) requires the home to be adequately furnished and decorated, clean and hygienic. Avoidable hazards should be removed (NMS 10.3). NMS (10.6) notes that unless specifically agreed otherwise, children over the age of three should have their own bedroom [TSD 3.2(a)(b)].",
    gridLength: 12,
    otherOptions: {
      name: "issueArisingFromOtherCheck",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Foster home safety check/unannounced visits",
  },
  {
    subtitle:
      "NMS (10.5) states that the foster home must be inspected annually without appointment. Statutory guidance (paragraph 5.67) requires at least one unannounced visit a year by the supervising social worker. TSD 3.2(c) requires foster carers and those living in the household to know what to do in the event of fire.",
    subText:
      "Detail the policy requirements of your fostering service (including in relation to holiday homes or second homes if relevant) either here or in the box below.",
    gridLength: 12,
    title: "Date of health and safety check *",
    otherOptions: {
      name: "dateOfHealthAndSafetyCheck",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Date of unannounced inspection visit(s) since the last review *",
    otherOptions: {
      name: "dateOfUnannouncedInspectionVisit",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "Are any action required?",
    otherOptions: {
      name: "anyActionRequiredUnannouncedVisit",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Is there a plan in case of fire?",
    otherOptions: {
      name: "planInCaseOfFire",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "Are arrangements in relation to holiday homes or second homes satisfactory?",
    otherOptions: {
      name: "relationSatisfactory",
      options: ["Yes", "No", "Not available"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "Detail any outstanding home safety actions with target completion dates *",
    otherOptions: {
      name: "homeSafetyActionWithTargetCompletionDate",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Family safer caring plan",
  },
  {
    subTitle:
      "There is no legal requirement for a written family safer caring policy, but TSD 6.2(d) requires foster carers to ‘develop and maintain safer caring guidelines for you and your household’.",
  },
  {
    title: "Date of most recent policy",
    gridLength: 6,
    otherOptions: {
      name: "dateOfMostRecentPolicy",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    title: "Was this reviewed after the latest placement?",
    otherOptions: {
      name: "wasThisReviewedAfterLastestPlacement",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Any actions required?",
    otherOptions: {
      name: "anyActionRequiredCaringPolicy",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Detail any outstanding actions with target completion dates *",
    otherOptions: {
      name: "outStandingActionWithTargetCompleted",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Pets",
  },
  {
    subTitle:
      "There is no specific legal guidance about fostering and pets, but fostering services will likely have a policy that should be referred to. It is advised that where a new pet has joined the household in the review period, an assessment is made and attached.",
    gridLength: 12,
    title: "Are there pets in the fostering household?",
    otherOptions: {
      name: "petsInTheFosteringHousehold",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Have any new pets joined the household in the review period?",
    otherOptions: {
      name: "petJoinedInTheReviewPeriod",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Have assessments been completed on all pets in the household?",
    otherOptions: {
      name: "assessmentCompletedOnAllPetsInHousehold",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Have assessments been completed on all pets in the household",
    otherOptions: {
      name: "assessmentCompletedOnAllPetsInHouseholdComment",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Smoking",
  },
  {
    subTitle:
      "There is no specific legal guidance about fostering and smoking, but fostering services should have a policy that should be referred to.",
    gridLength: 12,
    title: "Are there smokers in the fostering household?",
    otherOptions: {
      name: "smokerInFosteringHousehold",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "Has a smoking agreement been completed or has smoking been addressed in safer caring plan?",
    otherOptions: {
      name: "smokingAgreementBeenCompleted",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Detail any concerns or outstanding actions",
      name: "concernDetails",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Supervision arrangements",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of foster care agreement",
      name: "dateOfFosterCareAgreement",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of supervision agreement",
      name: "dateOfSupervisionAgreement",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    head: "Date of supervising social worker visits since the last foster home review",
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "To Carer 1:",
      name: "toCarer1",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "To Carer 2:",
      name: "toCarer2",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    title: "Does this comply with the supervision agreement?",
    otherOptions: {
      name: "complySupervisingAgreement",
      options: ["Yes", "No", "Not available"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title:
      "Changes of supervising social worker or periods unallocated since last foster home review",
    otherOptions: {
      name: "workerOrPeriodsUnallocated",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Allegations in this review period",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 4,
        title: "Date",
        subFields: [
          {
            otherOptions: {
              name: "allegationReviewPeriodDate1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "allegationReviewPeriodDate2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Allegation",
        subFields: [
          {
            otherOptions: {
              name: "allegationReviewPeriodDetail1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "allegationReviewPeriodDetail2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Summary of outcome",
        subFields: [
          {
            otherOptions: {
              name: "summaryOfOutcome1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "summaryOfOutcome2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
        ],
      },
    ],
  },
  {
    title: "Complaints in this review period",
    gridLength: 12,
    addNew: true,
    formFields: [
      {
        gridLength: 4,
        title: "Date",
        subFields: [
          {
            otherOptions: {
              name: "complaintsReviewPeriodDate1",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
          {
            otherOptions: {
              name: "complaintsReviewPeriodDate2",
              fullWidth: true,
            },
            component: RHFDatePicker,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Complaints",
        subFields: [
          {
            otherOptions: {
              name: "complaintsReviewPeriodDetail1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "complaintsReviewPeriodDetail2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
        ],
      },
      {
        gridLength: 4,
        title: "Summary of outcome",
        subFields: [
          {
            otherOptions: {
              name: "summaryOfOutcome1",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
          {
            otherOptions: {
              name: "summaryOfOutcome2",
              fullWidth: true,
              multiline: true,
              minRows: 1,
            },
            component: RHFTextField,
          },
        ],
      },
    ],
  },
  {
    head: "Training, support and development standards",
  },
  {
    gridLength: 12,
    title: "Have the TSDS been achieved?",
    otherOptions: {
      name: "TDSAchieved",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 6,
    title: "If yes, what date was this signed off?",
    otherOptions: {
      name: "dateSignedOff",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "If no, detail outstanding actions and a target completion date",
    otherOptions: {
      name: "completionDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    head: "Safer caring training",
  },
  {
    gridLength: 12,
    title: "Has safer caring training been provided to all household members?",
    otherOptions: {
      name: "saferCaringTraining",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    title: "Detail outstanding actions and a target completion date",
    otherOptions: {
      name: "outstandingActionsCompletionDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    title: "Do the foster carers have written personal development plans?",
    otherOptions: {
      name: "personalDevelopmentPlan",
      options: ["Yes", "No"],
      sx: { gap: { lg: "70px", xs: "10px" } },
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    head: "HISTORICAL CONTEXT",
  },
  {
    subTitle: "Fostering history",
    title:
      "Briefly summarise the fostering history of these carers. Identify any themes or patterns that have emerged over the time that they have been fostering, Including allegations, concerns and complaints. Consider whether completing and attaching a chronology or placement record since approval might be helpful.",
    gridLength: 12,
    otherOptions: {
      name: "fosteringHistoryCarers",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "Changes since last foster home review",
  },
  {
    title:
      "Identify any changes in household composition, circumstances or significant events. This should include any changes in the carer’s employment, changes in the carer’s health, or new pets.",
    gridLength: 12,
    otherOptions: {
      name: "recommendationOfLastFosterhomeReview",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 1 – PRINCIPLES AND VALUES",
  },
  {
    subTitle: "Individual needs of children",
    title:
      "Describe and give examples to show how the carer listens to, and takes account of, the individual needs, wishes, feelings and preferences of children and young people.[1.3(b); 4.1(a)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerListens",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Equality and diversity",
    title:
      "Describe and give examples to show how the carer provides care which respects and values each child’s ethnic, religious, cultural and background; and helps young people to deal with discrimination and develop positive sexual identities. [1.2(a)(b)(c); 5.7(b)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerProvides",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Confidentiality",
    title:
      "Describe and give examples to show how the carer complies with service confidentiality policies, including an understanding of the limits of confidentiality [1.4(a)(b)(c)]. This should include maintaining appropriate confidentiality when communicating with the carer’s own family and friends. [4.3(c)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerCompliesWithPolicies",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 2 – ROLE AS A FOSTER CARER",
  },
  {
    subTitle: "Working with the supervising social worker",
    title:
      "Describe and give examples to show how the foster carer works with their supervising social worker, including evidence about use of supervision and support, being organised and reliable, and communicating effectively (including using different communications media). [2.1(c); 2.4(b); 2.5(a); 4.2(c); 4.4(b); 7.3(a)(c)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerWithSupervisingSocialWorker",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Working as part of a team",
    title:
      "Describe and give examples to show how the foster carer works with other professionals, including the child’s social worker, undertaking the foster carer’s role and responsibilities, contributing to planning for children and young people, and communicating effectively. [2.4(a)(b)(c); 2.1(b); 4.4(a)] Describe how foster carers are negotiating and making use of delegated authority *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerWithProfessional",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Working with birth family",
    title:
      "Describe and give examples to show how the foster carer understands the importance of birth families, and works with children and their families to support and promote contact where appropriate. [2.3(a)(b); 2.1(b); 4.3(a)(b); 5.6 (a)(b)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerOfBirthFamilies",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 3- HEALTHY CARE",
  },
  {
    subTitle: "Healthy physical and emotional care",
    title:
      "Describe and give examples to show how the foster carer promotes the healthy physical care of children and young people, including giving advice and information about health and hygiene, including sexual health. [3.3(a)(b)(c); 5.7(a); 1.3(a)] Describe and give examples to show how the carer promotes the healthy emotional care of children and young people, taking into account any attachment difficulties, trauma, separation and loss. Describe how the carer supports children through significant milestones, life changes and challenges, and how they promote self-confidence, self-esteem, and independence skills. [3.3(a); 5.1(a); 5.6(c); 1.3(a); 5.3(a)(b)(c); 5.2] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerPromotesHealthyPhysicalCare",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Managing behaviour",
    title:
      "Describe and give examples to show how the carer promotes positive behaviour and manages challenging behaviour safely and appropriately, taking account of the needs of all household members. [3.4(a)(b)(c)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerPromotesPositiveBehaviour",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 4 – COMMUNICATING EFFECTIVELY",
  },
  {
    subTitle: "Communicating with children",
    title:
      "Describe and give examples to show how the foster carer communicates with children according to their age and stage of development, using verbal and non-verbal means, and using different communications media. Describe how the encourages children to make their own decisions as appropriate. [4.1(a)(b)(c)(d); 4.2(a)(b)(c); 5.1(a)(b)(c)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowCarerCommuicateWithChildren",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Record keeping",
    title:
      "Describe the foster carer’s record keeping, in relation to whether the records are accurate, relevant, clear and concise. Describe how records are kept securely, and how children and young people are involved in keeping records and memorabilia. This includes keeping life story books and memory boxes as appropriate. [4.5(a)(c)(d); 1.4(a)] *",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerRecordKeeping",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 5 – UNDERSTANDING DEVELOPMENT",
  },
  {
    subTitle: "Education",
    title:
      "Describe and give examples to show how the foster carer supports children and young people in relation to education, training and employment, including advocating that their educational needs are met. [5.5(a)(b)(c)(d); 1.3(a)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowFosterCarerSupportChildrenAndYoungPeople",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Play and leisure",
    title:
      "Describe and give examples to show how the foster carer encourages children and young people to participate in play, and promotes hobbies, activities and social interests (in safe and organised environments). [5.4(a)(b); 1.3(a;); 2.5(b)] *",
    gridLength: 12,
    otherOptions: {
      name: "exampleToShowFosterCarerEncourageInPlay",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Disability",
    title:
      "Where the foster carer has looked after a disabled child or child with special educational needs, describe and give examples to show how they have  applied a social model of disability, and adapted activities and experiences, and supported the child to achieve their full potential. [5.8(a)(b)(c)(d)] *",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerSpecialEducationalNeeds",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Unplanned endings",
    title:
      "If there were any unplanned placement endings in the review period, please provide details of the circumstances and how the ending was managed.",
    gridLength: 12,
    otherOptions: {
      name: "unplannedPlacementEndingsInReviewPeriod",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 6 – KEEPING CHILDREN SAFE",
  },
  {
    subTitle: "Keeping children safe",
    title:
      "Describe and give examples to show how the foster carer keeps children and young people safe, and feeling safe. Describe how the foster carer helps   children and young people keep themselves safe, including communicating with them about risk and safety. [6.2(a)(b)(c); 1.3(a)(c); 3.5(a) *",
    gridLength: 12,
    otherOptions: {
      name: "childrenAndYoungPeopleFeelingSafe",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "TSD 6 – KEEPING CHILDREN SAFE",
  },
  {
    subTitle: "Impact of fostering and getting support",
    title:
      "Describe and give examples to show how the foster carer manages the personal impact that fostering can have on individuals and families, and how they make use of support from their networks. Be aware of the particular issues for male, BME and LGBT+ carers. [7.1(a)(b)(c)] Include discussion of whether foster carers have made use of formal respite provision. *",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerManagesThePersonalImpact",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Foster carer’s children",
    title:
      "The foster carer’s children should have been asked to complete Form FR-D. Describe how fostering impacts on these children, and other family members, and how their support and training needs are being met. Describe how their views are sought and taken into account. [7.1(a); 7.2(a)] *",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerAskedToCompleteFRDForm",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Continuing professional development (CPD) – Carer 1",
    title:
      "Describe how the foster carer has demonstrated their commitment to continuing professional development in line with their personal development plan",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerDemonstratedCommitment1",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Continuing professional development (CPD) – Carer 2",
    title:
      "Describe how the foster carer has demonstrated their commitment to continuing professional development in line with their personal development plan",
    gridLength: 12,
    otherOptions: {
      name: "fosterCarerDemonstratedCommitment2",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    head: "SUMMARY AND RECOMMENDATION",
  },
  {
    subTitle: "Summary",
    title:
      "Identify the strengths and limitations of the carer. Highlight any differences in views and list any outstanding or proposed future work. *",
    gridLength: 12,
    otherOptions: {
      name: "IdentifyTheStrengthsAndLimitations",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    subTitle: "Proposed change to approval terms",
    title: "Are the carer’s current terms of approval appropriate?",
    gridLength: 12,
    otherOptions: {
      name: "currentTermsOfApprovalAppropriate",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    subTitle: "Recommendation",
    title:
      "Make a clear recommendation regarding continued suitability to foster, including any recommendation regarding the appropriate terms of approval",
    gridLength: 12,
    otherOptions: {
      name: "recommendationRegarding",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    title: "Signature",
    gridLength: 6,
    otherOptions: {
      name: "signature",
      fullWidth: true,
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Label",
      name: "label",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
