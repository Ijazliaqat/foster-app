import React from "react";
import { useGetAboutDetailsQuery } from "@root/services/userApi";

export const useAbout = () => {
  const { data, isLoading }: any = useGetAboutDetailsQuery({});
  const [arrayItems, setArrayItems] = React.useState(4);
  const [toggleList, setToggleList] = React.useState(false);
  const handleDropDown = () => {
    if (arrayItems === 4) {
      setArrayItems(data?.length);
      setToggleList(true);
    } else {
      setArrayItems(4);
      setToggleList(false);
    }
  };
  //Function to Add Gap Between Object Keys
  function formatObjectKeys(obj: any) {
    const formattedObj: any = {};
    const regex = /((?<=[a-z])([A-Z])|([A-Z])(?=[a-z]))/g;
    Object.entries(obj || {}).forEach(([key, value]) => {
      const formattedKey = key.replace(regex, " $1");
      formattedObj[formattedKey] = value;
    });
    return formattedObj;
  }
  //Storing Updated Keys
  const formattedData = formatObjectKeys(data?.data);
  return {
    formattedData,
    data,
    isLoading,
    arrayItems,
    setArrayItems,
    toggleList,
    setToggleList,
    handleDropDown,
  };
};
