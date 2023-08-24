import { useTableParams } from '@root/hooks/useTableParams';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

export const useReviewOfficerReportsTable = () => {
  
    const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

//   const { data, isError, isLoading, isSuccess, isFetching } =
//     useGetFamilyPersonListQuery<any>({ params });
    console.log("pagination", params)

//   const [deleteList] = useDeleteFamilyPersonListMutation();


  return {
    // data,
    // isError,
    // isLoading,
    // isSuccess,
    // isFetching,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler, 
  };
};
