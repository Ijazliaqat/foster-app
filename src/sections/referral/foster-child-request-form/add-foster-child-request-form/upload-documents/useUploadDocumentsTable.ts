import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export const useUploadDocumentsTableData = () => {
  const [IsDeleteModal, setIsDeleteModal] = useState(false);
  const [IsOpenDocuementModal, setIsOpenDocuementModal] = useState(false);
  const [actionType, setActionType] = useState('add');
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();

  return {
    IsDeleteModal,
    setIsDeleteModal,
    IsOpenDocuementModal,
    setIsOpenDocuementModal,
    tableHeaderRefTwo,
    router,
    actionType,
    setActionType
  };
};
