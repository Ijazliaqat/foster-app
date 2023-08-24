import * as Yup from "yup";
export const EXPERIENCE = {
  title: "",
  employmentType: "",
  currentlyWorking: false,
  startDate: new Date(),
  endDate: new Date(),
  headline: "",
  industry: "",
  description: "",
};

export const AddFormValues = {
  companyName: "",
  location: "",
  media: "",
  experiences: [
    {
      ...EXPERIENCE,
    },
  ],
};

export const EmploymentType = [
  {
    label: "Contract",
    value: "Contract",
  },
  {
    label: "Part time",
    value: "Part time",
  },
  {
    value: "Full time",
    label: "Full time",
  },
  {
    value: "Permanent",
    label: "Permanent",
  },
];

const experienceSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  employmentType: Yup.string().required("Employment type is required"),
  // currentlyWorking: Yup.boolean().required("Currently working is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .typeError("End date is required")
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be later than start date"),
  headline: Yup.string().required("Headline is required"),
  industry: Yup.string().required("Industry is required"),
  description: Yup.string().required("Description is required"),
});

export const addFormValuesSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  location: Yup.string().required("Location is required"),
  media: Yup.mixed().required("Image  is is required"),
  experiences: Yup.array()
    .of(experienceSchema)
    .required("Experiences are required"),
});

export const addExperienceForm = [
  {
    type: "text",
    name: "title",
    label: "Title",
  },
  {
    type: "text",
    name: "employmentType",
    label: "Employment Type",
  },
  {
    type: "text",
    name: "companyName",
    label: "Company Name",
  },
  {
    type: "text",
    name: "location",
    label: "Location",
  },
  {
    type: "checkbox",
    name: "currentlyWorking ",
    label: "I am currently working in this role",
    gridSize: { xs: 12 },
  },
  {
    type: "date",
    name: "startDate",
    label: "Start Date",
  },
  {
    type: "date",
    name: "endDate",
    label: "End Date",
  },
  {
    type: "textarea",
    name: "headline",
    label: "Headline",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "industry",
    label: "Industry",
    gridSize: { xs: 12 },
  },
  {
    type: "textarea",
    name: "description",
    label: "Description",
    gridSize: { xs: 12 },
  },
  {
    type: "upload",
    name: "media",
    label: "Media",
  },
];

// <Fragment key={field.id}>

// <Grid item xs={6}  onClick={() => toggleCollapse(index)}
// style={{ cursor: "pointer" }}>
//   <RHFTextField
//     name={`experiences.${index}.title`}
//     label="Title"
//     size="small"
//   />
// </Grid>
// {collapsedIndexes.includes(index) ? null : (
// <>
//   <RHFTextField
//     multiline
//     rows={3}
//     name={`experiences.${index}.headline`}
//     label="HeadLine"
//     size="small"
//   />
//   <RHFTextField
//     multiline
//     rows={3}
//     name={`experiences.${index}.industry`}
//     label="Industry"
//     size="small"
//   />
//   <RHFTextField
//     multiline
//     rows={3}
//     name={`experiences.${index}.description`}
//     label="Description"
//     size="small"
//   />
// </>
// )}
// </Fragment>
