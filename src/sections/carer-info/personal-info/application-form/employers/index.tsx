import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";

export const defaultValues = {
  employerType: "Current",
  companyName: "",
  address: "",
  durationOfEmploymentAndPost: "",
  phone: "",
  contactName: "",
  noticePeriod: "",
  disciplinaryCareer: "",
  suitableDate: new Date(),
  email: "",
};

export const FormSchema = Yup.object().shape({
  companyName: Yup.string().required("Field is required"),
  durationOfEmploymentAndPost: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  phone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(35, "Maximum 35 characters"),
  contactName: Yup.string().required("Field is required"),
  noticePeriod: Yup.string().required("Field is required"),
  disciplinaryCareer: Yup.string().required("Field is required"),
  suitableDate: Yup.date().required("Field is required"),
  email: Yup.string().required("Field is required").email("Invalid Email"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Current",
      label: "Type?",
      name: "employerType",
      options: ["Current", "Previous"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "companyName",
      label: "Company Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "durationOfEmploymentAndPost",
      label: "Duration of Employment and Post",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "phone",
      label: "Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "contactName",
      label: "Contact Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "noticePeriod",
      label: "Notice Period",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "disciplinaryCareer",
      label: "Disciplinary In Career",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "suitableDate",
      label: "Suitable Date for your Reference to be sent",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
];

export const columns = (
  changeView: any,
  setEmployerData: any,
  role: any,
  listDeleteHandler: any
) => {
  return [
    {
      accessorFn: (row: any) => row.contactName,
      id: "contactName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.phone,
      id: "phone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => {
              setEmployerData(info?.row?.original);
              changeView("view");
            }}
          />
          {role !== "foster-carer" && (
            <>
              <TableAction
                type="edit"
                onClicked={() => {
                  setEmployerData(info.row.original);
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
export { default as Employers } from "./EmployersTable";
