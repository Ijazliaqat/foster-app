import { MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const selectList = [
    {
        menuItem: 'DeReg Initial Request',
        color: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)',
    },
    {
        menuItem: 'DeReg Assessment Stage 1',
        color: 'linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%)',
    },
    {
        menuItem: 'DeReg Assessment Stage 2',
        color: 'linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)',
    },
    {
        menuItem: 'DeReg Contracts and Agreements',
        color: 'linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)',
    },
    {
        menuItem: 'Final De-Registration',
        color: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)',
    },
];

const DeRegTableDropdown = ({ status, options = selectList, handleChange }: any) => {

    const [bg, setBg] = useState("linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)");
    const [newStatus, setNewStatus] = useState('DeReg Initial Request');

    const handleStatusChange = (data: any) => {
        setNewStatus(data.target.value);
        handleChange(data.target.value);

        switch (data.target.value) {
            case "DeReg Initial Request":
                return setBg("linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)");
            case "DeReg Assessment Stage 1":
                return setBg("linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%)");
            case "DeReg Assessment Stage 2":
                return setBg("linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)");
            case "DeReg Contracts and Agreements":
                return setBg("linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)");
            case "Final De-Registration":
                return setBg("linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)");
            default:
                return;
        }
    };

    useEffect(() => {
        switch (status) {
            case "DeReg Initial Request":
                return setBg("linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)");
            case "DeReg Assessment Stage 1":
                return setBg("linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%)");
            case "DeReg Assessment Stage 2":
                return setBg("linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)");
            case "DeReg Contracts and Agreements":
                return setBg("linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)");
            case "Final De-Registration":
                return setBg("linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)");
            default:
                return;
        }
    }, [status]);

    return (
        <Select
            value={newStatus}
            sx={styles.select(bg)}
            onChange={handleStatusChange}
            inputProps={{ IconComponent: () => null }}
            IconComponent={ArrowDropDownIcon}

        >
            {options.map((item: any, i: number) => (
                <MenuItem
                    key={i}
                    value={item.menuItem}
                    sx={{ background: item.color, m: 0.9, color: '#fff', borderRadius: '4px', width: '270px' }}
                >
                    {item.menuItem}
                </MenuItem>
            ))}
        </Select>
    );
};

export default DeRegTableDropdown;

const styles = {
    select: (background: string) => ({
        height: '30px',
        width: '210px !important',
        textTransform: 'capitalize',
        color: '#fff !important',
        fontWeight: 600,
        fontSize: '14px',
        background: background,
        "& .MuiSelect-select": { paddingX: "0 !important" },
        boxShadow: 'none',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        '.MuiSelect-outlined': { display: "flex", alignItems: "center", justifyContent: "center", padding: '0px important' },
        '& fieldset': { border: "none !important" }
    }),
    menuList: (color: string) => ({
        // backgroundColor: `${color} !important`,
        // margin: "5px !important",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        // fontSize: "14px",
        // fontWeight: 600,
        // color: '#fff !important',
        // borderRadius: "3px",
        // textTransform: 'capitalize',
    }),
};
