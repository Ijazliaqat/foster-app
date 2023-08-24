import {
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { DefaultValues } from "./viewDeclarationInterface";

export const declarationParagraph = `The information in this application form is true and complete, I
agree that any deliberate omision, Falsification or
mmisrepresentation in the application form will be grounds for
rejecting this appliacation or subsequent dismissal if employed by
the Oraganisation. Where applicable, I consent that the
Organisation can seek clarification regarding professional
registration details.`;

export const defaultValues: DefaultValues = {
  agreeToAboveDeclaration: false,

  criminalOffence: "",
  ifCriminalOffenceProvideDetails: "",

  areYouWillingToUndergoFullEnhancedDBACheckAtPrice55: "",

  workingTimeDirectives: false,

  challengingBehaviour: false,

  confidentialityAgreement: false,

  dataPrivacyPolicy: false,
};

export const FormSchema = Yup.object().shape({
  agreeToAboveDeclaration: Yup.boolean().oneOf(
    [true],
    "Must agree to abovedeclaration"
  ),
  ifCriminalOffenceProvideDetails: Yup.string().required("Required"),
});

export const viewDeclarationData = [
  {
    id: 1,
    accordianName: `Have you ever been convicted of a criminal offence?`,
    heading: `Have you ever been convicted of a criminal offence?`,
    otherOptions: {
      label: `Have you ever been convicted of a criminal offence?`,
      name: `criminalOffence`,
      options: ["Yes", "No"],
    },

    component: RHFRadioGroupWithLabel,
    textfield: {
      componentProps: {
        name: `ifCriminalOffenceProvideDetails`,
        label: `If yes , please prvoide more details`,
        multiline: true,
        minRows: 3,
        fullWidth: true,
      },
      component: RHFTextField,
    },
  },

  {
    id: 2,
    accordianName: `Are you willing to undergo a full enhanced DBA check at a price of  55?`,
    heading: `Are you willing to undergo a full enhanced DBA check at a price of  55?`,
    otherOptions: {
      name: `areYouWillingToUndergoFullEnhancedDBACheckAtPrice55`,
      label: `Are you willing to undergo a full enhanced DBA check at a price of  55?`,
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    id: 3,
    accordianName: `Working Time Directives`,
    heading: `Working Time Directives`,
    heading2: `I understand that I am under no obligation to work than the average of 48 Hours in any week - These hours include hours worked with any other company as well as our services. I further understand that I may work more than 48 Hours per week if I wish. Under the terms of engagement, I realise that I may turn down any assignment at any time without any reason, without detriment. By signing this declaration, I am signifying that any hours in excess of an average of 48 hours per week are worked by my choice, But also make it clear that this Declaration does not mean I will work more than 48 hours every week. I undertake to inform the total number of hours I work in a week from all form of employment exceeds 48, in order that we may take this into consideration before offering work to me.`,
    otherOptions: {
      name: `workingTimeDirectives`,
      label: `I agree to the above Declaration`,
    },
    component: RHFSwitch,
  },
  {
    id: 4,
    accordianName: `Challenging Behaviour`,
    heading: `Challenging Behaviour`,
    heading2: `When working in this Industry there are hazards associated with the Industry. I appreciate and accept that one of these hazards is possible aggressive behaviour from challenging service users. Service users may present challenging and aggressive behaviour and this is out of control of us. I understand and accept that I am under no obligation as an agency worker to accept assignments. I accept that there is this risk and accept that this risk is a result of the Industry and not our services. I understand if I am unhappy with any assignment I can withdraw my submission at any time with reasonable notice dictated in my contract for service, and as a result I will not hold our services liable for any injury or loss of earnings as an agency worker. I understand that if I am injured or affected in any other way whilst on an assignment that this is not my fault or of our services`,
    otherOptions: {
      name: `challengingBehaviour`,
      label: `I agree to the above Declaration`,
    },
    component: RHFSwitch,
  },
  {
    id: 5,
    accordianName: `Confidentiality Agreement`,
    heading: `Confidentiality Agreement`,
    heading2: `I can confirm that during every assignment and afterwards:- To hold information relating to the client in the strictest confidence, ensure that it is kept safely and securely when not in use. I acknowledge that no information is to be removed from the client's premises without permission of the client.
    `,
    otherOptions: {
      name: `confidentialityAgreement`,
      label: `I agree to the above Declaration`,
    },
    component: RHFSwitch,
  },
  {
    id: 6,
    accordianName: `Data Privacy Policy`,
    heading: `Data Privacy Policy`,
    heading2: `PERSONAL INFORMATION WE COLLECT Personal Information is information that identifies you as an individual
    which could also be considered sensitive personal information, such as: - Name - Date and Place of birth - Contact
    Details - Citizenship - Religion - Civil Status - Medical Information - and such other personally identifiable
    information In addition to your Personal Information, we will also maintain records of your educational background,
    employment application, history with the company, areas of expertise, details of salary and benefits, bank details,
    performance appraisals and salary reviews if applicable, working time records and other records pertinent to your
    continued employment. USE OF PERSONAL INFORMATION We use this information for a variety of personnel
    administration and employee, work and general business management purposes, including administration of
    payroll, improvement and providing and maintenance of the administration of employee benefits, facilitate the
    management of work and employees, operate performance and salary reviews, operating the company's IT and
    communications systems, comply with record keeping and other legal obligations. The Company also processes
    information relating to your health which may amount to sensitive Personal Information. The particular information
    that the company holds relating to your health are the records of sickness absence, medical certificates and any
    other health and medical records. SECURITY These information shall be controlled by our administrative employees
    who can access it electronically. The Company has security measures in place which will ensure the confidentiality
    of the information. TO WHOM DO WE SHARE YOUR PERSONAL INFORMATION In compliance with this Data Privacy
    Policy, your Personal Information will be disclosed to third party service providers only in compliance with our
    contractual obligation. We will also disclose your Personal Information to comply with our legal obligations,
    including to various law enforcement agencies, regulatory authorities and governments in the United Kingdom and 
    around the world and their service providers for security, customs and immigration purposes, upon their lawful
    request. RIGHTS OF DATA SUBJECT We respect and value all your rights as data subject. Hence, the Personal  
    Information you have provided in the Sites shall be retained for as long as necessary to fulfil the purposes for which
    it was collected, to comply with our legal obligations, resolve disputes, and enforce on agreements with third parties. You may exercise your particular Right to Access, Modify and Delete the Personal Information and change
    preferences, by contacting us through the information provided below: In the Company's discretion, we may
    amend, interpret, modify or withdraw any portion of this Data Privacy Policy at any time. STAFF DECLARATION I
    consent to QBIX processing data relating to you for legal, personnel, administrative and management purposes and
     in particular to the processing of any sensitive personal data (as defined in the Data Protection Act 1998) relating to
     you including, as appropriate information about your physical or mental health or condition, and information relating to any criminal proceedings in which you have been involved for insurance purposes and in order to comply with legal requirements and obligations to third parties.
    `,
    otherOptions: {
      name: `dataPrivacyPolicy`,
      label: `I agree to the above Declaration`,
    },
    component: RHFSwitch,
  },
];
