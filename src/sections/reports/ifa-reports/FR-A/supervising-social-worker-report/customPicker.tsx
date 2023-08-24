import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography } from '@mui/material';

const DaysHourPicker = ({ ...other }: any) => {
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(1);
  return (
    <Box display={'flex'} alignItems={'center'} gap={'10px'} justifyContent={'space-between'}
      sx={{ borderRadius: '4px', border: '1px solid rgba(145, 158, 171, 0.24)', p: '8px 12px', height: '42px' }}
    >
      <CustomTextField
        title={'Days'}
        name={'days'}
        value={day}
        setValue={setDay}
        disabled={other?.disabled}
      />
      <CustomTextField
        title={'Hours'}
        name={'hours'}
        value={hour}
        setValue={setHour}
        disabled={other?.disabled}
      />
    </Box>
  );
};

export default DaysHourPicker;


const CustomTextField = ({ title, value, setValue, name, ...rest }: any) => {
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value > 0 ? value - 1 : 0);
  return (
    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
      <Typography>{title}</Typography>
      <TextField
        sx={{ maxWidth: '90px' }}
        type="number"
        name={name}
        size={'small'}
        value={value}
        disabled={rest.disabled}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={styles.endAdornment} disablePointerEvents={rest.disabled}>
              <IconButton disableRipple onClick={handleIncrement} sx={styles.arrowBtn}>
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton disableRipple onClick={handleDecrement} sx={styles.arrowBtn}>
                <ArrowDropDownIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

const styles = {
  arrowBtn: {
    all: 'unset', cursor: 'pointer', height: "15px"
  },
  endAdornment: {
    flexDirection: 'column', height: '100% !important', mt: -0.5, mr: 0
  }
}
