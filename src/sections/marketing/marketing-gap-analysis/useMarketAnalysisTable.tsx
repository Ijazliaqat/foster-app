import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

// =================================================================

export const useMarketAnalysisTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const theme: any = useTheme();

  const handleAction = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      accessorFn: (row: any) => row.competitor,
      id: "competitor",
      cell: (info: any) => info.getValue(),
      header: () => <>Competitor</>,
    },
    {
      accessorFn: (row: any) => row.location,
      id: "location",
      cell: (info: any) => info.getValue(),
      header: () => <>Location</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.swotTopic,
      id: "swotTopic",
      cell: (info: any) => info.getValue(),
      header: () => <>SWOT Topic</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.swotDuration,
      id: "swotDuration",
      cell: (info: any) => info.getValue(),
      header: () => <>SWOT Duration</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.swotCompetitor,
      id: "swotCompetitor",
      cell: (info: any) => (
        <Image
          width={44}
          height={44}
          onClick={() => router.push("/marketing/market-gap-analysis/swot-competitor")}
          style={{ cursor: "pointer", objectFit: "cover", margin: "0px auto" }}
          src={info.getValue()}
          alt=""
        />
      ),
      header: () => <>SWOT (Competitor)</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.researcherRole,
      id: "researcherRole",
      cell: (info: any) => info.getValue(),
      header: () => <>Researcher (Role)</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <>Date</>,
      isSortable: true,
    },
  ];

  return { theme, router, columns, isModalOpen, handleCloseModal };
};
