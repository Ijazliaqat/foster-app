import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, IconButton, useTheme } from "@mui/material";
import ActionIcon from "../../../assets/img/audits/action-icon.png";

// =================================================================

export const useAuditorsListTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const theme: any = useTheme();

  const SELECT_FILTERS = [
    {
      key: "userRole",
      label: "Select User Role",
      options: [
        { label: "All", value: "all" },
        { label: "Chile", value: "child" },
        { label: "Carer", value: "carer" },
        { label: "Social Worker", value: "social-worker" },
      ],
    },
  ];

  const handleAction = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <>Sr.No</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.photo,
      id: "photo",
      cell: (info: any) => (
        <Image
          width={40}
          height={40}
          style={{ borderRadius: "50px", objectFit: "cover", margin: "0px auto" }}
          src={info.getValue()}
          alt=""
        />
      ),
      header: () => <>Image</>,
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <>Name</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "gender",
      cell: (info: any) => info.getValue(),
      header: () => <>Gender</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.areaLocality,
      id: "areaLocality",
      cell: (info: any) => info.getValue(),
      header: () => <>Area/Locality</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.areaOffice,
      id: "areaOffice",
      cell: (info: any) => info.getValue(),
      header: () => <>Area Office</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <>Role</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.auditType,
      id: "auditType",
      cell: (info: any) => info.getValue(),
      header: () => <>Audit Type</>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <IconButton>
          <Image src={ActionIcon} alt="icon" onClick={handleAction} />
        </IconButton>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return { theme, router, columns, SELECT_FILTERS, isModalOpen, handleCloseModal };
};
