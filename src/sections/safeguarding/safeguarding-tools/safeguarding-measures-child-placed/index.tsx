import TableDropdown from "@root/components/Table/collapsible-table/table-dropdown"

export const columns = [
    { id: '1', title: 'Foster Child Name', render: (data: any) => <span>{data.fosterChildName}</span> },
    { id: '2', title: 'Risk assessments', render: (data: any) => <span>{data.riskAssessments}</span> },
    { id: '3', title: 'Placement Planning Meeting', render: (data: any) => <span>{data.planningMeeting}</span> },
    { id: '4', title: "Touch Guidance Training for Child", render: (data: any) => <span>{data.guidanceTraining}</span> },
    { id: '5', title: 'Individual Child Care strategy', render: (data: any) => <span>{data.childCareStrategy}</span> },
]

export const innerColums = [
    { id: '1', title: 'During Placement - Criteria', render: (data: any) => <span>{data.duringPlacement}</span> },
    { id: '2', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} /> },
    { id: '3', title: 'Date', render: (data: any) => <span>{data?.date}</span> },
    { id: '4', title: 'Comments', render: (data: any) => <span>{data?.comments}</span> },
    { id: '5', title: 'Other Documents / Evidence ', render: (data: any) => (<span>{data?.otherDocument}</span>) },
]

export const rowsData = [
    {
        _id: '1',
        fosterChildName: 'James Roy',
        riskAssessments: '12.11.2021',
        planningMeeting: "12.11.2021",
        guidanceTraining: '12.11.2021',
        childCareStrategy: '12.11.2021',
        subData: [
            {
                id: '1',
                duringPlacement: 'Risk assessments',
                status: "to do",
                date: '20/05/2021',
                comments: "See Risk assessments Document",
                otherDocument: "Foster Carer",
            }
        ]
    },
    {
        _id: '2',
        fosterChildName: 'James Roy',
        riskAssessments: '12.11.2021',
        planningMeeting: "12.11.2021",
        guidanceTraining: '12.11.2021',
        childCareStrategy: '12.11.2021',
        subData: [
            {
                id: '1',
                duringPlacement: 'Risk assessments',
                status: "to do",
                date: '20/05/2021',
                comments: "See Risk assessments Document",
                otherDocument: "Foster Carer",
            }
        ]
    },
]