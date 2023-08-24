import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { safeguardingTempltesData } from '.'

const SafeguardingTemplates = () => {

  const router = useRouter()

  return (
    <Grid container spacing={2}>
      {safeguardingTempltesData?.map((item, index) => (
        <Grid item xs={12} xl={6} key={index}>
          <Box onClick={() => router.push(item?.link)} sx={{ background: item?.bgColor, padding: "36px 40px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "60px", cursor: "pointer" }}>
            <Image width={88} height={88} src={item?.icon} alt="icon" />
            <Typography sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}>{item?.text}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SafeguardingTemplates
