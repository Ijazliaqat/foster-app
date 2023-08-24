
export const defaultValues = {
  exampleTable: [
    {
      campaigns: "Branded keywords",
      // status: [
      //   {
      //     label: "Development",
      //     value: "Development",
      //     bgColor: "#73D4F2",
      //     textColor: "#1D1D1D",
      //   },

      // ],
      "status": {
        label: "Development",
        value: "1",
        bgColor: "#73D4F2",
        textColor: "#1D1D1D",
      },
      goal: "Drive traffic to site, CPC >$2.25",
      "funnelStage": {
        label: "Consideration",
        value: "1",
        bgColor: "#ADE6EA",
        textColor: "#1D1D1D",
      },
      startDate: new Date(),
      endDate: new Date(),
      "nextSteps": {
        label: "Continue",
          value: "1",
          bgColor: "#90DB84",
          textColor: "#1D1D1D",
      },

      platform: [
        {
          label: "Google",
          value: "Google",
          bgColor: "#93EFEA",
          textColor: "#1D1D1D",
        },

      ],


      image:
        "users/4f7512fb-2916-451b-8240-97f529ded73d/badge/72fd0112-f976-4910-b7a3-e3c8013f4204.jpg",
    },
  ],
};


// Constants
export const StatusOptions = [
  {
    label: "Reviews",
    value: "1",
    bgColor: "#73F2A6",
    textColor: "#1D1D1D",
  },
  {
    label: "Planning",
    value: "2",
    bgColor: "#C4CE4C",
    textColor: "#1D1D1D",
  },
  {
    label: "Published",
    value: "3",

    bgColor: "#F29973",
    textColor: "#1D1D1D",
  },
  {
    label: "On Hold",
    value: "4",

    bgColor: "#A3A1F6",
    textColor: "#1D1D1D",
  },

];
export const FunnelStageOptions = [

  {
    label: "Awareness",
    value: "1",

    bgColor: "#6B9FED",
    textColor: "#1D1D1D",
  },
  {
    label: "Conversion",
    value: "2",

    bgColor: "#9AE06E",
    textColor: "#1D1D1D",
  },

];
export const NextStepsOptions = [

  {
    label: "Pause",
    value: "1",

    bgColor: "#D6D870",
    textColor: "#1D1D1D",
  },
  {
    label: "Analysis",
    value: "2",

    bgColor: "#C4EA86",
    textColor: "#1D1D1D",
  },
  {
    label: "Stop",
    value: "3",

    bgColor: "#E5726B",
    textColor: "#1D1D1D",
  },

];
export const PlatformOptions = [

  {
    label: "Facebook",
    value: "Facebook",

    bgColor: "#9AC3F4",
    textColor: "#1D1D1D",
  },
  {
    label: "Instagram",
    value: "Instagram",

    bgColor: "#E2C68F",
    textColor: "#1D1D1D",
  },
  {
    label: "Twitter",
    value: "Twitter",

    bgColor: "#BC93EF",
    textColor: "#1D1D1D",
  },
];