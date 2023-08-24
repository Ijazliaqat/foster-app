import TableDropdown from "@root/components/Table/collapsible-table/table-dropdown";
import React, { useRef, useState } from "react";
export const SafeguardingMeasureColumns = [
  { id: '1', title: 'Foster Carer Name', render: (data: any) => <span>{data.fosterCarerName}</span> },
  { id: '2', title: 'Safeguarding  Training', render: (data: any) => <span>{data.safeguardingTraining}</span> },
  { id: '3', title: 'Safeguarding Assessment', render: (data: any) => <span>{data.safeguardingAssessment}</span> },
  { id: '4', title: "Safeguarding Approval", render: (data: any) => <span>{data.safeguardingApproval}</span> },
  { id: '5', title: 'Safeguarding  Post Approval', render: (data: any) => <span>{data.safeguardingPostApproval}</span> },
]
export const SafeguardingMeasureInnerColums = [
  { id: '1', title: 'Before Placement - Criteria', render: (data: any) => <span>{data.beforePlacementCriteria}</span> },
  { id: '2', title: 'Status', render: (data: any) => <TableDropdown status={data.status} handleChange={(val: string) => console.log(val)} />  },
  { id: '3', title: 'Date', render: (data: any) =><span>{data?.date}</span> } ,
  { id: '4', title: 'Comments', render: (data: any) => <span>{data?.comments}</span> },
  { id: '5', title: 'Other Documents / Evidence', render: (data: any) => (<span>{data?.otherDocumentsEvidence}</span>) },
]
export const useSafeguardingMeasuresTakenTable = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const tableHeaderRef = useRef();
  return {
    isShareModalOpen,
    setIsShareModalOpen,
    tableHeaderRef,
    
  };
};
