import { useState } from "react";
import { placementChecklistData } from ".";

export const usePlacementChecklist = () => {
  const [checklistData, setChecklistData] = useState(placementChecklistData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [addPlacementRecord, setAddPlacementRecord] = useState<any>("");
  console.log("checklistData", checklistData);

  const handleChecked = (index: any) => {
    setChecklistData((prevData: any) => {
      const newData = [...prevData];
      newData[index].isChecked = !newData[index].isChecked;
      return newData;
    });
  };

  const handleAddPlacementRecord = (e: any) => {
    addPlacementRecord && setIsAddModalOpen(false);
    const data:any = {
      label: addPlacementRecord, isChecked: false
    }
    checklistData.push(data);
  };

  return {
    handleChecked,
    isAddModalOpen,
    setIsAddModalOpen,
    handleAddPlacementRecord,
    addPlacementRecord,
    setAddPlacementRecord,
    checklistData,
  };
};
