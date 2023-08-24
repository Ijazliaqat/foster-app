export const viewReportsFilterData = [
  {
    gridlength: 6,
    label: "Foster Carer",
    otherOptions: {
      name: "fosterCarer",
      label: "Foster Carer",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Name",
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Select Search Date",
    otherOptions: {
      name: "selectSearchDate",
      label: "Select Search Date",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Date Type",
    otherOptions: {
      label: "Select Search Date",
      name: "dateType",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "Today", label: "Today" }],
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
      { label: "Name", value: "Aida bugg" },
      { label: "branch", value: "Branch 12" },
    ],
  },
  {
    id: "3",
    subData: [
      { label: "date from", value: "03/11/21" },
      { label: "date to", value: "03/11/21" },
    ],
  },
];

export const tableMockData = [
  {
    id: "1",
    srNo: "1",
    fosterCarer: "Teri Dactyl",
    name: "Aima bugg",
    signedDate: "03/10/21",
    createdDate: "03/10/21",
    createdBy: "john doe",
    modifiedDate: "03/10/21",
    modifiedBy: "don joe",
  },
];
