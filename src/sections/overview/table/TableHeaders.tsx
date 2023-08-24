import TableHeader from "@root/components/TableHeader";
import { useRef } from "react";

// mui
import { Button, Typography } from "@mui/material";

// ----------------------------------------------------------------------

const SELECT_FILTERS = [
  {
    key: "refereeType",
    label: "Referee Type",
    options: [{ label: "test", value: "test-value" }],
  },
  {
    key: "availability",
    label: "Availability",
    options: [{ label: "Available", value: "available" }],
  },
];

// ----------------------------------------------------------------------

export default function TableHeaders() {
  const tableHeaderRef = useRef<any>();
  const tableHeaderRefTwo = useRef<any>();
  const tableHeaderRefThree = useRef<any>();

  return (
    <>
      <Typography variant="h4">Table Headers</Typography>
      <TableHeader
        ref={tableHeaderRef}
        title="Questionaire"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Personal Info"
        searchKey="search"
        showAddBtn
        showDeleteBtn
        onAdd={() => {
          alert("add works");
        }}
        onDelete={() => {
          alert("delete works");
        }}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <TableHeader
        disabled
        ref={tableHeaderRefThree}
        title="Carer Address History (Disabled)"
        searchKey="search"
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => {
          alert("add works");
        }}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <Button
        onClick={() => {
          tableHeaderRefThree.current.onCleared();
        }}
      >
        Clear
      </Button>
    </>
  );
}
