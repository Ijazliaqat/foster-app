import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import AddIcon from "../../../../../assets/svg/panel/add-icon.svg";
import Image from 'next/image';
import { additionalInformation } from '.';
import ChecklistAdditionalForm from './ChecklistAdditionalForm';
import { useChecklistAdditionalForm } from './useChecklistAdditionalForm';

const ChecklistAdditionalInformation = () => {
    const theme = useTheme();

    const {
        isAddModalOpen,
        setIsAddModalOpen
      } = useChecklistAdditionalForm();

    return (
        <Box>
            <Box sx={styles.checklistWrap}>
                <Typography component="h2" sx={styles.heading(theme)}>Checklist of additional information which may be provided by the agency</Typography>
                <Image src={AddIcon} alt="" style={{ cursor: "pointer" }} onClick={() => setIsAddModalOpen(true)} />
            </Box>
            <Box sx={{ pt: "25px" }}>
                {additionalInformation.map((item) => (
                    <Typography component="p" sx={styles.title(theme.palette.mode)} key={item.id}>{item.title}</Typography>
                ))}
            </Box>
            <ChecklistAdditionalForm isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
        </Box>
    )
}

export default ChecklistAdditionalInformation;

const styles = {
    checklistWrap: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    heading: (theme: any) => ({ fontSize: "16px !important", fontWeight: "600", lineHeight: "19px", color: theme.palette.primary.main }),
    title: (mode: any) => ({ fontSize: "14px !important", fontWeight: "400", lineHeight: "16px", color: mode === 'light' ? '#1D1D1D' : '#e1dede', borderTop: "1px solid #DBDBDB", padding: "15px 0" })
}