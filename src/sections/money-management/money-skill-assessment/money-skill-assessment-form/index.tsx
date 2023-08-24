import { Typography } from "@mui/material";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";

export const MoneySkillAssessmentData = [
  {
    id: 1,
    heading: <h4>Area &gt; Cash Handling</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 2,
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    id: 0,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can name all coins:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
      sx: { mt: 2 },
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 3,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Recognises coins and notes:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 5,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can use small amounts of money:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 6,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 7,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can count change:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 8,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 9,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>When spending money, is aware when change is needed:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 10,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 11,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can use cash machine:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 12,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 13,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can pay cash for purchases :</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 17,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Is aware how to make online purchases:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 18,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 19,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Takes care of cash and valuable items in their possession:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 1,
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Money Awareness</h4>,
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 21,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Understands that money can be exchanged for goods and services:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 23,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Aware once spent money is no longer available to them or other
          purchases
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 24,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 25,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Understands what they can buy for the money they have:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 26,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 27,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong> can make good choices about their money:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 28,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 29,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can consider and understands alternative options:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 30,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 31,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Has a realistic of the cost of basic items (e.g. food):</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 32,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 33,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Understands the concept of saving and its purpose:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 34,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 37,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Understands the concept of earning money:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 38,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 39,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Knows difference between disposable cash and savings:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 40,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 41,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Understands buying on credit, loans, interest and charges.:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 42,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 1,
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Budgeting</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    id: 43,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Can set up a monthly budget covering regular expenses with assistance:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 44,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 45,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Can make budget allowance last for a week:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 46,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 47,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          can read monthly oank statements and make adjustments it necessary:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 48,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 49,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Understands the need to budget for unexpected emergencies and seasonal
          spending:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 50,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 1,
    heading: <h4 style={{ color: "#0E918C" }}>Area &gt; Saving</h4>,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    heading: <h3>Competencies:</h3>,
    component: Typography,
  },
  {
    id: 51,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          {" "}
          Has a savings account or a savings program, or a money box):
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 52,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 53,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Has a savings plan:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 54,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 55,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>Motivated to save tor a partiacular item:</strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 56,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
  {
    id: 57,
    heading: (
      <li style={{marginLeft: 15}}>
        <strong>
          Has had an opportunity to use their savings to purchase a particular
          item:
        </strong>
      </li>
    ),
    componentProps: {
      sx: { mt: 2 },
    },
    component: Typography,
  },
  {
    id: 58,
    gridLength: 6,
    componentProps: {
      name: "name",
      options: [
        "Requires full assistance",
        "Moderate assistance",
        "Minimal / no assistance",
      ],
    },
    component: RHFRadioGroupWithLabel,
    md: 12,
  },
];

// export const MoneySkillAssessmentValidation = Yup.object().shape({
//   date: Yup.date().required("Required"),
//   amount: Yup.string().required("Required"),
//   category: Yup.string().required("Required"),
//   comments: Yup.string().required("Required"),
//   total: Yup.string().required("Required"),
//   subTotal: Yup.string().required("Required"),
// });

// export const defaultValuesMoneySkillAssessment = {
//   date: new Date(),
//   amount: "",
//   category: "",
//   comments: "",
//   total: "",
//   subTotal: "",
// };
