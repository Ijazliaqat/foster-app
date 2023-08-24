import { RHFSwitch } from "@root/components/hook-form";

export const HeadingsWithDesInfo = [
  {
    heading: "Working Time Directives",
    des: ` Understand thet I am under no obligation to work than the average of 48
    hours in any week. These hours include hours worked with any other
    company as well as our services. I further understand that I may work
    more than 48 hours per week if I wish. Under the terms of engagement, I
    realise that I may turn down any assignment at any time without any
    reason, without detriment. By signing this declaration, I am
    signifyingthat any hours in excess of an average of 48 hours per week
    are worked by my choice. But also make it clear that this declaration
    does not mean I will work more than 48 hours every week. I understand to
    inform the total number of hours I work in a week from all form of
    employement exceeds 48, in order that we may take this into
    consideration before offering work to me.`,
    com: (
      <RHFSwitch
        name="workTimeDirective"
        label="I agree to the above Declaration."
      />
    ),
  },
  {
    heading: "Challenging Behaviour",
    des: `When working in this industry there are hazards associated with the industry. I appreciate and accept that one of these hazards is
    possible aggressive behaviour from challenging service users. Service users may present challenging and aggressive behavious
    and this is out of control for us. I understand and accept that I am under no obligation as an agency worker to accept assignments.
    I accept that there is this risk and accept that this risk is a result of the industry and not our services. I understand if I am unhappy
    with any assignment I can withdraw my submission at any time with reasonable notice dictated in my contract for service, amd as
    a result I will not hold our services liable for any injury or loss of earnings as an agency worker. I understand that if I am injured or
    affected in any other way whilst on an assignment that is not my fault or of our services.`,
    com: (
      <RHFSwitch
        name="challengingBehaviour"
        label="I understand and agree to the above entirely."
      />
    ),
  },
  {
    heading: "Confidential Agreement",
    des: `I can confirm that during every assignment and afterwards. To hold information relating to the client in the strictness confidence,
    ensure that it is kept safely and securely when not in use. I acknowledge that no information is to be removed from the client's
    permises without permission of the client.`,
    com: (
      <RHFSwitch
        name="confidentialAgrement"
        label="I agree to the above Declaration."
      />
    ),
  },
  {
    heading: "Pension Opt-out",
    des: `This is to inform that i can choose to: (please click your answer) BE ENROLLED IN PENSION THE NEST PENSION SCHEME OPT OUT
    FOR PENSION ENROLMENT Name: Signed: Date: * Please note we will automatically enrol you to our NEST Pension Scheme if we
    did not receive this form back after your qualifying period. Once enrolled, a percentage of your salary will be deducted for your
    pension contribution, it will be reflected on your payslips. Please visit NESTPENSION.ORG.UK for more information regarding
    pensions`,
    com: <RHFSwitch name="pension" label="I agree to the above Declaration." />,
  },
];

export const DotedHeadingsWithDesInfo = [
  {
    heading: "PERSONAL INFORMATION WE COLLECT",
    des: `Personal Information is information that identifies you as an individual which could also be considered sensitive personal
    information, such as: Name, Date and Place of birth, Contact details, Citizenship, Religion, Civil Status, Medical Information and such
    other personally identifiable information in addition to your personal information, we will also maintain records of your educational
    background, employment application, history with the company, areas of experties, details of salary and benefits, bank details,
    performance appraisals and salary reviews if applicable, working time records and other records pertinent to your continued
    employment.`,
  },
  {
    heading: "USE OF PERSONAL INFORMATION",
    des: `we use this information for a variety of personnel administration and emplyee, work and general business management purposes,
    including administration of payroll, improvement and providing and maintenance of the administration of employee benefits,
    facilitate the management of work and employees, operate performance and salary reviews, operating the company's IT and
    communication systems comply with record keeping and other legal obligations. The company aslo processes information
    information relating to your health which may amount to sensitive Personal Information. The particular information that the
    company holds relating to your health are the records of sickness absence, medical certificates and any other health and medical
    records.`,
  },
  {
    heading: "SECURITY",
    des: `These information ahall be controlled by our administrative employees who can access it electronically. The company has security
    measures in place which will ensure the confidentiality of the information.`,
  },
  {
    heading: "TO WHOM DO WE SHARE YOUR PERSONAL INFORMATION",
    des: `In compliance with this Data Privacy Policy, your personal information will be disclosed to third party service providers only in
    compliance with our contractual obligation. We will also disclose vour personal intromation to comply with our legal obligations
    including to various law inforcement agencies, regulatory authorities and governments in United Kingdom and around the world
    and their service providers for security, customs and immigration purposes, upon their lawful request.`,
  },
  {
    heading: "RIGHT TO DATA SUBJECT",
    des: `We respect and value all your rights as data subject. Hence, the personal information you have provided in the sites shall be retained
    for as long as necessary to fulfil the purposes for which it was collected, to comply with our legal obligations, resolve disputes, and
    enforce on agreements with third parties. You may exercise your particular Right to Access, Modify and Delete the persocal
    information and change preferences, by contacting us through the information provided below: In the Company's direction, we may
    amend, interpret, modify or withdraw any portion of this Data Privacy Policy at any time.`,
  },
  {
    heading: "STAFF DECLARATION",
    des: `I consent to QBIX processing data relating to you for legal, personnel, administrative and management purposes and in particular to
    the processing of any sensitive personal data (as defined in the Data Protection Act 1998) relating to you including, as appropriate
    information about vour physical or mental health condition, and information relating to an criminal proceedinas in which vou have
    been involved or insurance ourposes and in order to comply win ca regurremens and oolgations to third parties`,
  },
];
