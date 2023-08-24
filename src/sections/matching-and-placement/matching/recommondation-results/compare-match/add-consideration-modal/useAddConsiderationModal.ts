import { useRouter } from "next/router";
import { useState } from "react";

export const useAddConsiderationModal = (setIsAddConsiderationModalOpen: any) => {
  const route = useRouter();
  const [selectedList, setSelectedList] = useState("");
  const [addSelectedList, setAddSelectedList] = useState<any>({});

  const handleSelectedList = (item: any) => {
    setSelectedList(item.id);
    setAddSelectedList(item);
  };

  const handleSubmit = () => {
    if (selectedList) {
      setIsAddConsiderationModalOpen(false);
      route.push({ pathname: `/matching/recommondations-result/compare-match/consideration-list`, query: { name: addSelectedList?.title } });
    }
  };

  return {
    handleSelectedList,
    selectedList,
    handleSubmit,
  };
};
