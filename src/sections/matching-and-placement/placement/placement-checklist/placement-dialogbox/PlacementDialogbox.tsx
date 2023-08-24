import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React from 'react'

const PlacementDialogbox = (props: any) => {
    const { isAddModalOpen, setIsAddModalOpen, handleAddPlacementRecord, addPlacementRecord, setAddPlacementRecord } = props;

    return (
        <Dialog
            open={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            fullWidth={true}
            maxWidth="sm"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box sx={{ p: 2 }}>
                <Typography component={'h2'} sx={{ fontSize: "16px", fontWeight: 600, color: "#000", pb: 3 }}>Add New Meeting Record</Typography>
                <TextField sx={{ mt: 0.3 }} label="Record Title" name="addLabel" size="small" fullWidth onChange={(e) => setAddPlacementRecord(e.target.value)} />
                <Box sx={{ pt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!addPlacementRecord}
                        onClick={handleAddPlacementRecord}
                    >
                        Submit
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => { setIsAddModalOpen(false); setAddPlacementRecord('') }}
                        sx={{
                            ml: 2,
                            backgroundColor: "#F6830F",
                            "&:hover": { backgroundColor: "#F6830F" },
                        }}
                    >
                        Cancel
                    </Button>

                </Box>
            </Box>

        </Dialog>
    )
}

export default PlacementDialogbox