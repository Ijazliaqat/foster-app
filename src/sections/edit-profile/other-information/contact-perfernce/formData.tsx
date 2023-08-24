import * as Yup from "yup";

export const defaultValues = {
  phone: false,
  whatsapp: false,
  sms: false,
  email: false,
  notification: false,
  both: false,
  noneof: false,
};

export const FormSchema = Yup.object().shape({
  phone: Yup.boolean(),
  whatsapp: Yup.boolean(),
  sms: Yup.boolean(),
  email: Yup.boolean(),
  notification: Yup.boolean(),
  both: Yup.boolean(),
  noneof: Yup.boolean(),
});
