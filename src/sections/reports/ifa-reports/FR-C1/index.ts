export const FRC1FilterData = [
  {
    gridlength: 6,
    label: "Child's Name (DOB)",
    otherOptions: {
      label: "Child's Name (DOB)",
      name: 'childName',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    label: 'Supervising Social Worker',
    otherOptions: {
      label: 'Supervising Social Worker',
      name: 'supervisingSocialWorker',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    label: 'Foster Carer(s)',
    otherOptions: {
      label: 'Foster Carer(s)',
      name: 'fosterCarer',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },
  {
    gridlength: 6,
    label: 'Select Search Date',
    otherOptions: {
      label: 'Select Search Date',
      name: 'searchDate',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'created Date', label: 'created Date' }
    ],
  },
  {
    gridlength: 6,
    label: 'Date Type',
    otherOptions: {
      label: 'Date Type',
      name: 'dateType',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },

];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: "child's name (DOB)", value: 'timmy toppee (10/10/2023)' },
      { label: 'region', value: 'region 11' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'branch 12' },
    ]
  },
  {
    id: '3',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/2023' },
      { label: 'date to', value: '03/11/2023' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    childName: 'timmy toppee (10/10/2023)',
    socialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    createdDate: '03/10/21',
    createdBy: 'john doe',
  }
]