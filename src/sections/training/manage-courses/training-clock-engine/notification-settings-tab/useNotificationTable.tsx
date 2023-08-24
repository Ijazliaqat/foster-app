import styled from '@emotion/styled';
import { Box, Tooltip, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import React, { useRef, useState } from 'react'



export const useNotificationTable = () => {
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const [IsOpenNotificationModal, setIsOpenNotificationModal] = useState(false)
    const [actionType, setActionType] = useState('add');
    const [selectedRowId, setSelectedRowId] = useState(null);
    const tableHeaderRef = useRef();
    const theme = useTheme();
    const handleEditClicked = (rowId: any) => {
        setSelectedRowId(rowId);
        setActionType("edit");
        setIsOpenNotificationModal(true);

    };
    const CustomCell = ({ value }: any) => {
        const theme = useTheme();
        return (
            <Tooltip title={value} placement="top" arrow>
                <Box sx={{ maxWidth: '420px', whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", margin: "0 auto" }}>
                    {value}
                </Box>
            </Tooltip>
        );
    };

    const NotificationTableColumns = [
        {
            accessorFn: (row: any) => row.configurationItem,
            id: "configurationItem",
            cell: (info: any) => (
                <CustomCell value={info.getValue()} />
            ),
            header: () => <span>Configuration Item</span>,
            isSortable: true,

        },
        {
            accessorFn: (row: any) => row.value,
            id: "value",
            cell: (info: any) => info.getValue(),
            header: () => <span> Value</span>,
            isSortable: true,

        },
        {
            accessorFn: (row: any) => row.notificationType,
            id: "notificationType",
            cell: (info: any) => info.getValue(),
            header: () => <span>Notification Type</span>,
            isSortable: true,

        },
        {
            accessorFn: (row: any) => row.description,
            id: "description",
            cell: (info: any) => (
                <CustomCell value={info.getValue()} />
            ),
            header: () => <span>Description</span>,
            isSortable: true,
        },

        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>

                    <TableAction
                        type="edit"
                        onClicked={() => { setIsOpenNotificationModal(true), handleEditClicked(info.row.id) }}
                        size="small"
                    />
                    <TableAction
                        type="delete"
                        onClicked={() => setIsDeleteModal(true)}
                        size="small"
                    />
                </Box>
            ),
            header: "Actions",
            isSortable: false,
        },

    ];

    return {
        NotificationTableColumns,
        IsDeleteModal,
        setIsDeleteModal,
        tableHeaderRef,
        CustomCell,
        IsOpenNotificationModal,
        setIsOpenNotificationModal,
        handleEditClicked,
        selectedRowId,
        actionType,
        setActionType, theme

    }
}
