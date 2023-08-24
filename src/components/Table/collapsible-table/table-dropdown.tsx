import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'

const selectList = [{ menuItem: "done", color: "#0E918C" },
{ menuItem: "in progress", color: "#F6830F" },
{ menuItem: "stuck", color: "#E6627D" },
{ menuItem: "pause", color: "#FC389F" },
{ menuItem: "to do", color: "#9C9BB8" },]

const TableDropdown = ({ status, options = selectList, handleChange }: any) => {
  const [bg, setBg] = useState("#F6830F");
  const [newStatus, setNewStatus] = useState(status);

  const handleStatusChange = (data: any) => {
    setNewStatus(data.target.value);
    handleChange(data.target.value);
    switch (data.target.value) {
      case "done": return setBg("#0E918C")
      case "in progress": return setBg("#F6830F")
      case "stuck": return setBg("#E6627D")
      case "pause": return setBg("#FC389F")
      case "to do": return setBg("#9C9BB8")
      default: return
    }
  }

  useEffect(() => {
    switch (status) {
      case "done": return setBg("#0E918C")
      case "in progress": return setBg("#F6830F")
      case "stuck": return setBg("#E6627D")
      case "pause": return setBg("#FC389F")
      case "to do": return setBg("#9C9BB8")
      default: return
    }
  }, [status])

  return (
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
  )
}

export default TableDropdown


const styles: any = {
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
    '& fieldset': { border: "none !important" }
  }),
  menuList: (color: string) => ({ backgroundColor: `${color} !important`, margin: "5px !important", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 600, color: "#fff", borderRadius: "3px", textTransform: 'capitalize' })
}