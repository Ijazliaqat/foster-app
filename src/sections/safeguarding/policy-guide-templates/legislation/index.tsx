import IndependentSafeguardingLegation from "./independent-safeguarding-legation/IndependentSafeguardingLegation";
import StandardSafeguardingLegation from "./standard-safeguarding-legation/StandardSafeguardingLegation";

export const IndependentFosteringDATA = [
    {
      id: "1",
      head: "Regulations 11",
      title: "The registered person in respect of an independent fostering agency must ensure that",
      list: [
        {
          title: "The welfare of children placed or to be placed with foster parents is safeguarded and promoted at all times",
        },
        {
          title: "Before making any decision affecting a child placed or to be placed with a foster parent due consideration is given to the child’s",
          subList: [
            {
              title: "Wishes and feelings (having regard to the child’s age and understanding)",
            },
            {
              title: "Religious persuasion, racial origin and cultural and linguistic background.",
            },
          ],
        },
      ],
    },
  ];
  
 export const ARRANGEMENTPROTECTIONDATA = [
    {
      id: "1",
      head: "Regulations 12",
      title: " The fostering service provider must prepare and implement a written policy which",
      list: [
        {
          title: "Is intended to safeguard children placed with foster parents from abuse or neglect",
        },
        {
          title: "Sets out the procedure to be followed in the event of any allegation of abuse or neglect",
        },
      ],
    },
    {
      id: "2",
      title:
        "The written policy must include a statement of measures to be taken to safeguard any child before making parent and child arrangements with that foster parent.",
    },
    {
      id: "3",
      title: "The procedure under paragraph (1)(b) must, subject to paragraph (4), provide in particular for",
      list: [
        {
          title:
            "Liaison and co-operation with any local authority which is, or may be, making child protection enquiries in relation to any child placed by the fostering service provider",
        },
        {
          title:
            "The prompt referral to the area authority of any allegation of abuse or neglect affecting any child placed by the fostering service provider",
        },
        {
          title:
            "Notification of the instigation and outcome of any child protection enquiries involving a child placed by the fostering service provider, to the Chief Inspector",
        },
        {
          title: "Written records to be kept of any allegation of abuse or neglect, and of the action taken in response",
        },
        {
          title:
            "Consideration to be given to the measures which may be necessary to protect children placed with foster parents following an allegation of abuse or neglect",
        },
        {
          title:
            "Arrangements to be made for persons working for the purposes of the fostering service, foster parents and children placed by the fostering service, to have the address (including email address), and telephone number of",
          subList: [
            {
              title: "The area authority, and",
            },
            {
              title: " The Chief Inspector,",
            },
            {
              title: "for the purposes of referring any concern about child welfare or safety to them.",
            },
          ],
        },
        {
          title: " Sub-paragraphs (a) and (c) of paragraph (3) do not apply to a local authority fostering service.",
        },
        {
          title:
            "In this regulation “child protection enquiries” means any enquiries carried out by a local authority in the exercise of any of its functions conferred by or under the 1989 Act relating to the protection of children.",
        },
      ],
    },
  ];
  
 export const EXPECTEDOUTCOMEDATA = [
    {
      id: "1",
      title: "Children feel safe and are safe. Children understand how to protect themselves and are protected from significant harm, including neglect, abuse, and accident.  ( STANDARD 4 – Safeguarding Children)",
    },
    {
      id: "2",
      title: "Children have a positive self view, emotional resilience and knowledge and understanding of their background.   ( STANDARD 2 – Promoting a positive identity, potential and valuing diversity through individualised care. )",
    },
    {
      id: "3",
      title: "Children are welcomed into the foster home and leave the foster home in a planned and sensitive manner which makes them feel loved and valued.   ( STANDARD 11 - Preparation for a placement) ",
    },
    {
      id: "4",
      title: " Children feel part of the family. They are not treated differently to the foster carer’s own children living in the household. The child’s needs are met and they benefit from a stable placement.  (STANDARD 11 - Preparation for a placement) ",
    },
  ];
  
  export const LEGISLATIONTABSDATA = [
    {
      index: 0,
      title: "Gov Reference Link",
      background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
      innerData: {
        id: 1,
        title: "Reference Link",
        link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/192705/NMS_Fostering_Services.pdf",
      },
    },
    {
      index: 1,
      title: "STANDARD 4 - Safeguarding Children",
      background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%);",
      innerData: <StandardSafeguardingLegation />,
    },
    {
      index: 2,
      title: "Independent fostering agencies-duty to secure welfare",
      background: "linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)",
      innerData: (
        <IndependentSafeguardingLegation
          safeguadingList={IndependentFosteringDATA}
          backgroundColor="linear-gradient(108.65deg, #F6830F -23.21%, #DC3545 190.22%)"
        />
      ),
    },
    {
      index: 3,
      title: "Arrangements for the protection of children",
      background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
      innerData: (
        <IndependentSafeguardingLegation safeguadingList={ARRANGEMENTPROTECTIONDATA} backgroundColor="linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)" />
      ),
    },
    {
      index: 4,
      title: "Expected Outcome  (as per Legislation)",
      background: "linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)",
      innerData: (
        <IndependentSafeguardingLegation safeguadingList={EXPECTEDOUTCOMEDATA} backgroundColor="linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)" />
      ),
    },
  ];