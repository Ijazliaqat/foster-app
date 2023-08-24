import TableDropdown from "@root/components/Table/collapsible-table/table-dropdown";

// data
export const columns = [
    { id: '1', title: 'Case ID', render: (data: any) => <span>{data.caseId}</span> },
    { id: '2', title: 'Child Name', render: (data: any) => <span>{data.childName}</span> },
    { id: '3', title: 'Allegation Type', render: (data: any) => <span>{data.allegationType}</span> },
    { id: '4', title: "Allegation Description Document", render: (data: any) => <span>{data.document}</span> },
    { id: '5', title: 'Person involved in Exploitation  ( Role )', render: (data: any) => <span>{data.person}</span> },
    { id: '6', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} /> },
]

export const innerColums = [
    { id: '1', title: 'Stage', render: (data: any) => <span>{data.stage}</span> },
    { id: '2', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} /> },
    { id: '3', title: 'Date', render: (data: any) => <span>{data?.date}</span> },
    { id: '4', title: 'Comments', render: (data: any) => <span>{data?.comments}</span> },
    { id: '6', title: 'Performed by  (Role)', render: (data: any) => (<span>{data?.role}</span>) },
    { id: '7', title: 'Stake Holders (Role ) ', render: (data: any) => (<span>{data?.holders}</span>) },
    { id: '8', title: 'Other Documents / Evidence ', render: (data: any) => (<span>{data?.document}</span>) },
]

export const rowsData = [
    {
        _id: '1',
        caseId: 'Sf-1234',
        childName: 'Ron Corner',
        allegationType: "Emotional Abuse",
        document: 'Child criminal exploitation.pdf',
        person: 'Tom Hanks ( Foster Carer )',
        status: "in progress",
        subData: [
            {
                id: '1',
                stage: 'Responding to Abuse and Neglect',
                status: "to do",
                date: '20/05/2021',
                comments: "Initial Response & Action taken",
                role: "Foster Carer",
                holders: "Albus Dumbledore(Social Worker)",
                document: ""
            }
        ]
    },
    {
        _id: '2',
        caseId: 'SF-89797',
        childName: 'Jack Corner',
        allegationType: "Medical Neglect of a Handicapped Infant",
        document: 'Child Sexual Abuse_12122021.pdf',
        person: 'Reed Roy  ( School Teacher )',
        status: "to do",
        subData: [
            {
                id: '1',
                stage: 'Responding to Abuse and Neglect',
                status: "to do",
                date: '20/05/2021',
                comments: "Initial Response & Action taken",
                role: "Foster Carer",
                holders: "Albus Dumbledore(Social Worker)",
                document: ""
            }
        ]
    },
]

export { default as AllegationManagementList } from "./AllegationManagementTable";
