import CustomAccordian from "@root/components/CustomAccordian";
import React from "react";
import { ifaData } from "./ifaData";

const IFA = ({ onDelete, onEdit }: any) => {
  return (
    <>
      <CustomAccordian
        showBtn={true}
        data={ifaData}
        handleRowDelete={onDelete}
        handleTitleEdit={onEdit}
      />
    </>
  );
};

export default IFA;
