export const viewReportsFilterData = [
    {
      gridlength: 6,
      label: 'Foster Carer',
      otherOptions: {
        label: 'Foster Carer',
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
        label: 'Child Name',
        otherOptions: {
          label: 'Child Name',
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
      label: 'Relative Name',
      otherOptions: {
        label: 'Relative Name',
        name: 'relativeName',
        fullWidth: true,
        size: 'small',
      },
      options: [
        { value: 'all', label: 'all' }
      ],
    },
    {
        gridlength: 6,
        label: 'Relationship to Child',
        otherOptions: {
          label: 'Relationship to Child',
          name: 'relationshipToChild',
          fullWidth: true,
          size: 'small',
        },
        options: [
          { value: 'all', label: 'all' }
        ],
      },
    {
      gridlength: 6,
      label: 'Select Search Date',
      otherOptions: {
        label: 'Select Search Date',
        name: 'selectSearchDate',
        fullWidth: true,
        size: 'small',
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
        { value: 'Today', label: 'Today' }
      ],
    },
  ];
  
  export const tableSubHeader = [
    {
      id: '1',
      subData: [
        { label: 'Foster Carer', value: 'Teri dactyl' },
        { label: 'region', value: 'Region 11' },
      ]
    },
    {
      id: '2',
      subData: [
        { label: 'Relative Name(Relation)', value: 'Aida bugg (Sister)' },
        { label: 'branch', value: 'Branch 12' },
      ]
    },
    {
      id: '3',
      subData: [
        { label: 'Child Name', value: 'Aida bugg' },
        { label: 'date from', value: '03/11/21' },
        { label: 'date to', value: '03/11/21' },
      ]
    },
  ];
  
  export const tableMockData = [
    {
      id: '1',
      srNo: '1',
      fosterCarer: 'Teri Dactyl',
      relativeName: 'john doe',
      childName: 'Teri Dactyl',
      signedDate: '03/10/21',
      createdDate: '03/10/21',
      createdBy: 'john doe',
      modifiedDate: '03/10/21',
      modifiedBy: 'john doe',
    }
  ]
