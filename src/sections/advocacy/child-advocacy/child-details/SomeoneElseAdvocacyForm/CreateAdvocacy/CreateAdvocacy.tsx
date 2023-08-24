import { Button, Card, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useSomeoneElseAdvocacyForm } from '../useSomeoneElseAdvocacyForm';
import { advocacyRequirementData } from '.';

const CreateAdvocacy = () => {
  const { router, handleAdvocacy, advocacyRequirment, theme } = useSomeoneElseAdvocacyForm();
  return (
    <Card sx={{ p: 2 }}>
      <Typography fontWeight={600} color={theme.palette.primary.main}>Create Advocacy</Typography>
      <Grid container>
        <Grid item xs={6} my={4}>
          <Typography fontWeight={600} color={theme.palette.mode}>Please Choose the Advocacy Requirement:</Typography>
          <Select name='advocacyRequirement' fullWidth size='small' defaultValue="default" onChange={handleAdvocacy}>
            <MenuItem value="default" disabled>Select</MenuItem>
            {advocacyRequirementData.map((option, i) => (
              <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Button
            type="button"
            variant="contained"
            onClick={() => router.push('/advocacy/child-advocacy/details/someone-else-form')}
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
          >
            Back
          </Button>
          <Button
            disabled={!advocacyRequirment}
            type="submit"
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => router.push(`/advocacy/child-advocacy/details/someone-else-form/create-advocacy/form?advocacyType=${advocacyRequirment}`)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CreateAdvocacy