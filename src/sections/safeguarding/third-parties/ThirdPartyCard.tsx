import { Box, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ThirdPartyCard = (props: any) => {
  const { title, icon, background, children } = props;
  return (
    <Card sx={styles.card}>
      <CardContent sx={{ p: 0, height: "100%" }}>
        <Box
          sx={styles.cardHeader(background)}
        >
          <Typography sx={styles.title}>{title}</Typography>
          <Box sx={styles.imgDiv}><Image src={icon} alt='icon' height={52} width={52} /></Box>
        </Box>
        {children}
      </CardContent>
    </Card>
  )
}

export default ThirdPartyCard
const styles = {
  card: { p: 0, boxShadow: '2px 4px 7px rgba(253, 47, 83, 0.25)', height: '100%' },
  cardHeader: (background: any) => ({ background: background, display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '8px 15px' }),
  title: { fontSize: '20px', fontWeight: 700, color: '#fff' },
  imgDiv: { height: 55, width: 55, borderRadius: 50, background: '#fff', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)" },
  subItem: (theme: any) => ({ color: theme.palette.mode, fontSize: '12px', fontWeight: 500, textAlign: 'center' }),
}
