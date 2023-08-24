import React, { useRef, useState } from "react";
import PanelCaseListTable from "./PanelCaseListTable";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import { Card } from "@mui/material";

export default function PanelCaseList() {
  let [viewData, setViewData] = useState(false);
  let [formType, setFormType] = useState("");
  let router = useRouter();
  let tableHeaderRefTwo = useRef<any>();
  const changeView = (val: boolean, type: string) => {
    setViewData(val);
    setFormType(type);
  };
  return (
    <>
      <Card sx={{ p: 2 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Panel Case List"
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <PanelCaseListTable />
      </Card>
    </>
  );
}
