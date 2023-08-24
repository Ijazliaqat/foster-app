import Image from "next/image";
import router from "next/router";
import { Box, Button, Checkbox, useTheme } from "@mui/material";
import FosterImg from "../../../../assets/svg/advocacy/advocacyImg.svg";

// ===================================================================================

export const useFosterCarerTable = () => {
  const theme = useTheme();

  const SELECT_FILTERS = [
    {
      key: "selectCarer",
      label: "Select Carer",
      options: [{ label: "option 1", value: "options" }],
    },
  ];

  const fosterCarerColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.img,
      id: "img",
      cell: (info: any) => (
        <Box>
          <Image width={40} height={40} style={{ borderRadius: "50px", objectFit: "cover" }} src={FosterImg} alt="" />
        </Box>
      ),
      header: () => <span>Img</span>,
    },
    {
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.areaLocality,
      id: "areaLocality",
      cell: (info: any) => info.getValue(),
      header: () => <span>Area/Locality</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.gender,
      id: "gender",
      cell: (info: any) => info.getValue(),
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.areaOffice,
      id: "areaOffice",
      cell: (info: any) => info.getValue(),
      header: () => <span>Area Office</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box>
          <Button
            variant="contained"
            onClick={() => router.push({ pathname: "/advocacy/carer/dashboard", query: { id: info.row.original.id } })}
          >
            View Details
          </Button>
        </Box>
      ),
      header: () => <span>Details</span>,
      isSortable: false,
    },
  ];

  return {
    fosterCarerColumns,
    theme,
    SELECT_FILTERS,
  };
};
