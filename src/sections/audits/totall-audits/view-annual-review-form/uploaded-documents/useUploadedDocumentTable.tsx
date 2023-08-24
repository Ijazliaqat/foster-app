import Image from "next/image";
import { useRouter } from "next/router";
import { Box, IconButton, useTheme } from "@mui/material";
import ActionIcon from "../../../../../assets/img/audits/action-icon.png";
import TableAction from "@root/components/TableAction";
import { useState } from "react";

// =================================================================

export const useUploadedDocumentTable = () => {
  const [isUploadModal, setIsUploadModal] = useState(false);
  const router = useRouter();
  const theme: any = useTheme();

  const handleModal = () => setIsUploadModal(!isUploadModal);
  const handleModalSubmit = (data: any) => {
    console.log(data);
  };

  const columns = [
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <>Document Name</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <>Document Type</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <>Document Date</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <>Person Uploaded</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <>Password</>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="download"
            onClicked={() =>
              router.push({
                pathname: "",
                query: { action: "download", id: "" },
              })
            }
          />
          <TableAction size="small" type="view" onClicked={handleModal} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return { theme, router, columns, handleModal, handleModalSubmit, isUploadModal };
};
