import {AuthInput} from "@/graphql/interfaces/AuthInput.interface";
import {AuthFormFields} from "@/models/FormFieldsTypes";

export const prepareAuthFormFieldsToRequest = (
  auth: AuthFormFields
): AuthInput => {
  return {
    email: auth.email.toLowerCase(),
    password: auth.password,
  };
};
