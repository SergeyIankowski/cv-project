import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  TextField as MuiTextField,
  TextFieldProps as Props,
  Typography,
} from "@mui/material";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

type InputProps<T extends FieldValues> = Props &
  CheckboxProps &
  UseControllerProps<T>;

export const Input = <T extends FieldValues>({
  children,
  sx,
  margin,
  id,
  label,
  type,
  placeholder,
  multiline,
  select,
  error,
  helperText,
  required,

  name,
  control,
  rules,
}: InputProps<T>) => {
  const {field} = useController({name, control, rules: rules});
  if (type === "date")
    return (
      <MuiTextField
        size="small"
        type="date"
        inputProps={{format: "dd-mm-yyyy"}}
        required={required}
        sx={sx}
        margin={margin}
        id={id}
        label={label}
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
  if (type === "checkbox")
    return (
      <Typography>
        {`${label}: `}
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
      </Typography>
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
      multiline={multiline}
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
