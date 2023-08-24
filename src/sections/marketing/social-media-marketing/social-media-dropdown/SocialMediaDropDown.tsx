import { Box, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const SocialMediaDropDown = (props: any) => {
  const {} = props;
  const [selectedValue, setSelectedValue] = useState(1);
  const menuItems = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ];

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <Select
        sx={{
          backgroundColor: "transparent",
          border: "none",
          height: "2rem",
          "&:hover": {
            backgroundColor: "transparent",
            border: "none",
          },
          "& .MuiSelect-icon": {
            display: "none",
          },
        }}
        value={selectedValue}
        onChange={handleChange}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SocialMediaDropDown;
