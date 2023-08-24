import { Box, Typography } from "@mui/material";
import TableImage from "../../../assets/img/Approve.png";
import Image from "next/image";
import router from "next/router";
import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { RecruitmentStatusDropdown } from "./table-dropdown/recruitment-status-dropdown";

export const SELECTFILTERS = [
  {
    key: "status",
    label: "Status",
    options: [{ label: "status", value: "status" }],
  },
];

export const dataFosterCarerRecruitment = [
  {
    img: TableImage,
    carerCode: "John",
    carerName: "Orcalo",
    gender: "Pakistan",
    areaLocality: "Male",
    areaOffice: "XYZ",
    detailsId: "2163421684589234523806598",
    recruitmentStatus: "Enquiry stage",
  },
  {
    img: TableImage,
    carerCode: "John",
    carerName: "Orcalo",
    gender: "Pakistan",
    areaLocality: "Male",
    areaOffice: "XYZ",
    detailsId: "2163421684589234523806598",
    recruitmentStatus: "Contract & Declaration",
  },
];

export const columnsFosterCarerRecruitment = (makePath: any) => [
  {
    accessorFn: (row: any) => row?.img,
    id: "img",
    cell: (info: any) => (
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Image
          src={info.getValue()}
          alt={"User Image"}
          width={35}
          height={35}
        />
      </Box>
    ),
    header: "Image",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.carerCode,
    id: "carerCode",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Carer Code",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.carerName,
    id: "carerName",
    cell: (info: any) => (
      <Box
        color={(theme: any) => theme.palette.primary.main}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          router.push(
            makePath({
              path: `/recruitment`,
              queryParams: {
                fosterCarerId: `${info?.row?.original?.detailsId}`,
              },
            })
          );
        }}
      >
        {info.getValue() ?? "-"}
      </Box>
    ),
    header: "Carer Name",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.gender,
    id: "gender",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Gender",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.areaLocality,
    id: "areaLocality",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Area Locality",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.areaOffice,
    id: "areaOffice",
    cell: (info: any) => info.getValue() ?? "-",
    header: "Area Office",
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.recruitmentStatus,
    id: "recruitmentStatus",
    cell: (info: any) => (
      <Box display={"flex"} justifyContent={"center"}>
        <RecruitmentStatusDropdown status={info?.getValue()} />
      </Box>
    ),
    header: "Recruitment Status",
    isSortable: false,
  },
];

export const FosterCarerRecruitmentFormData = [
  {
    id: 1,
    heading: "Add Prospective Foster Carer",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
    },
    component: Typography,
  },
  {
    id: 2,
    componentProps: {
      name: "carerCode",
      label: "Carer Code",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "carerName",
      label: "Carer Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "gender",
      label: "Gender",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: GENDERDROPDOWNDATA,
  },
  {
    id: 5,
    componentProps: {
      name: "areaLocality",
      label: "Area/Locality",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      select: true,
    },
    component: RHFSelect,
    options: GENDERDROPDOWNDATA,
  },
];

export const defaultValues = {
  carerCode: "",
  carerName: "",
  gender: "",
  areaLocality: "",
  areaOffice: "",
  img: "",
};

export const FosterCarerRecruitmentFormSchema = Yup.object().shape({
  carerCode: Yup.string().trim().required("Field is Required"),
  carerName: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  areaLocality: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  img: Yup.mixed().required("Field is Required"),
});

export { default as FosterCarerRecruitmentTable } from "./FosterCarerRecruitmentTable";
