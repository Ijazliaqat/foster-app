
import React from 'react'
import {Dialog, DialogContent, Grid, Typography, styled,Box } from '@mui/material';
import Image from 'next/image'
import HowItWorkImage from '../../../../assets/svg/matching/HowWorksImg.svg'

interface IProps {
    open: boolean;
    handleClose: () => void;
    title: string,

}
const HowItWorkModal = (props: IProps) => {
    const { open, handleClose, title } = props;
    const ModalContent = styled(DialogContent)`
    width: 900px;
    height: 682px;
  `;

    return (

        <>
            <Dialog open={open} onClose={handleClose} maxWidth={'md'}>
                <ModalContent>
                    <Typography component={'p'} sx={{ fontWeight: 700, fontSize: '16px', textAlign: 'center' }}>
                        {title}
                    </Typography>
                    <Grid container  mt={5}>
                    <Grid item lg={12} xs={12} >
                        <Box sx={{width:"840px"}}>
                    <Image src={HowItWorkImage} alt="Matching & Placment Algrothim Image"
                     style={{width:"100%",height:"100%"}} />
                     </Box>
                    </Grid>
                    </Grid>
                </ModalContent>
            </Dialog>
        </>
    )
}

export default HowItWorkModal

