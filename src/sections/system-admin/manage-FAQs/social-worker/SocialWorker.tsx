import CustomAccordian from "@root/components/CustomAccordian";
import React from "react";
import { socialWorkerData } from "./socialWorkerData";

const SocialWorker = ({ onDelete, onEdit }: any) => {
  return (
    <>
      <CustomAccordian
        showBtn={true}
        data={socialWorkerData}
        handleRowDelete={onDelete}
        handleTitleEdit={onEdit}
      />
    </>
  );
};

export default SocialWorker;
