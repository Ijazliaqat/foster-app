import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { SAFEGUARDING_ARRAY } from './safeguarding-mock';

const SafeGuardCard = () => {

  return (
    <Grid container spacing={2}>
      {
        SAFEGUARDING_ARRAY.map((data, i) => (
          <Grid item xs={12} md={12} lg={6} key={i}>
            <Card sx={styles.card}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={styles.cardHeader(data.background)}>
                  <Typography sx={styles.title}>{data.title}</Typography>
                  <Box sx={styles.imgDiv}><Image src={data.icon} alt='icon' height={52} width={52} /></Box>
                </Box>
                <Grid container spacing={1} sx={{ px: 1, pt: 3 }} rowSpacing={2}>
                  {
                    data.subArray.map((subData, j) => (
                      <Grid item xs={12} sm={6} md={4} lg={4} key={j} minHeight={140} sx={{ cursor: 'pointer' }}>
                        <Link href={data.title === 'Safeguarding-Third Parties' ? `${subData.path}/${subData.id}` : subData.path} style={{ all: 'unset' }}>
                          <Image src={subData.icon} alt='icon' height={65} width={65} style={{ margin: '0 auto' }} />
                          <Typography sx={styles.subItem}>{subData.title}</Typography>
                        </Link>
                      </Grid>
                    ))
                  }
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default SafeGuardCard

const styles = {
  card: { p: 0, boxShadow: '2px 4px 7px rgba(253, 47, 83, 0.25)' },
  cardHeader: (background: any) => ({ background: background, display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '8px 15px' }),
  title: { fontSize: '20px', fontWeight: 700, color: '#fff' },
  imgDiv: { height: 55, width: 55, borderRadius: 50, background: '#fff', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)" },
  subItem: (theme: any) => ({ color: theme.palette.mode, fontSize: '12px', fontWeight: 500, textAlign: 'center' })
}
