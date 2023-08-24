import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { RHFUploadFile } from "../basic-information/RHFUploadFile";
import Link from "next/link";

export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "documentType",
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
export const defaultValues = {
  documentType: "",
  documentDate: new Date(),
  password: "",
  documentName: null,
};
export const formSchema = Yup.object().shape({
  documentType: Yup.string().required("Field is required"),
  documentDate: Yup.date().required("Field is required"),
  password: Yup.string().required("Field is required"),
  documentName: Yup.mixed().nullable().required("Document is required"),
});
export const columns = ({
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
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
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
      accessorFn: (row: any) => row.uploadedBy ?? "-",
      id: "uploadedBy",
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
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.documentFile}`}
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
              <TableAction
                type="edit"
                onClicked={() => {
                  setOpen(true);
                  setDocData(info.row.original);
                  changeView("edit");
                }}
              />
              <DeletePrompt
                onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
              />
            </>
          )}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
};
