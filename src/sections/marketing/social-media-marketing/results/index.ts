export const defaultValues = {
  exampleTable: [
    {
      postTopic: "Branded keywords",
      publishDate: new Date(),
      impressions: "10756",
      engagements: "198430",
      engagementsRate: "1.36%",
      spend: "$8,250.00",
      costPerEngagement: "$0.21",
      "TypeOfPost": {
        label: "Organic",
          value: "1",
          bgColor: "#BEA2FA",
          textColor: "#1D1D1D",
      },
    },
  ],
};

export const TYPEOFPOST = [
  {
    label: "Organic",
    value: "2",
    bgColor: "#BEA2FA",
    textColor: "#1D1D1D",
  },
  {
    label: "Paid Campaign",
    value: "3",
    bgColor: "#89CDFF",
    textColor: "#1D1D1D",
  },
  {
    label: "Evergreen Content",
    value: "4",
    bgColor: "#8CFFA5",
    textColor: "#1D1D1D",
  },
  {
    label: "Launch",
    value: "5",
    bgColor: "#CDFF8C",
    textColor: "#1D1D1D",
  },
];
