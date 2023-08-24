import { Box, Button, FormHelperText, Grid, Modal, Stack } from "@mui/material";
import CustomTable from "./CustomTable";
import TableAction from "../TableAction";

// RHF
import { useForm, useFormContext, useWatch } from "react-hook-form";
import RHFMultiSelect from "../hook-form/RHFMultiSelect";
import RHFDatePicker from "../hook-form/RHFDatePicker";
import {
  FormProvider,
  RHFCheckbox,
  RHFTextField,
  RHFUploadFileWithView,
} from "../hook-form";

// Yup
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// react
import { useState } from "react";

// components
import ShareModal from "../modal/shareModal";

// nextjs
import { useRouter } from "next/router";

// @mui icons
import AddIcon from "@mui/icons-material/Add";
import DelegateCertificateModal from "@root/sections/training/manage-trainees/delegate-certificates/delegate-certificates-table/delegate-certificate-modal/DelegateCertificateModal";
import RHFSecondarySelect from "../hook-form/RHFSecondarySelect";

const ANON_FUNC = () => {};

const FIELDS_OBJ: any = {
  textField: RHFTextField,
  datePicker: RHFDatePicker,
  file: RHFUploadFileWithView,
  checkbox: RHFCheckbox,
  "multi-select": RHFMultiSelect,
  select: RHFSecondarySelect,
};

