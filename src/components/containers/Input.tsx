import {FC} from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  TextField as MuiTextField,
  TextFieldProps as Props,
} from "@mui/material";
import {useController, UseControllerProps} from "react-hook-form";
import {DateField, DateFieldProps} from "@mui/x-date-pickers/DateField";
import {AuthFormFields} from "@/models/AuthFormFields.type";
import {UpdateUserFormFields} from "@/models/UpdateUserFormFields.type";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, {Dayjs} from "dayjs";

import {UpdateCvFormFields} from "@/models/UpdateCvFormFields.type";
import {UpdateProjectFormFields} from "@/models/UpdateProjectFormFields.type";
import {CreateUserFormFields} from "@/models/CreateUserFormFields.interface";

export interface InputFields
  extends AuthFormFields,
    UpdateUserFormFields,
    UpdateCvFormFields,
    UpdateProjectFormFields,
    CreateUserFormFields {}

export const Input: FC<
  Props &
    CheckboxProps &
    DateFieldProps<"YYYY-MM-DD"> &
    UseControllerProps<InputFields>
> = ({
  children,
  sx,
  margin,
  id,
  label,
  type,
  placeholder,
  select,
  error,
  helperText,
  required,

  name,
  control,
  rules,
}) => {
  const {field} = useController({name, control, rules: rules});
  if (type === "date")
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          required={required}
          id={id}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={dayjs(field.value as Dayjs)}
          defaultValue={dayjs(field.value as Dayjs)}
          name={field.name}
          ref={field.ref}
        />
      </LocalizationProvider>
    );
  if (type === "checkbox")
    return (
      <MuiCheckbox
        size="small"
        required={required}
        sx={sx}
        id={id}
        placeholder={placeholder}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        defaultChecked={field.value as unknown as boolean}
        name={field.name}
        ref={field.ref}
      />
    );
  return (
    <MuiTextField
      size="small"
      required={required}
      sx={sx}
      margin={margin}
      id={id}
      label={label}
      type={type}
      placeholder={placeholder}
      select={select}
      error={error}
      helperText={helperText}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      defaultValue={field.value}
      name={field.name}
      ref={field.ref}
    >
      {children}
    </MuiTextField>
  );
};
