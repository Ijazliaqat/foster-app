import { useState, FC, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Button, Grid, Typography } from "@mui/material";
// utils
// components
import {
  FormProvider,
  RHFRadioGroup,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
//
// import { FormSchema, defaultValues } from ".";
//mui icons
import { FormSchema, defaultValues } from "./formData";
import { useTheme } from "@emotion/react";
import SingleFileUploader from "@root/sections/edit-profile/file-uploaders/SingleFileUploader";
import {
  useLazyGetOtherPayInfoQuery,
  useUpdateOtherPayInfoMutation,
} from "@root/services/update-profile/other-information/otherInformationApi";
import {
  displayErrorMessage,
  displaySuccessMessage,
} from "@root/sections/edit-profile/util/Util";
import { enqueueSnackbar } from "notistack";
import FormSkeleton from "@root/sections/edit-profile/render-form/FormSkeleton";
import IsFetching from "@root/components/loaders/IsFetching";
import { isString } from "lodash";

const DBS: FC<any> = ({ setEmploymentStatus }) => {
  const theme: any = useTheme();
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState<File | any>(null);
  const [filep45, setFilep45] = useState<File | any>(null);
  const [avialableFile, setAvialableFile] = useState(null);
  const [avialableP45File, setAvialableP45File] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [updateOtherPayInfo] = useUpdateOtherPayInfoMutation();
  const [getOtherPayInfo] = useLazyGetOtherPayInfoQuery();
  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: async () => {
      const { data, isError, error } = await getOtherPayInfo(null, false);
      setFilep45(data?.data?.paye?.p45Document || null);
      setFile(data?.data?.paye?.referance || null);
      console.log({ data });
      setIsLoading(false);
      if (isError) {
        displayErrorMessage(error, enqueueSnackbar);
        return defaultValues;
      }

      return {
        ...data?.data?.paye,
      };
    },
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const havePs45 = useWatch({ control, name: "previousEmployer" });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    filep45 && formData.append("p45Document", filep45);
    file && formData.append("referance", file);
    for (var key in data) {
      formData.append(key, data[key]);
    }
    try {
      const data = await updateOtherPayInfo(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      setEmploymentStatus("limitedCom");
    } catch (error: any) {
      displayErrorMessage(error, enqueueSnackbar);
    }
  };

  const setFileHandler = (file: File | null) => {
    setFile(file);
  };
  const setP45FileHandler = (file: File | null) => {
    setFilep45(file);
  };
  if (isLoading) return <FormSkeleton />;
  return (
    <>
      {(isSubmitting || isUpdating) && <IsFetching isFetching />}
      <Grid item sm={12}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container justifyContent="center" item sm={12}>
            {/* if a candidate have a valid enhanced DBS  */}
            <Grid item sm={12} container>
              {/* Issue Date */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    fullWidth
                    name="taxCode"
                    label="Pay Tax Code*"
                  />
                </Grid>
              </Grid>
              {/* DBS Online  */}
              <Grid item sm={6} container direction="column">
                <Grid item sx={{ padding: "0.5em" }}>
                  <RHFTextField
                    fullWidth
                    name="insuranceNo"
                    label="National Insurance No.*"
                  />
                </Grid>
              </Grid>
              <Grid item sm={12} sx={{ padding: "0.5em" }}>
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  Do you have a P45 from a previous employer within the current
                  tax year?
                </Typography>
                <RHFRadioGroup
                  name="previousEmployer"
                  options={["Yes", "No"]}
                ></RHFRadioGroup>

                {/* File Uploader if he has P45  */}
                {havePs45 === "No" && (
                  <>
                    <Typography sx={{ fontWeight: 600, color: "black" }}>
                      Tax year runs from April 6 to Apr 5 following year.
                    </Typography>
                    <Typography sx={{ color: "#343A40" }}>
                      Choose the statement that applies that applies to you,
                      either A,B or C, and turn on the appropriate toggle
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: "black" }}>
                      Please choose which statement applies to you
                    </Typography>
                    {/* Option A  */}
                    <Grid item sm={12} container sx={{ padding: "0.5em" }}>
                      <Grid item sm={1}>
                        <RHFSwitch name="a" />
                      </Grid>
                      <Grid item sm={11}>
                        <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                          A. Do not choose this statement if you’re in receipt
                          of a State, works or private pension. Choose this
                          statement if the following applies.
                        </Typography>
                        <Typography sx={{ color: "#343A40", mt: 0.5, pr: 2 }}>
                          This is my first job since 6 April and since the 6
                          April I’ve not received payments from any of the
                          following :
                        </Typography>
                        <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                          <ul>
                            <li>obseeker’s Allowance</li>
                            <li>Employement and Support Allowance</li>
                            <li>Incapacity Benefit</li>
                          </ul>
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Option B  */}
                    <Grid item sm={12} container sx={{ padding: "0.5em" }}>
                      <Grid item sm={1}>
                        <RHFSwitch name="b" />
                      </Grid>
                      <Grid item sm={11}>
                        <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                          B. Do not choose this statement if you’re in receipt
                          of a State, works or private pension. Choose this
                          statement if the following applies.
                        </Typography>
                        <Typography sx={{ color: "#343A40", mt: 0.5, pr: 2 }}>
                          This is my first job since 6 April and since the 6
                          April I’ve not received payments from any of the
                          following :
                        </Typography>
                        <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                          <ul>
                            <li>obseeker’s Allowance</li>
                            <li>Employement and Support Allowance</li>
                            <li>Incapacity Benefit</li>
                          </ul>
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Option C  */}
                    <Grid item sm={12} container sx={{ padding: "0.5em" }}>
                      <Grid item sm={1}>
                        <RHFSwitch name="c" />
                      </Grid>
                      <Grid item sm={11}>
                        <Typography sx={{ color: "#343A40", mt: 0.5 }}>
                          C. Do not choose this statement if you’re in receipt
                          of a State, works or private pension. Choose this
                          statement if the following applies.
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Types of student loans  */}
                    <Grid
                      item
                      sm={12}
                      container
                      sx={{ padding: "0.5em" }}
                      flexDirection="column"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          Student Loan
                        </Typography>
                      </Grid>
                      {/* Plan 1  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Plan 1 student Loan if:
                        </Typography>
                      </Grid>
                      {/* plan 1 options  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>

                      {/* Plan 2  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Plan 2 student Loan if:
                        </Typography>
                      </Grid>
                      {/* plan 1 options  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                    {/* Do you have one of the Student Loans */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Do you have one of the Student Loans
                      </Typography>
                      <RHFRadioGroup
                        name="studentLaon"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                    {/* Post Graduate Loan  */}
                    {/* Types of student loans  */}
                    <Grid
                      item
                      sm={12}
                      container
                      sx={{ padding: "0.5em" }}
                      flexDirection="column"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          Post Graduate Loan
                        </Typography>
                      </Grid>
                      {/* PostGraduate Loan  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Postgraduate Loan if:
                        </Typography>
                      </Grid>
                      {/* PostGraduate Loan  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                    {/* Do you have one of the Student Loans */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Do you have one of the Student Loans
                      </Typography>
                      <RHFRadioGroup
                        name="postgraduateLoan"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                  </>
                )}
                {havePs45 === "Yes" && (
                  <>
                    <Grid item sm={12}>
                      <SingleFileUploader
                        file={filep45}
                        setFileHandler={setP45FileHandler}
                        avialableFile={avialableP45File}
                      />
                    </Grid>

                    <Grid
                      item
                      sm={12}
                      container
                      sx={{ padding: "0.5em" }}
                      flexDirection="column"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          Student Loan
                        </Typography>
                      </Grid>
                      {/* Plan 1  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Plan 1 student Loan if:
                        </Typography>
                      </Grid>
                      {/* plan 1 options  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>

                      {/* Plan 2  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Plan 2 student Loan if:
                        </Typography>
                      </Grid>
                      {/* plan 1 options  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                    {/* Do you have one of the Student Loans */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Do you have one of the Student Loans
                      </Typography>
                      <RHFRadioGroup
                        name="studentLaon"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                    {/*Did You Completed or Leave */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Did you complete or leave your studies before 6th April?
                      </Typography>
                      <RHFRadioGroup
                        name="completeOrLeave"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                    {/*Are You Repaying youe students */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Are you repaying your student loan directly to the
                        student loans company by direct debit?
                      </Typography>
                      <RHFRadioGroup
                        name="repayingDirect"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                    {/*Are You Repaying youe students Plan 1 and Plan 2 */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Are you repaying your student loan directly to the
                        student loans company by direct debit?
                      </Typography>
                      <Grid item>
                        <RHFSwitch name="planA" label="Plan 1" />
                      </Grid>
                      <Grid item>
                        <RHFSwitch name="planB" label="Plan 2" />
                      </Grid>
                    </Grid>
                    {/* Post Graduate Loan  */}
                    {/* Types of student loans  */}
                    <Grid
                      item
                      sm={12}
                      container
                      sx={{ padding: "0.5em" }}
                      flexDirection="column"
                    >
                      <Grid item>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          Post Graduate Loan
                        </Typography>
                      </Grid>
                      {/* PostGraduate Loan  */}
                      <Grid item container>
                        <Typography sx={{ fontWeight: 600, color: "black" }}>
                          You&apos;ll Have a Postgraduate Loan if:
                        </Typography>
                      </Grid>
                      {/* PostGraduate Loan  */}
                      <Grid item container sx={{ pl: 2 }}>
                        <ul>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                          <li>
                            You lived in England or Wales and started your
                            undergraduate course (undergraduate or post
                            graduate)
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                    {/* Do you have one of the Student Loans */}
                    <Grid item sm={12} sx={{ padding: "0.5em" }}>
                      <Typography sx={{ fontWeight: 600, color: "black" }}>
                        Do you have a postgraduate loan which is not fully
                        repaid? *
                      </Typography>
                      <RHFRadioGroup
                        name="postgraduateLoan"
                        options={["Yes", "No"]}
                      ></RHFRadioGroup>
                    </Grid>
                  </>
                )}
              </Grid>
              <Grid item sm={12} sx={{ padding: "0.5em" }}>
                <SingleFileUploader
                  file={file}
                  setFileHandler={setFileHandler}
                  avialableFile={avialableFile}
                />
              </Grid>
              {!disabled && (
                <Grid item sm={12} container direction="column">
                  <Grid item container sx={{ padding: "0.5em" }} spacing={1}>
                    <Grid item>
                      <Button variant="contained" type="submit">
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </>
  );
};

export default DBS;
