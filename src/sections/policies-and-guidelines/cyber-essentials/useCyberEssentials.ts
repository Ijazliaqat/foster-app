import { useRouter } from "next/router";

// ===========================================================

export const useCyberEseentials = () => {
  const router = useRouter();
  const path = "/policies-and-guidelines/cyber-essentials/cyber-essentials-form";
  const handleAdd = (title: string) => {
    const isLastThree = title === "DPO and 6 Core Principles" || title === "Cyber Essentials" || title === "Cyber Essentials Checklist";
    const shortenedTitle = isLastThree ? title : title.substring(0, 10);
    router.push({ pathname: path, query: { title: shortenedTitle } });
  };

  return {
    router,
    handleAdd,
  };
};