// ----------------------------------------------------------------------
// Modal
function TableFormModal(props: any) {
  const {
    onAccept = ANON_FUNC,
    onCancel = ANON_FUNC,
    onAdd = ANON_FUNC,
    onUpdate = ANON_FUNC,
    beforeAdd,
    beforeUpdate,
    columns = [],
    defaultValues = {},
    type: actionType = "Add",
    disabled = actionType === "View",
  } = props;

  const [error, setError] = useState<any>(null);

  const schema: any = {};

  for (const column of columns) {
    if (column.validation) {
      schema[column.key] = column.validation(Yup);
    }
  }

  const formSchema = Yup.object().shape(schema);

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  const onSubmit = async (data: any) => {
    if (error) setError(null);
    try {
      if (actionType.toLowerCase() === "add") {
        beforeAdd && (await beforeAdd(methods));
        onAdd(data);
      } else if (actionType.toLowerCase() === "update") {
        beforeUpdate && (await beforeUpdate(methods));
        onUpdate(data);
      }
    } catch (error: any) {
      setError(error);
    }
  };

  const onAcceptHandler = (data: any) => {
    handleSubmit(onSubmit)();
    onAccept();
  };

  return (
    <Modal
      open
      onClose={!isSubmitting ? onCancel : null}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <FormProvider methods={methods}>
          <Grid container spacing={2} sx={styles.addModalMainGrid}>
            {columns.map(
              ({
                inputType,
                key,
                label,
                size = { xs: 12, md: 6 },
                options,
                hideInForm,
                ...other
              }: any) => {
                if (hideInForm) return null;

                const Component = FIELDS_OBJ[inputType];

                return (
                  <Grid key={key} item {...size}>
                    <Component
                      name={key}
                      label={label}
                      disabled={disabled || isSubmitting}
                      options={options}
                      fullWidth
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
          <Box sx={styles.actionBtnBox}>
            {!disabled && (
              <Button
                onClick={onAcceptHandler}
                disabled={!isValid || isSubmitting}
                sx={styles.btnSuccess}
              >
                {actionType}
              </Button>
            )}

            <Button
              disabled={isSubmitting}
              onClick={onCancel}
              sx={styles.btnError}
            >
              Cancel
            </Button>
          </Box>
          {error && (
            <FormHelperText error sx={{ px: 2, textAlign: "center" }}>
              {String(error?.message)}
            </FormHelperText>
          )}
        </FormProvider>
      </Box>
    </Modal>
  );
}

// Form Table

export default function FormTable(props: any) {
  const {
    disabled,
    view,
    print,
    share,
    certificate,
    tableKey,
    beforeAdd,
    add,
    beforeUpdate,
    onAddRowHandler,
    columns: tableColumns,
  } = props;
  const methods = useFormContext();
  const tableData = useWatch({ name: tableKey }) ?? [];
  const [actionData, setActionData] = useState<any>(null);
  const [viewModal, setViewModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [certificateModal, setCertificateModal] = useState(false);

  const { setValue, getValues } = methods;

  /* Set up formatters for updating the display data */
  const formatters: any = {};
  for (const column of tableColumns) {
    if (column.format) formatters[column.key] = column.format;
  }

  /* COLUMNS */
  let columns = tableColumns.map(({ key, label }: any) => {
    return {
      accessorFn: (row: any) => {
        if (formatters[key]) {
          const formatterFunc = formatters[key];
          return formatterFunc(row[key]);
        }

        return row[key];
      },
      id: label,
      cell: (info: any) => info.getValue(),
      header: () => <span>{label}</span>,
    };
  });

  if (certificate) {
    columns.push(
      {
        id: "certificate",
        cell: (info: any) => (
          <Box
            sx={{ cursor: "pointer", color: "#0563C1", fontWeight: "500" }}
            onClick={() => {
              setCertificateModal(true);
            }}
          >
            Delegate Certificate
          </Box>
        ),
        header: () => <span>Manage Certificate</span>,
        isSortable: false,
      },

      {
        id: "actions",
        cell: (info: any) => (
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {view && (
              <TableAction
                type="view"
                onClicked={(id: number) => onViewHandler(info.row.index)}
              />
            )}
            {print && (
              <TableAction
                type="print"
                onClicked={(id: number) => window.print()}
              />
            )}
            {share && (
              <TableAction
                type="share"
                onClicked={() => setShareModal(!shareModal)}
              />
            )}

            <TableAction type="download" />

            {showView === "view" ? (
              ""
            ) : (
              <>
                <TableAction
                  type="edit"
                  onClicked={(id: number) =>
                    onViewHandler(info.row.index, "Update")
                  }
                />
                <TableAction
                  type="delete"
                  onClicked={(id: number) => onDeleted(info.row.index)}
                />
              </>
            )}
          </Box>
        ),

        header: () => <span>actions</span>,
        isSortable: false,
      }
    );
  }

  columns.push({
    id: "actions",
    cell: (info: any) => (
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {view && (
          <TableAction
            type="view"
            onClicked={(id: number) => onViewHandler(info.row.index)}
          />
        )}

        {add && (
          <TableAction
            type="add"
            onClicked={(id: number) => onAddRowHandler(info.row)}
          />
        )}
        {print && (
          <TableAction
            type="print"
            onClicked={(id: number) => window.print()}
          />
        )}
        {share && (
          <TableAction
            type="share"
            onClicked={() => setShareModal(!shareModal)}
          />
        )}

        {showView === "view" ? (
          ""
        ) : (
          <>
            <TableAction
              type="edit"
              onClicked={(id: number) =>
                onViewHandler(info.row.index, "Update")
              }
            />
            <TableAction
              type="delete"
              onClicked={(id: number) => onDeleted(info.row.index)}
            />
          </>
        )}
      </Box>
    ),

    header: () => <span>actions</span>,
    isSortable: false,
  });

  const handleShare = () => {
    setShareModal(false);
  };

  /* CANCEL HANDLER */
  function onCancelHandler() {
    setActionData(null);
    setViewModal(false);
  }

  /* ADD HANDLER */
  function onAddHandler() {
    const defaultValues: any = {};

    tableColumns.forEach((column: any) => {
      defaultValues[column.key] = column.defaultValue ?? "";
    });

    setActionData({
      type: "Add",
      defaultValues,
    });
  }

  async function onAdded(data: any) {
    setValue(tableKey, [...getValues()[tableKey], data]);
    setActionData(null);
  }

  /* DELETE HANDLER */
  function onDeleted(index: number) {
    const tableRowData = getValues()[tableKey];
    const leftArr = tableRowData.slice(0, index);
    const rightArr = tableRowData.slice(index + 1);
    setValue(tableKey, [...leftArr, ...rightArr]);
  }

  /* UPDATE and VIEW HANDLER */
  function onViewHandler(index: any, actionType: string = "View") {
    const tableRowData = getValues()[tableKey][index];

    setActionData({
      type: actionType,
      index,
      defaultValues: tableRowData,
    });
  }

  function onUpdated(data: any) {
    const tableRowData = getValues()[tableKey];
    const { index } = actionData;
    tableRowData[index] = data;

    setValue(tableKey, tableRowData);
    setActionData(null);
  }

  const router = useRouter();

  const showView = router.query.action;

  return (
    <div>
      {certificateModal && (
        <DelegateCertificateModal
          open={certificateModal}
          setOpen={setCertificateModal}
        />
      )}
      {shareModal && (
        <ShareModal
          open={shareModal}
          data={[{ email: "hassan@gmail.com" }]}
          handleClose={handleShare}
          onSubmit={(values: any) => {
            console.log(values);
            setShareModal(false);
          }}
        />
      )}

      {viewModal && (
        <TableFormModal
          disabled={disabled}
          columns={tableColumns}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}

      {actionData && (
        <TableFormModal
          columns={tableColumns}
          onAdd={onAdded}
          onUpdate={onUpdated}
          onCancel={onCancelHandler}
          beforeAdd={beforeAdd}
          beforeUpdate={beforeUpdate}
          {...actionData}
        />
      )}
      <CustomTable
        data={tableData}
        columns={columns}
        isPagination={false}
        isSuccess={true}
      />
      {showView === "view" ? (
        ""
      ) : (
        <Button variant="text" startIcon={<AddIcon />} onClick={onAddHandler}>
          Add
        </Button>
      )}
    </div>
  );
}

//-----------------------------------------------------------------------
// styles
const styles = {
  root: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 40rem)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  actionBtnBox: (theme: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
  btnSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
  addModalMainGrid: { placeItems: "center" },
};
