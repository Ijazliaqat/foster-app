import { Box, Grid, Typography } from '@mui/material'
import { useChildAdvocacy } from '../useChildAdvocacy'
import { childDetailsCardsData } from '..';

const ChildDetails = () => {
    const { router } = useChildAdvocacy();
    return (
        <Grid container spacing={2.4} mb={3}>
            {childDetailsCardsData?.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                    <Box onClick={() => router.push(item?.link)} sx={{ background: item?.bgColor, padding: "23px 20px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", minHeight: "94px" }}>
                        <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}>{item?.title}</Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default ChildDetails