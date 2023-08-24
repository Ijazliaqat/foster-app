import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const useAllegationManagementTable = () => {
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
  const route = useRouter();
  const tableHeaderRef = useRef();

  const allegationRoute = "/safeguarding/child-protection/allegation-management";

  const handleTableAction = (action: any, row: any) => {
    if (action === "delete") setIsDeleteModal(true);
    if (action === "edit" || action === "view") route.push({ pathname: `${allegationRoute}/${row._id}`, query: { action } });
  };
  return {
    handleTableAction,
    isDeleteModal,
    tableHeaderRef,
    route,
    allegationRoute,
    setIsDeleteModal
  };
};
