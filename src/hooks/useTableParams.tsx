import { useState } from "react";

export function useTableParams(defaultParams = {}) {
  const [params, setParams] = useState<any>({
    page: 1,
    offset: 0,
    ...defaultParams,
  });

  const headerChangeHandler = (data: any) => {
    setParams((prev: any) => ({
      page: prev.page,
      offset: prev.offset,
      ...data,
    }));
  };

  const pageChangeHandler = (pageNo: number) => {
    setParams((prev: any) => ({
      ...prev,
      page: pageNo,
      offset: (pageNo - 1) * 10,
    }));
  };

  const sortChangeHandler = ({ id, sortOrder }: any) => {
    setParams((prev: any) => {
      const updatedParams = {
        ...prev,
        sortData: {
          ...prev.sortData,
          [id]: sortOrder,
        },
      };

      let sortArr = [];
      const order: any = { "1": "asc", "-1": "desc" };

      for (const sortItem in updatedParams.sortData) {
        const orderNum = updatedParams.sortData[sortItem];
        const orderKey = order[orderNum];
        sortArr.push(`${sortItem}:${orderKey}`);
      }

      updatedParams.sort = sortArr.toString();

      return updatedParams;
    });
  };

  const { sortData, ...allParams } = params;

  return {
    params: allParams,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
}
