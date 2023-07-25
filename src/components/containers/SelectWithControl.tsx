import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import Select, {SelectProps} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export const SelectWithControl = <
  FormFieldsType extends FieldValues,
  ValuesType
>({
  name,
  control,
  defaultValue,
  label,
  children,
  renderValue,
  required,
}: Pick<
  UseControllerProps<FormFieldsType>,
  "name" | "control" | "defaultValue"
> &
  SelectProps<ValuesType>) => {
  const {field} = useController({name, control, defaultValue});

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        name={field.name}
        multiple
        multiline
        labelId={`${name}-label`}
        id={name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        required={required}
        renderValue={renderValue}
      >
        {children}
      </Select>
    </FormControl>
  );
};
