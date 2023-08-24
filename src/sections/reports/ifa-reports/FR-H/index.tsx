import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const viewReportsFilterData = [
  {
    gridlength: 6,
    label: "Name of foster carer",
    otherOptions: {
      label: "Name of foster carer",
      name: "nameOfFosterCarer",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Name of fostering manager",
    otherOptions: {
      label: "Name of fostering manager",
      name: "nameOfFosterCarer",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Date of review meeting",
    otherOptions: {
      name: "dateOfReviewMeeting",
      size: "small",
      fullWidth: true,
    },
    requireDatePicker: true,
  },
  {
    gridlength: 6,
    label: "Date",
    otherOptions: {
      name: "dateType",
      fullWidth: true,
      size: "small",
    },
    requireDatePicker: true,
  },
];

export const tableSubHeader = [
  {
    id: "1",
    subData: [
      { label: "Name of child(DOB)", value: "Teri dactyl(10/10/2012)" },
      { label: "region", value: "Region 11" },
    ],
  },
  {
    id: "2",
    subData: [
      { label: "Supervising Social Worker", value: "Aida bugg" },
      { label: "branch", value: "Branch 12" },
    ],
  },
  {
    id: "3",
    subData: [
      { label: "Foster Carer(s)", value: "Teri Dectyl, Peg Legge" },
      { label: "date from", value: "03/11/21" },
      { label: "date to", value: "03/11/21" },
    ],
  },
];

export const tableMockData = [
  {
    id: "1",
    srNo: "1",
    nameOfFosterCarer: "Timmy Toppee",
    meetingReviewDate: "03/10/21",
    nameOfFosteringManager: "Teri Dactyl",
    date: "03/10/21",
    modifiedDate: "03/10/21",
    modifiedBy: "john doe",
  },
];
