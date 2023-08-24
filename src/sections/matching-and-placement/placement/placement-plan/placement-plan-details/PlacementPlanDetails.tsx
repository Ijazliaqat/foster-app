import React from 'react'
import { FosteringPlacementData } from '.'
import { Card, List, ListItem, ListItemAvatar, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router';

const FosteringPlacementDelegateAuthority = () => {
  const theme = useTheme();
  const router = useRouter();
  const { query } = router;

  return (
    <>
      {FosteringPlacementData.map(({ title, color, subArr }, i) => (
        <Card key={i} sx={styles.card}>
          <Typography sx={styles.head(color)}>{title}</Typography>
          <List sx={styles.list}>
            {subArr.map((sub, j) => (
              <ListItem sx={styles.item} key={j}>
                <ListItemAvatar sx={styles.icon(color)} />
                <Typography
                  component={'span'}
                  sx={styles.listTitle(theme)}
                  onClick={() => router.push({ pathname: sub.href, query })}>
                  {sub.title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </>
  )
}

export default FosteringPlacementDelegateAuthority

const styles = {
  card: { marginBottom: '20px', boxShadow: '0px 4px 4px 0px #00000040' },
  head: (color: string) => ({ color: '#fff', background: color, padding: '10px 30px', fontSize: '18px', fontWeight: 600, }),
  list: { padding: '10px 20px' },
  item: { padding: '0px 16px' },
  icon: (color: string) => ({ background: color, height: '13px', width: '13px', borderRadius: '3px' }),
  listTitle: (theme: any) => ({ cursor: 'pointer', color: theme.palette.mode === 'light' ? '#343A40' : theme.palette.mode, fontSize: '16px', fontWeight: 600, padding: '10px', minWidth: '350px', '&:hover': { background: theme.palette.mode === 'light' ? '#E9E9E9' : '#000000' } }),
}