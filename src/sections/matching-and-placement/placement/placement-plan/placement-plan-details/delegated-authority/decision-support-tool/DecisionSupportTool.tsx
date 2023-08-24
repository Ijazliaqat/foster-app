import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import { supportToolData } from '.'
import { useRouter } from 'next/router'

const DecisionSupportTool = () => {
  const router = useRouter();
  return (
    <Card sx={{ p: 2, boxShadow: '0px 0px 7px 3px #0E918C33' }}>
      <Typography sx={styles.title}>DELEGATED AUTHORITY DECISION SUPPORT TOOL</Typography>
      <Typography sx={{ mb: '10px' }}>
        {supportToolData.desc1}
        <span style={{ fontWeight: 600 }}>&nbsp;{supportToolData.desc2}</span>
      </Typography>
      <Typography sx={{ mb: '10px' }}>
        {supportToolData.desc3}
      </Typography>
      <ul style={styles.ul}>
        {supportToolData.points1.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <Typography sx={{ my: '10px' }}>
        {supportToolData.desc4}
      </Typography>
      <ul style={styles.ul}>
        {supportToolData.points2.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <Typography sx={{ my: '10px' }}>
        {supportToolData.desc5}
      </Typography>
      <Typography sx={{ my: '10px' }}>
        {supportToolData.desc6}
      </Typography>
      <Button
        sx={styles.btnStyle}
        type="button"
        variant="contained"
        onClick={() => router.push('/placement/placement-plan/placement-plan-details')}
      >
        Back
      </Button>
    </Card>
  )
}

export default DecisionSupportTool

const styles = {
  title: {
    color: '#0E918C',
    fontSize: '16px',
    fontWeight: 600,
    margin: '20px 0px'
  },
  ul: {
    listStyle: 'none'
  },
  btnStyle: {
    marginTop: '10px',
    backgroundColor: "#F6830F",
    "&:hover": { backgroundColor: "#F6830F" },
  },
}