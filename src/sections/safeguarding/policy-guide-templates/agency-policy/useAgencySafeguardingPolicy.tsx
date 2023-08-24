import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";

export const useAgencySafeguardingPolicy = () => {
  const path = "/safeguarding/policy-guide-templates/agency-policy/form";
  const router = useRouter();
  const theme = useTheme();
  let tableHeaderRefTwo = useRef<any>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleClose = () => setIsDeleteModalOpen(false);
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "dewnload":
        alert("Download");
        break;
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </Box>
        );
      },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.policyDocument,
      id: "policyDocument",
      cell: (info: any) => info.getValue(),
      header: () => <span>Safeguarding Policy Document</span>,
    },
    {
      accessorFn: (row: any) => row.uploadedDate,
      id: "uploadedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Uploaded</span>,
    },
    {
      accessorFn: (row: any) => row.description,
      id: "description",
      cell: (info: any) => info.getValue(),
      header: () => <span>Description</span>,
    },
    {
      accessorFn: (row: any) => row.version,
      id: "version",
      cell: (info: any) => info.getValue(),
      header: () => <span>Version</span>,
    },
    {
      accessorFn: (row: any) => row.authorRole,
      id: "authorRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Author (Role)</span>,
    },
    {
      accessorFn: (row: any) => row.approverRole,
      id: "approverRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approver (Role)</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {["view", "delete", "edit", "download"].map((action: string) => (
            <span key={action} style={{ flexShrink: 0 }}>
              <TableAction
                type={action}
                onClicked={() => handleAction(action, info.row.original.id)}
              />
            </span>
          ))}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("data", data);
    alert(
      JSON.stringify(
        {
          ...data,
        },
        null,
        2
      )
    );
    reset();
  };
  return {
    columns,
    theme,
    router,
    isDeleteModalOpen,
    tableHeaderRefTwo,
    handleClose,
    isSubmitting,
    methods,
    handleSubmit,
    onSubmit,
  };
};
