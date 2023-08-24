import { useState } from "react";

export const useStatutoryMedicalList = () => {
  const [sortType, setSortType] = useState<null | HTMLElement>(null);
  const [sortOrder, setSortOrder] = useState(false);
  const open = Boolean(sortType);
  const handleSortType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortType(event.currentTarget);
  };
  const sortTypeMenuItemClick = (items: any) => {
    setSortOrder(items);
    setSortType(null);
  };

  const sortArray = (
    items: any = [],
    propertyName: any,
    isDesc: any = false
  ) => {
    let cloneArray: undefined | any = [...items];

    const newItems = cloneArray.sort(
      (nextElement: any, previousElement: any) => {
        const nextValue = nextElement[propertyName]
          ?.replace(/\s+/g, "")
          ?.toLowerCase();
        const previousValue = previousElement[propertyName]
          ?.replace(/\s+/g, "")
          ?.toLowerCase();
        if (nextValue === previousValue) return 0;
        if (nextValue < previousValue) return isDesc ? 1 : -1;
        if (nextValue > previousValue) return isDesc ? -1 : 1;
        return 0;
      }
    );
    return newItems;
  };
  return {
    open,
    sortType,
    setSortType,
    handleSortType,
    sortTypeMenuItemClick,
    sortArray,
    sortOrder,
    setSortOrder,
  };
};
