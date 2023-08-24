import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useRef } from "react";

export const useSupervisoryVisit = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      socialWorker: "10/10/2021",
      dateVisit: "10/10/2021",
      visitType: "Text",
      status: "Text",
      locked: "Text",
      childOutcome: "Text",
      fcSignature: "File",
    },
    {
      srNo: 2,
      socialWorker: "10/10/2021",
      dateVisit: "11/10/2021",
      visitType: "Text",
      status: "Text",
      locked: "Text",
      childOutcome: "Text",
      fcSignature: "File",
    },
  ]);
  return {
    router,
    tableHeaderRefTwo,
    theme,
    data,
  };
};
