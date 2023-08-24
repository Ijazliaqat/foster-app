import CustomAccordian from "@root/components/CustomAccordian";
import { fosterCarerData } from "./fosterCarerData";

const FosterCarer = ({ onDelete, onEdit }: any) => {
  return (
    <>
      <CustomAccordian
        showBtn={true}
        data={fosterCarerData}
        handleRowDelete={onDelete}
        handleTitleEdit={onEdit}
      />
    </>
  );
};

export default FosterCarer;
