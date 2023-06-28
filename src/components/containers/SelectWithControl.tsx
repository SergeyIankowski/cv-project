import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Language} from "@/graphql/interfaces/Language.interface";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface SelectWithControlProps {
  fields: Skill[] | Language[];
}

export const SelectWithControl = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  fields,
}: Pick<UseControllerProps<T>, "control" | "name" | "defaultValue"> &
  SelectWithControlProps) => {
  const {field} = useController({name, control, defaultValue});
  return (
    <Select
      name={field.name}
      multiple
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      labelId="select-label"
      id="select"
    >
      {fields.map(item => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};
