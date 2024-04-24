import * as yup from "yup";

const NAME_SCHEMA = yup.string(). min(2);

const EMAIL_SCHEMA = yup.string().email();

const PASSWORD_SCHEMA = yup.string().min(8).max(16);

const CONFIRM_PASSWORD_SCHEMA = yup.string()
.label("confirm password")
.oneOf([yup.ref("password"), null],  "Passwords must match")

export const USER_REGISTRATION_SCHEMA = yup.object({
  imgSrc: yup.string().url(),
  firstName: NAME_SCHEMA.required(),
  lastName: NAME_SCHEMA.required(),
  email: EMAIL_SCHEMA.required(),
  isMale: yup.boolean(),
  password: PASSWORD_SCHEMA.required(),
  confirm_password: CONFIRM_PASSWORD_SCHEMA. required(),
});

export const USER_UPDATE_SCHEMA = yup.object({
  imgSrc: yup.string().url(),
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  isMale: yup.boolean(),
  password: PASSWORD_SCHEMA,
  confirm_password: CONFIRM_PASSWORD_SCHEMA
});
