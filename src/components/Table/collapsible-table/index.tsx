import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import TableAction from '@root/components/TableAction';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


export default function CollapsibleTable(props: any) {
  const { handleCheckbox, handleAction, requireAction, actionArray, tableData, columns, innerColums } = props;
  const [open, setOpen] = React.useState({ isOpen: false, id: '' });
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto',mt:1 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ boxShadow: 'none !important' }}>
              <Checkbox onChange={handleCheckbox} size='small' />
            </TableCell>
            {columns?.map((col: any) => (<TableCell key={col.title}>{col.title}</TableCell>))}
            {requireAction && <TableCell sx={{ boxShadow: 'none !important' }}>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row: any, i: number) => (
            <React.Fragment key={i}>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen({ isOpen: !open.isOpen, id: row?._id })}
                  >
                    <ArrowDropDownCircleIcon sx={{ transform: open.isOpen && row?._id === open.id ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </IconButton>
                </TableCell>
                {columns.map((col: any, j: number) => (<TableCell key={j}>{col.render(row)}</TableCell>))}
                {requireAction && <TableCell sx={{ display: 'flex', gap: 1 }}>
                  {actionArray?.map((action: string) => <TableAction key={action} type={action} onClicked={() => handleAction(action, row)} />)}
                </TableCell>}
              </TableRow>
              {open.isOpen && row?._id === open.id && <TableRow>
                <TableCell colSpan={12}>
                  <Collapse in={open.isOpen && row._id === open.id} timeout="auto" unmountOnExit>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          {innerColums.map((innerCol: any, i: number) => (
                            <TableCell key={i}>{innerCol.title}</TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row.subData.map((innerRow: any, k: number) => (
                          <TableRow key={k}>
                            {innerColums.map((col: any, l: number) => (
                              <TableCell key={l}>{col.render(innerRow)}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Collapse>
                </TableCell>
              </TableRow>}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}