import { Box, Checkbox, Rating } from "@mui/material";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import Image from "next/image";

import documentIcon from "../../../../assets/img/ifaAvatar.png";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import { RHFApiUploadFile } from "../RHFApiUploadFile";

export const defaultValues = {
  medalLevel: "silver",
  name: "",
  fromDate: new Date(),
  certificateAwarded: null,
  toDate: new Date(),
  outcome: "",
  outcomeNotes: "",
  assessmentBy: "",
  assessmentDate: new Date(),
  videoOrAudioEvidence: null,
  assessorDigitalSign: null,
  travelByBus: false,
  travelByBusEvidence: "",
  planJourneyByBus: false,
  planJourneyByBusEvidence: "",
  planJouknowAdultDailyNeedsrneyByBus: false,
  knowAdultDailyNeedsEvidence: "",
  contactAdultForEmergency: false,
  contactAdultForEmergencyEvidence: "",
  communicateWithFamily: false,
  communicateWithFamilyEvidence: "",
  savePocketMoney: false,
  savePocketMoneyEvidence: "",
  sendLetter: false,
  sendLetterEvidence: "",
  setupEmailAddress: false,
  setupEmailAddressEvidence: "",
  userComputerForHW: false,
  userComputerForHWEvidence: "",
  personalSafetyUsingComputer: false,
  personalSafetyUsingComputerEvidence: "",
  personalHygiene: false,
  personalHygieneEvidence: "",
  washHair: false,
  washHairEvidence: "",
  changeClothes: false,
  changeClothesEvidence: "",
  changeBedding: false,
  changeBeddingEvidence: "",
  useTumbleDryer: false,
  useTumbleDryerEvidence: "",
  useVacuumCleaner: false,
  useVacuumCleanerEvidence: "",
  canMakeSandwich: false,
  canMakeSandwichEvidence: "",
  canUseMircowave: false,
  canUseMircowaveEvidence: "",
  whereLocalBusStop: false,
  whereLocalBusStopEvidence: "",
  whereLocalShop: false,
  whereLocalShopEvidence: "",
  communicateWithSchoolTeachers: false,
  communicateWithSchoolTeachersEvidence: "",
  openedBankAccount: false,
  openedBankAccountEvidence: "",
  sendText: false,
  sendTextEvidence: "",
  protectFromCyberBullying: false,
  protectFromCyberBullyingEvidence: "",
  dangersOfSharingPersonalDetail: false,
  dangersOfSharingPersonalDetailEvidence: "",
  canHaveBath: false,
  canHaveBathEvidence: "",
  canCleanTeeth: false,
  canCleanTeethEvidence: "",
  canMakeBed: false,
  canMakeBedEvidence: "",
  useWashingMachine: false,
  useWashingMachineEvidence: "",
  canHangWashing: false,
  canHangWashingEvidence: "",
  cleaningAfterMakingDrinks: false,
  cleaningAfterMakingDrinksEvidence: "",
  canMakeCupOfTea: false,
  canMakeCupOfTeaEvidence: "",
  canUseGoodManners: false,
  canUseGoodMannersEvidence: "",
  commWithFriend: false,
  commWithFriendEvidence: "",
  // silver
  useTrain: false,
  useTrainEvidence: "",
  planJourneyByTrain: false,
  planJourneyByTrainEvidence: "",
  orderTaxi: false,
  orderTaxiEvidence: "",
  backToShop: false,
  backToShopEvidence: "",
  useOvenWithStaff: false,
  useOvenWithStaffEvidence: "",
  cookWithInstruction: false,
  cookWithInstructionEvidence: "",
  orderMealPay: false,
  orderMealPayEvidence: "",
  whyCleanKitchen: false,
  whyCleanKitchenEvidence: "",
  brushMopFloor: false,
  brushMopFloorEvidence: "",
  ironMyClothing: false,
  ironMyClothingEvidence: "",
  makeMedicalApp: false,
  makeMedicalAppEvidence: "",
  basicFirstAid: false,
  basicFirstAidEvidence: "",
  changeBulb: false,
  changeBulbEvidence: "",
  bookTicketAlone: false,
  bookTicketAloneEvidence: "",
  stayHealthyImportance: false,
  stayHealthyImportanceEvidence: "",
  understandDiffSexuality: false,
  understandDiffSexualityEvidence: "",
  commWithOtherPeople: false,
  commWithOtherPeopleEvidence: "",
  safeInRelationship: false,
  safeInRelationshipEvidence: "",
  studyForExam: false,
  studyForExamEvidence: "",
  whereToLookJob: false,
  whereToLookJobEvidence: "",
  interviewPreparation: false,
  interviewPreparationEvidence: "",
  purchaseTrainTicket: false,
  purchaseTrainTicketEvidence: "",
  renewBusPass: false,
  renewBusPassEvidence: "",
  saveUpForNeed: false,
  saveUpForNeedEvidence: "",
  planShoppingList: false,
  planShoppingListEvidence: "",
  prepFoodCorrectly: false,
  prepFoodCorrectlyEvidence: "",
  readFollowRecipe: false,
  readFollowRecipeEvidence: "",
  storeLeftOverSafely: false,
  storeLeftOverSafelyEvidence: "",
  cleanBathroomWithStaff: false,
  cleanBathroomWithStaffEvidence: "",
  understandMedicalNeeds: false,
  understandMedicalNeedsEvidence: "",
  selfAdministerBasicMed: false,
  selfAdministerBasicMedEvidence: "",
  canSeekMedicalEmergency: false,
  canSeekMedicalEmergencyEvidence: "",
  canChangePlug: false,
  canChangePlugEvidence: "",
  planJourneyWithComputer: false,
  planJourneyWithComputerEvidence: "",
  canLookForActivities: false,
  canLookForActivitiesEvidence: "",
  canUserSocialSite: false,
  canUserSocialSiteEvidence: "",
  adviceOnDrugsAndAlcohol: false,
  adviceOnDrugsAndAlcoholEvidence: "",
  seekHelpRegardingSexual: false,
  seekHelpRegardingSexualEvidence: "",
  goodRelationIs: false,
  goodRelationIsEvidence: "",
  understandDiffCulture: false,
  understandDiffCultureEvidence: "",
  shopWithinBudget: false,
  shopWithinBudgetEvidence: "",
  careerCollegAdvice: false,
  careerCollegAdviceEvidence: "",
  visitJobCentre: false,
  visitJobCentreEvidence: "",
  toDoAfterLeaveSchool: false,
  toDoAfterLeaveSchoolEvidence: "",
  ableToSaveUp: false,
  ableToSaveUpEvidence: "",
  completeCV: false,
  completeCVEvidence: "",
  renewBusTicket: false,
  renewBusTicketEvidence: "",
  basicLoanKnowledge: false,
  basicLoanKnowledgeEvidence: "",

  // gold
  getDriverLicense: false,
  getDriverLicenseEvidence: "",
  minorIllnessInjury: false,
  minorIllnessInjuryEvidence: "",
  useCookerAlone: false,
  useCookerAloneEvidence: "",
  organiseCleaningRoutine: false,
  organiseCleaningRoutineEvidence: "",
  differentHousingOptions: false,
  differentHousingOptionsEvidence: "",
  adultHelpWithHousing: false,
  adultHelpWithHousingEvidence: "",
  understandSavingMoney: false,
  understandSavingMoneyEvidence: "",
  knowCitizenAdviceInWarrington: false,
  knowCitizenAdviceInWarringtonEvidence: "",
  getPassport: false,
  getPassportEvidence: "",
  prepareSeveralBalancedMeal: false,
  prepareSeveralBalancedMealEvidence: "",
  houseHoldFireHazards: false,
  houseHoldFireHazardsEvidence: "",
  healthyRelationshipWithFriend: false,
  healthyRelationshipWithFriendEvidence: "",
  tenancyAgreement: false,
  tenancyAgreementEvidence: "",
  housingAndOtherBenefitForms: false,
  housingAndOtherBenefitFormsEvidence: "",
  leavingCareAllowance: false,
  leavingCareAllowanceEvidence: "",
  experienceFinancialDifficulties: false,
  experienceFinancialDifficultiesEvidence: "",
};

