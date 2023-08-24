export const TableDemoData = [
  { id:1,
    sNO: "1",
    employeeName: "Anne Teak",
    lineManager: "User ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  { id:2,
    sNO: "2",
    employeeName: "Anne Teak",
    lineManager: "User  ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
  { id:3,
    sNO: "3",
    employeeName: "Anne Teak",
    lineManager: "User ",
    position: "12.30 AM",
    date: "26/12/2021",
  },
];

export const careerFeedbackFilterData = [
  {
    gridlength: 6,
    otherOptions: {
      label: "Employee Name",
      name: "employeeName",
      fullWidth: true,
      size: "small",
    },
  },
  {
    gridlength: 6,
    label: "Postion",
    otherOptions: {
      label: "Postion",
      name: "postion",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "all", label: "all" }],
  },
  {
    gridlength: 6,
    label: "Line Manager",
    otherOptions: {
      label: "Line Manager",
      name: "lineManager",
      fullWidth: true,
      size: "small",
    },
    options: [{ value: "john", label: "john" }],
  },
];
