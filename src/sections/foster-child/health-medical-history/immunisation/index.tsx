import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";
import dayjs from "dayjs";
import Link from "next/link";
import router from "next/router";

import * as Yup from "yup";
export const dummy = [
  {
    id: 1,
    dateOfImmunisation: "16 May 2021",
    immunisationtype: "Messenger RNA",
  },
];

export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "pdf",
          label: "pdf",
        },
        {
          value: "docx",
          label: "docx",
        },
        {
          value: "doc",
          label: "doc",
        },
        {
          value: "png",
          label: "png",
        },
        {
          value: "jpg",
          label: "jpg",
        },
        {
          value: "jpeg",
          label: "jpeg",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Document Date",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    componentProps: {
      name: "documentName",
      fullWidth: true,
      size: "small",
      label: "Upload Document",
    },
    component: RHFUploadFile,
  },
];
export const uploadDocDefaultValues = {
  type: "",
  documentDate: new Date(),
  password: "",
  documentName: null,
};
export const uploadDocFormSchema = Yup.object().shape({
  type: Yup.string().required("Field is required"),
  documentDate: Yup.date().required("Field is required"),
  password: Yup.string().required("Field is required"),
  documentName: Yup.mixed().nullable().required("Document is required"),
});
export const uploadDocColumns = ({
  action,
  changeView,
  setOpen,
  role,
  setDocData,
  listDeleteHandler,
}: any) => {
  return [
    {
      accessorFn: (row: any) => row.documentName ?? "-",
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.documentDate ?? "-",
      id: "documentDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
      },
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.uploadBy ?? "-",
      id: "uploadBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password ?? "-",
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
          <Link
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.file}`}
            target="_blank"
          >
            <TableAction size="small" type="download" />
          </Link>
          <TableAction
            size="small"
            type="view"
            onClicked={() => {
              setOpen(true);
              setDocData(info.row.original);
              changeView("view");
            }}
          />
          {role !== "foster-carer" && (
            <>
              {action == "view" ? null : (
                <>
                  <TableAction
                    type="edit"
                    onClicked={() => {
                      setOpen(true);
                      setDocData(info.row.original);
                      changeView("edit");
                    }}
                  />
                  <DeletePrompt
                    onDeleteClick={() =>
                      listDeleteHandler(info?.row?.original?.id)
                    }
                  />
                </>
              )}
            </>
          )}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
};
// immunisation

export const immunisationInfoFormValue = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "Date Of Immunisation",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "type",
      label: "immunisation Type",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "dueDate",
      label: "Due Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
export const immunisationInfoListValue = {
  date: new Date(),
  type: "",
  dueDate: new Date(),
};

export const FormSchema = Yup.object().shape({
  date: Yup.date().required("required"),
  type: Yup.string().required("required"),
  dueDate: Yup.date().required("required"),
});
//upload document
export const formSchemaModel = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});

export const UploadViewDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const Formet: any = {};

for (const formControl of UploadViewDocFormData) {
  if (formControl.format)
    Formet[formControl.componentProps.name] = formControl.format;
}

///
export const uploadDummyData = [
  {
    srNo: "1",
    documentName: "zyz",
    type: "zyz",
    documentDate: "zyz",
    incidentId: "zyz",
    password: "zyz",
  },
];

export const immunisationColumns = ({
  activepath,
  listDeleteHandler,
  fosterChildId,
}: any) => {
  return [
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => (
        <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>
      ),
      header: () => <span>Date Of Immunisation</span>,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "type",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Immunisation type</span>,
    },

    {
      id: "actions",
      cell: (info: any) => {
        return (
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <DeletePrompt
              onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
            />
            <TableAction
              size="small"
              type="edit"
              onClicked={() => {
                router.push(
                  `${activepath}/edit-immunisation/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
                );
              }}
            />
            <TableAction
              size="small"
              type="view"
              onClicked={() => {
                router.push(
                  `${activepath}/view-immunisation/${info?.row?.original?.id}?fosterChildId=${fosterChildId}`
                );
              }}
            />
          </Box>
        );
      },
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];
};
