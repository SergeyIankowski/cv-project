import {FC} from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  TextField as MuiTextField,
  TextFieldProps as Props,
} from "@mui/material";
import {useController, UseControllerProps} from "react-hook-form";
import {AuthValues} from "@/models/AuthValues.type";
import {UploadedUser} from "@/models/UploadedUser.type";
import {ROLES} from "@/models/Roles";
import {UpdatedCv} from "@/models/UpdatedCv.type";

export interface InputFields extends AuthValues, UploadedUser, UpdatedCv {
  role?: ROLES.admin | ROLES.employee;
}

export const Input: FC<
  Props & CheckboxProps & UseControllerProps<InputFields>
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
        defaultChecked={field.value as boolean}
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
