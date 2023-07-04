import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Select, {SelectProps} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import {Language} from "@/graphql/interfaces/Language.interface";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {Project} from "@/graphql/interfaces/Project.interface";

interface SelectWithControlProps {
  fields: Skill[] | Language[] | Project[];
}

export const SelectWithControl = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  label,
  fields,
  required,
}: Pick<UseControllerProps<T>, "name" | "control" | "defaultValue"> &
  SelectWithControlProps &
  SelectProps) => {
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
      >
        {fields.map(item => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
