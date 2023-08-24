import CustomAccordian from "@root/components/CustomAccordian";
import React from "react";
import { fosterChildData } from "./fosterChildData";

const FosterChild = ({ onDelete, onEdit }: any) => {
  return (
    <>
      <CustomAccordian
        showBtn={true}
        data={fosterChildData}
        handleRowDelete={onDelete}
        handleTitleEdit={onEdit}
      />
    </>
  );
};

export default FosterChild;
