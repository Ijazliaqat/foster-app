import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { useSocialHistoryBirthMother } from "./useSocialHistoryBirthMother";
import { Button, Grid } from "@mui/material";

const SocialHistoryBirthMother = ({ handleNextTab, handleBackTab }: any) => {
  const { methods, handleSubmit, onSubmit, route } =
    useSocialHistoryBirthMother();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "datePicker",
            type: "dob",
            key: "date",
            defaultValue: new Date(),
            label: "Date",
            validation: (Yup: any) => {
              return Yup.date()
                .typeError("End date is required")
                .required("End date is required");
            },
            format: (date: any) => {
              return dayjs(date).format("DD/MM/YYYY");
            },
          },
          {
            inputType: "textField",
            type: "name",
            key: "name",
            defaultValue: "Abc 123 Xyz",
            label:
              "Detail any Significant event from Birth - details of parent",
            validation: (Yup: any) => {},
          },
        ]}
      />
      <Grid item xs={12}>
        <Button
          sx={{
            backgroundColor: "#F6830F",
            "&:hover": {
              backgroundColor: "#F6830F",
            },
            mr: 2,
          }}
          type="submit"
          variant="contained"
          onClick={handleBackTab}
        >
          Back
        </Button>
        <Button type="button" variant="contained" onClick={handleNextTab}>
          Next
        </Button>
      </Grid>
    </FormProvider>
  );
};

export default SocialHistoryBirthMother;
