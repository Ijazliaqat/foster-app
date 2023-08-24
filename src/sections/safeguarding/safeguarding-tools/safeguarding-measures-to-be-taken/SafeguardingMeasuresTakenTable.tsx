import React from "react";
import TableHeader from "@root/components/TableHeader";
import CollapsibleTable from "@root/components/Table/collapsible-table";
import ShareModal from "@root/components/modal/shareModal";
import {rowsData} from ".";
import { SafeguardingMeasureColumns, SafeguardingMeasureInnerColums, useSafeguardingMeasuresTakenTable } from "./useSafeguardingMeasuresTakenTable";

const SafeguardingMeasuresToBeTaken = () => {
  const { isShareModalOpen,
    setIsShareModalOpen,
    tableHeaderRef,} = useSafeguardingMeasuresTakenTable();
 
  
  return (
   
    <>
      <TableHeader
        ref={tableHeaderRef}
        title={"Safeguarding Measures (Before Child Placement )"}
        onShare={()=>{setIsShareModalOpen(true)}}
        onPrint={()=>{window.print()}}
        onChanged={(params: any) => {}}
        showAddBtn
        showPrintBtn
        showShareBtn
      />
      <CollapsibleTable
        requireCheckbox
        columns={SafeguardingMeasureColumns}
        innerColums={SafeguardingMeasureInnerColums}
        tableData={rowsData} 
      />
      {/* Share Modal */}
      <ShareModal
        open={isShareModalOpen}
        setOpen={() => setIsShareModalOpen(true)}
        handleClose={() => setIsShareModalOpen(false)}
        onSubmit={(data: any) => console.log("dada", data)}
        data={[{ email: "john@gmail.com" }]}
      />
    </>
  );
};

export default SafeguardingMeasuresToBeTaken;
