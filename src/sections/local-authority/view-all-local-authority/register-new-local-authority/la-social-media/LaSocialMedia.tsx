import React from 'react';
import Image from 'next/image';
import AddIcon from "../../../../../assets/svg/local-authority/add-icon.svg"
import { Box, Grid } from '@mui/material'
import { laSocialMediaData } from '.'
import Link from 'next/link';
import AddLaSocialMedia from './add-la-social-media/AddLaSocialMedia';
import { useLaSocialMedia } from './useLaSocialMedia';

const LaSocialMedia = () => {
    const { isAddSocialMediaIcon, setIsAddSocialMediaIcon, route } = useLaSocialMedia()
    return (
        <>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    {laSocialMediaData.map((item: any, i: number) => (
                        <Grid item lg={2} md={3} sm={6} key={i}>
                            <Link href={item.link} target="_blank"><Image src={item.icon} alt="" style={{ width: "126px", height: "126px" }} /></Link>
                        </Grid>
                    ))}
                    {route.query.action !== 'view-local-authority' &&
                        <Grid item lg={2} md={3} sm={6}>
                            <Image src={AddIcon} alt="" style={{ cursor: "pointer", width: "126px", height: "126px" }} onClick={() => setIsAddSocialMediaIcon(true)} />
                        </Grid>
                    }
                </Grid>
            </Box>
            <AddLaSocialMedia isAddSocialMediaIcon={isAddSocialMediaIcon} setIsAddSocialMediaIcon={setIsAddSocialMediaIcon} />
        </>
    )
}

export default LaSocialMedia