import { Children } from "react";
export const EHCPINFOTABSDATA = ["EHCP ", "Document(s)"];
export const StatutoryMedicalTypeTabsDataFunction = (type: any) =>
  Children.toArray([
    type,
    <p>
      document <span style={{ fontSize: "smaller" }}>(&#115;)</span>{" "}
    </p>,
  ]);
