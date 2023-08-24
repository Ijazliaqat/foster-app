import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

// =================================================================

export const useTrainingDetailsTable = () => {
  const router = useRouter();
  const theme: any = useTheme();

  const columns = [
    {
      accessorFn: (row: any) => row.courseCarer,
      id: "courseCarer",
      cell: (info: any) => info.getValue(),
      header: () => <>Course Attended Carer</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.coursesAttended,
      id: "coursesAttended",
      cell: (info: any) => info.getValue(),
      header: () => <>Courses Attended</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateOfAttendence,
      id: "dateOfAttendence",
      cell: (info: any) => info.getValue(),
      header: () => <>Date of Attendance</>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courseStatus,
      id: "courseStatus",
      cell: (info: any) => info.getValue(),
      header: () => <>Course Status</>,
      isSortable: true,
    },
  ];

  return { theme, router, columns };
};
