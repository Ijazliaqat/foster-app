// states here
import React, { useState } from 'react'

// material ui tags import
import { Box, Button, Card, FormControl, Grid, InputAdornment, Menu, MenuItem, Stack, TextField } from '@mui/material'

// table,global component and  table data
import DelegateCertificatesTable from './delegate-certificates-table/DelegateCertificatesTable'
import { accordionData } from '.'
import CustomAccordian from '@root/components/CustomAccordian'

// modals 
import TitleInputModal from './title-input-modal/TitleInputModal'
import DeleteModel from '@root/components/modal/DeleteModel'

// material ui icons assets
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrintIcon from "@mui/icons-material/Print";
import SwapVertIcon from "@mui/icons-material/SwapVert";


const DelegateCertificateAccordin = () => {

  // states here
  const [items, setitems] = React.useState("");
  const [cancelDelete, setCancelDelete] = React.useState(false);
  const [addRow, setAddRow] = useState(accordionData);
  const [editRowId, setEditRowId] = useState('');
  const [modalType, setModalType] = useState({ type: "", value: "" });
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const here
  const handleChange = (event: any) => {
    setitems(event.target.value);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addRowHandler = (data: any, editRowId: any) => {
    const newObj = {
      id: Math.random(),
      title: data?.title,
      component: <DelegateCertificatesTable />,
    };

    const filteredRows = addRow.filter((row) => row.id !== editRowId?.id);
    setAddRow([...filteredRows, newObj]);
  };


  return (
    <Card sx={{ p: 2 }}>
      <Box>
        <Grid spacing={2} container>
          <Grid item xl={6} lg={6} md={12} xs={12}>
            <FormControl>
              <TextField
                fullWidth
                size="medium"
                name="{searchKey}"
                placeholder="Search"
                value={items}
                onChange={handleChange}
                sx={styles.searchStyles}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xl={6} lg={6} md={12} xs={12}>
            <Stack
              direction={{
                xl: "row",
                lg: "row",
                md: "row",
                xs: "column",
                sm: "column",
              }}
              justifyContent="end"
              spacing={1}
            >
              <Button variant="contained" onClick={() => { window.print() }}>
                <PrintIcon sx={{ fontSize: "25px" }} />
              </Button>

              <Button
                variant="contained"
                onClick={handleClick}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                size="large"
              >
                <Stack direction="row" justifyContent="center" spacing={0.5}>
                  <SwapVertIcon />
                  <Box>Sort By</Box>
                  <ArrowDropDownIcon />
                </Stack>
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
              <Button size="large" variant="contained"
                onClick={() => {
                  setModalType({
                    ...modalType,
                    type: "Add",
                    value: ""
                  })
                }}
              >
                Add Group
              </Button>
            </Stack>
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomAccordian data={addRow} showBtn={true}
              handleTitleEdit={(item: any) => {
                setEditRowId(item)
                setModalType({
                  ...modalType,
                  type: "Edit"
                })
              }}
              handleRowDelete={(item: any) => {
                setCancelDelete(!cancelDelete)
                console.log("delete group", item)
              }}
            />
          </Grid>
        </Grid>
        <TitleInputModal open={modalType.type} editRowId={editRowId} addRowHandler={addRowHandler} handleClose={() => { setModalType({ type: "", value: "" }); }} />
        <DeleteModel open={cancelDelete} onDeleteClick={(event: any) => { event.stopPropagation(); event.nativeEvent.preventDefault(); setCancelDelete(!cancelDelete) }} handleClose={(event: any) => { event.stopPropagation(); event.nativeEvent.preventDefault(); setCancelDelete(!cancelDelete) }} />

      </Box>
    </Card>
  )
}

export default DelegateCertificateAccordin

const styles = {
  searchStyles: (theme: any) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
  }),
};
