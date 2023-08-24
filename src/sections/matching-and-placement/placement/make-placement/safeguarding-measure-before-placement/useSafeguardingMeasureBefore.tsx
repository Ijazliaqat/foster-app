import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

export const useSafeguardingMeasureBefore = () => {
    const theme: any = useTheme();

  const safeguardingMeasureColumns = [

        {
            accessorFn: (row: any) => row.carerName,
            id: "carerName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name</span>,

        },
        {
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date</span>,

        },
        {
            accessorFn: (row: any) => row.safeguardingCourseId,
            id: "safeguardingCourseId",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Course Id</span>,
        },
        {
            accessorFn: (row: any) => row.safeguardingCourseName,
            id: "safeguardingCourseName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Safeguarding Course Name</span>,
        },
        {
            accessorFn: (row: any) => 
            <Box sx={styles.ImgBoxStyled}><Image src={row.certificate} alt=" Document Icon"/></Box>,
            id: "certificate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Certificate</span>,
        },
        {
            accessorFn: (row: any) => row.issueDate,
            id: "issueDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Issue Date</span>,
        },
       
    ];

    return {
        safeguardingMeasureColumns,
        theme,
    }
}

// style
const styles = {
    ImgBoxStyled: { 
     display:'flex',
     justifyContent:'center',
     alignItems:'center', 
    },
}
