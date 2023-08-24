export const defaultValues = {
  exampleTable: [
    {
      name: "Branded keywords",
      requestedDate: new Date(),
      requestor: "Brawl",
      goal: "Share a unique use of our video platform from an influencer.",
      proposedCopy: "Announcing: We've made it easier to edit videos in ....",
      teamSocialNotes: "Once we've got the tweet, well retweet hannah's post",
      "typeOfContent": {
        label: "Request",
          value: "1",
          bgColor: "#BEA2FA",
          textColor: "#1D1D1D",
      },

      channels: [
        {
          label: "Twitter",
          value: "Twitter",
          bgColor: "#D6ADEA",
          textColor: "#1D1D1D",
        },
        {
          label: "Linkedin",
          value: "Linkedin",
          bgColor: "#ADE6EA",
          textColor: "#1D1D1D",
        },
      ],
      image:
        "users/4f7512fb-2916-451b-8240-97f529ded73d/badge/72fd0112-f976-4910-b7a3-e3c8013f4204.jpg",
    },
  ],
};



// Constants

export const TYPEOFCONTENT = [
  {
    label: "Request",
    value: "Request",
    bgColor: "#BEA2FA",
    textColor: "#1D1D1D",
  },
  {
    label: "UGC",
    value: "UGC",
    bgColor: "#A2C5FA",
    textColor: "#1D1D1D",
  },
  {
    label: "Team Social Proposal",
    value: "Team Social Proposal",
    bgColor: "#8EEB92",
    textColor: "#1D1D1D",
  },
];
