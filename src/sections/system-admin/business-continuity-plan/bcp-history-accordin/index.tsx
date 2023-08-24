import { Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import dayjs from "dayjs";

export const TableData = [
  {
    // Sr_No: "01",
    Date_Invoked: "15.12.2021",
    Steps_Taken:
      "Invoked Crisis Management Plan Invoked Business Continuity Plan.",
    Outcome: "DR_15122021.pdf",
    Bcp_Manager: "John Wick  (Registered Manager)",
  },
];

export const defaultValues = {
  exampleTable: [
    {
      "steps-taken":
        "Invoked Crisis Management Plan Invoked Business Continuity Plan.",
      Approved_Date: new Date(),
      BCP_Manager: {
        label: "John Wick  (Registered Manager  )",
        value: "1",
      },
      image:
        "users/4f7512fb-2916-451b-8240-97f529ded73d/badge/72fd0112-f976-4910-b7a3-e3c8013f4204.jpg",
    },
  ],
};

export const BcpManagerOPTIONS = [
  {
    label: "John Wick  (Registered Manager  )",
    value: "1",
  },
  {
    label: "Servrus Snape  (Registered Manager  )",
    value: "2",
  },
];

export const COLUMNS = [
  {
    inputType: "datePicker",
    key: "date-invoked",
    defaultValue: new Date(),
    label: "Date Invoked",
    validation: (Yup: any) => {
      return Yup.date()
        .typeError("Date Invoked is required")
        .required("Date Invoked is required");
    },
    format: (date: any) => {
      return dayjs(date).format("DD/MM/YYYY");
    },
  },
  {
    inputType: "textField",
    type: "text",
    key: "steps-taken",
    defaultValue:
      "Invoked Crisis Management Plan Invoked Business Continuity Plan.",
    label: "Steps Taken",
    validation: (Yup: any) => {
      return Yup.string().required("Steps taken is required").min(3);
    },
  },
  {
    inputType: "file",
    type: "file",
    key: "image",
    label: "Outcome",
    size: { xs: 12, md: 6 },
    format: (imgUrl: any) => {
      return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PictureAsPdfIcon sx={{ fontSize: "30px" }} />
          <span>Crisis Management Plan_12112021.pdf</span>
        </Box>
      );
    },
  },
  {
    inputType: "select",
    key: "BCP_Manager",
    label: "BCP Manager (Role)",
    options: BcpManagerOPTIONS,
    validation: (Yup: any) => {
      return Yup.object().shape({
        label: Yup.string(),
        value: Yup.number(),
        bgColor: Yup.string(),
        textColor: Yup.string(),
      });
    },
    format: (selectedUserType: any) => {
      console.log("selectedUserType", selectedUserType);
      return selectedUserType && selectedUserType.label;
    },
  },
  //////////////////////////////
];
