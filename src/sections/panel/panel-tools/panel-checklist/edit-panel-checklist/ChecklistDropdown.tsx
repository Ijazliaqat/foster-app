import { Box, MenuItem, Select, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";

const selectList = [
  { menuItem: "not provided", color: "#DC3545" },
  { menuItem: "in review", color: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)" },
  { menuItem: "approved", color: "linear-gradient(106.35deg, #2B8F29 99.99%, #33E87C 100%)" },
]

const ChecklistDropdown = ({ status, options = selectList, handleChange }: any) => {
  const [bg, setBg] = useState("#DC3545");
  const [newStatus, setNewStatus] = useState(status);
  const theme = useTheme();

  const handleStatusChange = (data: any) => {
    setNewStatus(data.target.value);
    handleChange(data.target.value);
    switch (data.target.value) {
      case "not provided": return setBg("#DC3545")
      case "in review": return setBg("linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)")
      case "approved": return setBg("linear-gradient(106.35deg, #2B8F29 99.99%, #33E87C 100%)")
      default: return
    }
  }

  useEffect(() => {
    switch (status) {
      case "not provided": return setBg("#DC3545")
      case "in review": return setBg("linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)")
      case "approved": return setBg("linear-gradient(106.35deg, #2B8F29 99.99%, #33E87C 100%)")
      default: return
    }
  }, [status])

  return (
    <Box sx={styles.dropdown(theme.palette.mode)}>
      <Select
        value={newStatus}
        sx={styles.select(bg)}
        onChange={handleStatusChange}
        inputProps={{ IconComponent: () => null }}
      >
        {options.map((item: any, i: number) => (
          <MenuItem
            key={i}
            value={item.menuItem}
            sx={styles.menuList(item.color)}>
            {item.menuItem}
          </MenuItem>
        ))}
      </Select>
      <AiFillCaretDown />
    </Box>

  )
}

export default ChecklistDropdown


const styles: any = {
  dropdown: (mode: any) => ({ border: `1.5px solid ${mode === 'light' ? '#10131C' : '#fff'}`, borderRadius: "4px", display: "flex", alignItems: "center", gap: "5px", pr: "5px"}),
  select: (background: string) => ({
    height: '33px',
    width: '130px !important',
    textTransform: 'capitalize',
    color: '#fff',
    fontWeight: 600,
    fontSize: '14px',
    background: background,
    "& .MuiSelect-select": { paddingX: "0 !important" },
    boxShadow: 'none',
    '.MuiOutlinedInput-notchedOutline': { border: 0, },
    '.MuiSelect-outlined': { display: "flex", alignItems: "center", justifyContent: "center", padding: '0px important' },
    '& fieldset': { border: "none !important" },
  }),
  menuList: (color: string) => ({ background: `${color} !important`, margin: "5px !important", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 600, color: "#fff", borderRadius: "4px", textTransform: 'capitalize' })
}