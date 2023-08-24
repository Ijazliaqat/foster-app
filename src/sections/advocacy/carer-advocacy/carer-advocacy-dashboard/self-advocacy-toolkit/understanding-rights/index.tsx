import UnderstandingRightsData from "./understanding-rights-data/UnderstandingRightsData";

export const UnderstandingRightsTab = [
  {
    id: "1",
    head: "The UK government has a range of responsibilities to carers. They are responsible for welfare benefits and set the laws around what local government should provide to carers and disabled people. They also set the funding and general strategies for health and social care services, although many local areas decide exactly how to provide support.",
  },
];

export const CarerAssessmentTab = [
  {
    id: "1",
    head: "The Care Act 2014 brought together many of the old laws around carers and introduced important new rights. One of these is the right to have a carer’s assessment",
    title: "Carers have the right to request a carer’s assessment but what does this mean?",
    summary:
      "Having a carer’s assessment is an opportunity for you to formally have your needs reviewed, but it is in no respect a test of your abilities as a carer. The assessor will look at your needs and willingness to care, and how caring affects your health, work, free time and relationships.",
  },
  {
    id: "2",
    title: "Will my services be reduced?",
    summary:
      "Local authorities cannot reduce the amount of services and support that you are provided with unless you are reassessed. A decision is then made about whether your needs meet the eligibility criteria. Any decision should be provided in writing. The same process applies for anyone needing care and support and a needs assessment.",
  },
];

export const OtherAssessmentTab = [
  {
    id: "1",
    title: "Care needs assessment",
    summary:
      "A care needs assessment is an opportunity for the person you care for to have their needs assessed. This could result in extra support, such as meals delivered to the home or the recommendation of a paid care worker providing additional assistance.",
  },
  {
    id: "2",
    summary:
      "If the assessment identifies that the person needs more support, they will then also have a financial assessment to see if the council will pay for this.",
  },
  {
    id: "3",
    title: "If you move",
    summary:
      "If families want to move out of their local area, the new local authority must make sure there is no gap in care. They must carry out an assessment and develop a care plan for the person who requires care and their carer. If they decide to reduce the level of care support, they must provide this decision in writing. If they haven’t done the assessment by the time of the move, they must accept the old care plan.",
  },
  {
    id: "4",
    title: "Before a child turns 18",
    summary:
      "A disabled child is entitled to an assessment by adult social services before they reach 18 years old to help ensure they move smoothly from children’s to adult services. If this doesn’t happen, adult services have to continue to provide the same support that the child and family received from children’s services.",
  },
];

export const OtherLegislationTab = [
  {
    id: "1",
    title: "Children and Families Act 2014",
    summary:
      "This law introduced Education, Health and Care plans for some disabled children. It includes new laws affecting young carers and parent carers. ",
  },
  {
    summary:
      "The Children Act 1989 has been amended to include a duty to carry out a young carer or parent carer’s assessment where there may be a need for support.",
  },
];

export const UsefulLegislationTab = [
  {
    id: "1",
    title: "Carers (Recognition and Services) Act 1995 ",
    summary: "This Act is for adults who are not parents of disabled children but have a right to an assessment.",
  },
  {
    summary: "This could be a grandparent or an older sibling caring for a disabled child",
  },
  {
    id: "2",
    title: "Employment Act 1996 and the Work and Families Act 2006",
    summary: "These laws give carers limited rights to emergency unpaid time off and the right to request flexible working",
  },
  {
    id: "3",
    title: "Equality Act 2010",
    summary:
      "This includes protection for carers (who look after someone with a disability) from discrimination and harassment in the workplace and in services.",
  },
  {
    id: "4",
    title: "Mental Capacity Act 2005",
    summary:
      "This Act covers people who are unable to make some or all decisions by themselves. The ability to understand and make a decision is called mental capacity. It gives carers some rights to be consulted in some situations where decisions are being made.",
  },
  {
    id: "5",
    title: "Mental Health Act 1983 ",
    summary:
      "This Act covers people who are experiencing mental health issues and sets out their rights. It also includes rights for the nearest relative, which is not necessarily the next of kin or the carer.",
  },
];

// ===================================================================================================================

export const UnderstandingRightsTabs = [
  {
    index: 0,
    title: "Understanding your rights",
    background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    innerData: (
      <UnderstandingRightsData understandingRights={UnderstandingRightsTab} backgroundColor="linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)" />
    ),
  },
  {
    index: 1,
    title: "Having a carer’s assessment",
    background: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)",
    innerData: (
      <UnderstandingRightsData
        understandingRights={CarerAssessmentTab}
        backgroundColor="linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)"
      />
    ),
  },
  {
    index: 2,
    title: "Other assessments",
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    innerData: (
      <UnderstandingRightsData understandingRights={OtherAssessmentTab} backgroundColor="linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)" />
    ),
  },
  {
    index: 3,
    title: "Other legislation relevant to you as a carer",
    background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
    innerData: (
      <UnderstandingRightsData understandingRights={OtherLegislationTab} backgroundColor="linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)" />
    ),
  },
  {
    index: 4,
    title: "Useful legislation for reference",
    background: "linear-gradient(108.67deg, #0E918C -32.14%, #F6830F 124.99%)",
    innerData: (
      <UnderstandingRightsData
        understandingRights={UsefulLegislationTab}
        backgroundColor="linear-gradient(108.67deg, #0E918C -32.14%, #F6830F 124.99%)"
      />
    ),
  },
];
