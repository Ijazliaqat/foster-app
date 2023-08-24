import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import Link from "next/link";
import { RHFUploadFile } from "@root/sections/carer-info/personal-info/application-form/basic-information/RHFUploadFile";

export const UPLOAD_DOCUMENTS = [
  {
    srNo: 1,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 2,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
  {
    srNo: 3,
    documentName: "Form Name",
    documentType: "PDF",
    documentDate: "19/05/2023",
    personUploaded: "Name Xame",
    password: "123abc",
  },
];
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
      accessorFn: (row: any) => row.docType,
      id: "docType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.date ?? "-",
      id: "date",
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
            href={`${process.env.NEXT_PUBLIC_IMG_URL}${info.row.original.media}`}
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
export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "docType",
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
      name: "date",
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
  {
    gridLength: 12,
    componentProps: {
      name: "media",
      fullWidth: true,
      size: "small",
      label: "Upload Document",
    },
    component: RHFUploadFile,
  },
];
export const formatters: any = {};

for (const formControl of UploadDocFormData) {
  if (formControl.format)
    formatters[formControl.componentProps.name] = formControl.format;
}

export const defaultValues = {
  docType: "",
  date: new Date(),
  password: "",
  media: null,
};
export const formSchema = Yup.object().shape({
  docType: Yup.string().required("Document Type Required"),
  date: Yup.date().required("Document Date Required"),
  password: Yup.string().required("Password Required"),
  media: Yup.mixed().required("File Required"),
});
