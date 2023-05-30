import {FC} from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as Props,
} from "@mui/material";
import {useController, UseControllerProps} from "react-hook-form";
import {AuthValues} from "@/models/AuthValues.type";
import {UploadedUser} from "@/models/UploadedUser.type";

export interface InputFields extends AuthValues, UploadedUser {}

export const Input: FC<Props & UseControllerProps<InputFields>> = ({
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
      name={field.name}
      ref={field.ref}
    >
      {children}
    </MuiTextField>
  );
};