export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Field is required"),
  fromDate: Yup.date().required("Date of Interview is required"),
  certificateAwarded: Yup.mixed().nullable().required("Field is required"),
  toDate: Yup.date()
    .min(Yup.ref("fromDate"), "to date can't be before from date")
    .required("Date of Interview is required"),
  outcome: Yup.string().required("Field is required"),
  outcomeNotes: Yup.string().required("Field is required"),
  assessmentBy: Yup.string().required("Field is required"),
  assessmentDate: Yup.date().required("Field of Interview is required"),
  videoOrAudioEvidence: Yup.mixed().nullable().required("Field is required"),
  assessorDigitalSign: Yup.mixed().nullable().required("Field is required"),
});

export const formData1 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "toDate",
      label: "To Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "certificateAwarded",
      label: "Certificate Awarded",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const formData2 = [
  {
    gridLength: 6,
    otherOptions: {
      name: "outcome",
      label: "Outcome",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
      { value: "areaOffice information", label: "areaOffice information" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "outcomeNotes",
      label: "Outcome Notes/Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "assessmentBy",
      label: "Accessment done by",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "assessmentDate",
      label: "Accessment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "assessorDigitalSign",
      label: "Signature Of Accessor",
      sx: { marginTop: "-20px" },
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "videoOrAudioEvidence",
      label: "Attach Video/Audio Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
];
export const ListOfSkills = [
  {
    gridLength: 12,
    otherOptions: {
      name: "useTrain",
      label: "I can use the train",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "useTrainEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "planJourneyByTrain",
      label: "I know how to plan a journey by train.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "planJourneyByTrainEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "orderTaxi",
      label: "I know how to order a taxi.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "orderTaxiEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "backToShop",
      label: "I can take something back to a shop",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "backToShopEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "useOvenWithStaff",
      label: "I can use the cooker and oven with staff help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "useOvenWithStaffEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "cookWithInstruction",
      label: "I can understand cooking instructions on food boxes and packets.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "cookWithInstructionEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "orderMealPay",
      label: "I can order a meal in restaurant and pay.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "orderMealPayEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "whyCleanKitchen",
      label: "I understand why is important to keep a kitchen clean and safe.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "whyCleanKitchenEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "brushMopFloor",
      label: "I can brush and mop the floor alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "brushMopFloorEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "ironMyClothing ",
      label: "I can iron my own clothing with staff help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "ironMyClothingEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "makeMedicalApp",
      label:
        "I can make my own medical appointments, Doctor’s, Dentist and Opticians.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "makeMedicalAppEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "basicFirstAid ",
      label: "I can help with basic first aid.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "basicFirstAidEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "changeBulb",
      label: "I can change a light bulb with staff help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "changeBulbEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "userComputerForHW",
      label: "I can use a computer to complete home work alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "userComputerForHWEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "bookTicketAlone",
      label: "I can book tickets alone",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "bookTicketAloneEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "setupEmailAddress",
      label: "I can set up an email address",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "setupEmailAddressEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "stayHealthyImportance",
      label:
        "I know how to stay healthy and understand importance of diet and exercise.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "stayHealthyImportanceEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "understandDiffSexuality",
      label: "I know and understand differences between sex and sexuality.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "understandDiffSexualityEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "commWithFriend",
      label: "I can  communicate with friends alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "commWithFriendEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "commWithOtherPeople",
      label:
        "I know how to communicate with other people involved with me alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "commWithOtherPeopleEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "safeInRelationship",
      label: "I know how to keep myself safe when in relationship.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "safeInRelationshipEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  // {
  //   gridLength: 12,
  //   otherOptions: {
  //     name: "studyForExam",
  //     label: "I know what prejudice and discrimination means.",  missing fiels
  //   },
  //   component: RHFCheckbox,
  // },
  // {
  //   gridLength: 6,
  //   otherOptions: {
  //     name: "studyForExamEvidence",
  //     label: "My Evidence",
  //     fullWidth: true,
  //     size: "small",
  //file:true
  //   },
  //   component: RHFApiUploadFile,
  // },
  {
    gridLength: 12,
    otherOptions: {
      name: "backToShop",
      label: "I can take something back to a shop",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "backToShopEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "studyForExam",
      label: "I have had some advice and guidance on how to study for an exam.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "studyForExamEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "completeCV",
      label:
        "I am able to complete a CV and know how to look for part time or weekend job.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "completeCVEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "whereToLookJob",
      label: "I know where to look for a job.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "whereToLookJobEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "interviewPreparation",
      label: "I have had some interview preparation.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "interviewPreparationEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
];
export const ListOfSkillsWithEvidence = [
  {
    gridLength: 12,
    otherOptions: {
      name: "purchaseTrainTicket",
      label: "I know how to purchase a train ticket.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "purchaseTrainTicketEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "renewBusPass",
      label: "I can renew my bus pass with staff.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "renewBusPassEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "saveUpForNeed",
      label: "I am able to save up for what I need",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "saveUpForNeedEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "planShoppingList",
      label:
        "I can plan a shopping list and stick to a budget with staff help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "planShoppingListEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "prepFoodCorrectly",
      label: "I understand why it is important to prepare food correctly.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "prepFoodCorrectlyEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "readFollowRecipe",
      label: "I can read and follow a recipe.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "readFollowRecipeEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "storeLeftOverSafely ",
      label: "I can store left over food safely.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "storeLeftOverSafelyEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "cleanBathroomWithStaff",
      label: "I can clean a bathroom with staff help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "cleanBathroomWithStaffEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "useWashingMachine",
      label: "I can use a washing machine alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "useWashingMachineEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "understandMedicalNeeds",
      label: "I understand all my own medical needs.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "understandMedicalNeedsEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "selfAdministerBasicMed",
      label:
        "I can self-administer basic medication e.g. inhalers, creams etc.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "selfAdministerBasicMedEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "canSeekMedicalEmergency",
      label: "I know how to seek medical attention in an emergency.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "canSeekMedicalEmergencyEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "canChangePlug",
      label: "I can change a plug with staffs help.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "canChangePlugEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "planJourneyWithComputer",
      label: "I can use the internet to plan a journey alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "planJourneyWithComputerEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },

  {
    gridLength: 12,
    otherOptions: {
      name: "canLookForActivities",
      label: "I can look for activities in local area alone",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "canLookForActivitiesEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "canUserSocialSite",
      label: "I can use social networking site safely",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "canUserSocialSiteEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "adviceOnDrugsAndAlcohol",
      label: "I know where to get appropriate advice on drugs and alcohol.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "adviceOnDrugsAndAlcoholEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "seekHelpRegardingSexual",
      label: "I know where to seek help if regarding any sexual issues.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "seekHelpRegardingSexualEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "communicateWithFamily",
      label: "I can communicate with my family alone.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "communicateWithFamilyEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "goodRelationIs",
      label: "I know what a good relationship is.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "goodRelationIsEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "understandDiffCulture",
      label: "I have an understanding of differences cultures and traditions.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "understandDiffCultureEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "shopWithinBudget",
      label: "I can shop within a budget.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "shopWithinBudgetEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "careerCollegAdvice",
      label: "I know I can contact about careers and College advice.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "careerCollegAdviceEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
    },
    component: RHFUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "visitJobCentre",
      label: "I have been to visit the job centre.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "visitJobCentreEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "toDoAfterLeaveSchool",
      label: "I’m know what I would like to do when I leave school.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "toDoAfterLeaveSchoolEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "ableToSaveUp",
      label: "I am able to save up for what I need.",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "ableToSaveUpEvidence",
      label: "My Evidence",
      fullWidth: true,
      size: "small",
      file: true,
    },
    component: RHFApiUploadFile,
  },
];
