import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  detailsOfHoursService: '',
  socialWorkerNotAvailable: '',
  supervisingSocialWorkerNotAvailable: '',
  areasOfDispute: '',
  financialAllowances: '',
};

export const validationSchema = Yup.object().shape({
  detailsOfHoursService: Yup.string().required('Field is required'),
  socialWorkerNotAvailable: Yup.string().required('Field is required'),
  supervisingSocialWorkerNotAvailable: Yup.string().required('Field is required'),
  areasOfDispute: Yup.string().required('Field is required'),
  financialAllowances: Yup.string().required('Field is required'),
});

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfHoursService',
      label: 'Details of out of hours service, address, contact details and availability',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'socialWorkerNotAvailable',
      label: 'In the event of the social worker not being available, who is the person to contact?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'supervisingSocialWorkerNotAvailable',
      label: 'In the event of the supervising social worker not being available, who is the person to contact?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'areasOfDispute',
      label: 'In the event of any areas of dispute, who is the person to contact?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'financialAllowances',
      label: 'In addition to the agreed financial allowances paid to foster carers, are there any other financial requirements or provision of equipment needed and have these been agreed?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]