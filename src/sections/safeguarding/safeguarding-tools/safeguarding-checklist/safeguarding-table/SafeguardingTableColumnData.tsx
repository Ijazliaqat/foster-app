import {Box, styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
// style component 
const StyledIcon = styled(InfoIcon)({
  width:"16px",
  height:"16px",
  marginLeft:"6px",
 });
 export const columns = [
  { title: 'Questions', data: 'questions' },
  { title: 'Yes / No', data: 'yesNo' },
  { title: 'Answers to further questions', data: 'answersToFurtherQuestions' },
  { title: 'What improvements could you make?', data: 'whatImprovementsCouldYouMake' },
  { title: <Box sx={{display:'flex', alignItems: 'center' }}>What support do you need to do this?<StyledIcon /></Box>, data: 'whatSupportDoYouNeedToDoThis' },
];

