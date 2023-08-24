export const FRBFilterData = [
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
      default:"select"
    },
    options: [
     
      { value: 'all', label: 'all' }
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
      { value: 'signed Date', label: 'signed Date' }
    ],
  },

];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/21' },
      { label: 'date to', value: '03/11/21' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'ouow3uq4z901x098' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    socialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    createdDate: '03/10/21',
    createdBy: 'john doe',
    modifiedDate: '03/10/21',
    modifiedBy: 'john doe',
  }
]