export const viewReportsFilterData = [
  {
    gridlength: 6,
   label: "Foster Carer",
    otherOptions: {
     label: "Foster Carer",
      name: "fosterCarer",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
   label: "Relationship to Foster Carer",
    otherOptions: {
     label: "Relationship to Foster Carer",
      name: "relationshipToFosterCarer",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
   label: "Relative Name",
    otherOptions: {
     label: "Relative Name",
      name: "relativeName",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
   label: "Select Search Date",
    otherOptions: {
     label: "Select Search Date",
      name: "selectSearchDate",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
   label: "Date Type",
    otherOptions: {
     label: "Date Type",
      name: "dateType",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "Signed date", label: "Signed date" }],
  },
];

export const tableSubHeader = [
  {
    id: "1",
    subData: [
      { label: "Foster Carer", value: "Teri dactyl" },
      { label: "region", value: "Region 11" },
    ],
  },
  {
    id: "2",
    subData: [
      { label: "Relationship to Foster Carer", value: "Friend" },
      { label: "branch", value: "Branch 12" },
    ],
  },
  {
    id: "3",
    subData: [
      { label: "Relative Name", value: "Aida bugg" },
      { label: "date from", value: "03/11/21" },
      { label: "date to", value: "03/11/21" },
    ],
  },
];

export const tableMockData = [
  {
    id: "1",
    srNo: "1",
    fosterCarer: "Timmy Toppee",
    relationshipToFosterCarer: "Friend",
    relativeName: "Teri Dactyl",
    signedDate: "03/10/21",
    createdDate: "03/10/21",
    createdBy: "john doe",
    modifiedDate: "03/10/21",
    modifiedBy: "john doe",
  },
];
