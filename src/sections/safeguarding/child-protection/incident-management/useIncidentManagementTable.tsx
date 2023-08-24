import { useState } from "react";
import { useRouter } from "next/router";
import { TableDemoData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";

export const useIncidentManagementTable = () => {
  const path = "/safeguarding/child-protection/incident-management/incident-management-form";
  const [DeleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => setDeleteModal(!DeleteModal);
  const router = useRouter();
  const [data, setData] = useState(TableDemoData);
  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "add":
        router.push({ pathname: path });
        break;
      case "edit":
        router.push({ pathname: `${path}/${id}`, query: { action: "edit" } });
        break;
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      case "delete":
        handleDeleteModal();
        break;
      case "print":
        window.print();
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
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
      accessorFn: (row: any) => row.case_id,
      id: "Sr. NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Case ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.childName,
      id: "childName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.incidentCategory,
      id: "incidentCategory",
      cell: (info: any) => info.getValue(),
      header: () => <span>Incident Category</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.incidentDescriptionDocument,
      id: "incidentDescriptionDocument",
      cell: (info: any) => info.getValue(),
      header: () => <span>Incident Description Document</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personInvolved,
      id: "personInvolved",
      cell: (info: any) => info.getValue(),
      header: "Person involved in Exploitation (Role)",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* <ActionModal content={info} /> */}

          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            {["edit", "delete", "view", "print"].map((action: string) => (
              <span key={action} style={{ flexShrink: 0 }}>
                <TableAction
                  type={action}
                  onClicked={() => handleAction(action, info.row.original.id)}
                />
              </span>
            ))}
          </Box>
          <DeleteModel
            open={DeleteModal}
            handleClose={handleDeleteModal}
            onDeleteClick={handleDeleteModal}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  const handleDelete = () => {
    alert("deleted successfully");
    setDeleteModal(!DeleteModal);
  };
  return {
    data,
    router,
    handleDelete,
    columns,
  };
};
