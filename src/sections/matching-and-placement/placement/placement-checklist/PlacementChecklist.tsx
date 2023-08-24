import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'
import { usePlacementChecklist } from './usePlacementChecklist';
import AddIcon from "../../../../assets/svg/add-icon.svg"
import Image from 'next/image';
import PlacementDialogbox from './placement-dialogbox/PlacementDialogbox';

const PlacementChecklist = () => {
    const { handleChecked, isAddModalOpen, setIsAddModalOpen, handleAddPlacementRecord, addPlacementRecord, setAddPlacementRecord, checklistData } = usePlacementChecklist();
    return (
        <>
            <Box sx={styles.placementWrapper}>
                <Box sx={styles.header}>
                    <Typography component="h2" sx={styles.headerHeading}>Placement Meeting record</Typography>
                </Box>
                <Box sx={styles.placementContent}>
                    {checklistData.map((item, index: number) => (
                        <Box sx={styles.checkboxWrapper} key={index}>
                            <Typography component={'label'} sx={styles.label} htmlFor={item.label}>{item.label}</Typography>
                            <Checkbox name={item.label} checked={item.isChecked} id={item.label} onChange={() => handleChecked(index)} />
                        </Box>
                    ))}
                    <Box sx={styles.addBtn} onClick={() => setIsAddModalOpen(true)}>
                        <Image src={AddIcon} alt='add-icon' />
                        <Typography component={'p'} sx={styles.label}>Add</Typography>
                    </Box>
                </Box>
            </Box>
            <PlacementDialogbox isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} handleAddPlacementRecord={handleAddPlacementRecord} addPlacementRecord={addPlacementRecord} setAddPlacementRecord={setAddPlacementRecord} />
        </>
    )
}

export default PlacementChecklist;

const styles = {
    placementWrapper: { backgroundColor: "#fff", boxShadow: "2px 4px 7px 2px #0E918C33", borderRadius: "10px", px: 1, py: 2 },
    header: { backgroundColor: "#E9E9E9", borderRadius: "10px 10px 0px 0px", px: 1.5, py: 2 },
    headerHeading: { fontSize: "16px", fontWeight: 600, color: "#212529" },
    placementContent: { width: "100%", maxWidth: "1200px", px: 2, py: 2 },
    checkboxWrapper: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    label: { fontSize: "16px", fontWeight: 500, color: "#000000", },
    addBtn: { display: "flex", alignItems: "center", gap: "10px", pt: 1, cursor: "pointer" },
    addLabel: { fontSize: "16px", fontWeight: 500, color: "#000000", m: 0 }
}