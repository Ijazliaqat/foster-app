import { useRouter } from "next/router";
import { useRef, useState } from "react";

export const useSafeguardingMeasuresChildTable = () => {
  const route = useRouter();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const tableHeaderRef = useRef();
  const allegationRoute = "/safeguarding/child-protection/allegation-management";
  return {
    route,
    isShareModalOpen,
    setIsShareModalOpen,
    tableHeaderRef,
    allegationRoute
  };
};
