export const TableDemoData = [
  {
    sNO: "01",
    traineeName: "David Wiliams",
    trainingSessionTitle: "Social Worker Mandatory Course ",
    courseStatus: "Completed",
    assessmentStatus: "Qualified",
  },
  {
    sNO: "02",
    traineeName: "Bella Watson",
    trainingSessionTitle: "Urgent Mandatory Course  ",
    courseStatus: "Inprogress",
    assessmentStatus: "Not Qualified",
  },
  {
    sNO: "03",
    traineeName: "David Wiliams",
    trainingSessionTitle: "Social Worker Mandatory Course ",
    courseStatus: "Enrolled",
    assessmentStatus: "N/A",
  },
  {
    sNO: "04",
    traineeName: "Bella Watson",
    trainingSessionTitle: "Urgent Mandatory Course  ",
    courseStatus: "Completed",
    assessmentStatus: "Pending",
  },
  {
    sNO: "05",
    traineeName: "David Wiliams",
    trainingSessionTitle: "Social Worker Mandatory Course ",
    courseStatus: "Inprogress",
    assessmentStatus: "Not Qualified",
  },
]
export const SELECT_FILTERS = [

  {
    key: "courseType",
    label: "Course Type",
    options: [
      { label: "Qualified", value: "qualified" },
      { label: "Not Qualified", value: "notQualified" },
      { label: "N/A", value: "N/A" },
      { label: "Pending", value: "Pending" },
    ],
  },
  {
    key: "courseName",
    label: "Course Name",
    options: [
      { label: "Social Worker Mandatory Course", value: "Social Worker Mandatory Course" },
      { label: "Urgent Mandatory Course ", value: "Urgent Mandatory Course " }
    ],
  },
  {
    key: "courseStatus",
    label: "Course Status",
    options: [
      { label: "Completed", value: "Completed" },
      { label: "Inprogress", value: "Inprogress" },
      { label: "Enrolled", value: "Enrolled" },
    ],
  },
];