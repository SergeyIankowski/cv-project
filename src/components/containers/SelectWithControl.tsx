import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Select, {SelectProps} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

import {Language} from "@/graphql/interfaces/Language.interface";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {Project} from "@/graphql/interfaces/Project.interface";
import {ID} from "@/graphql/interfaces/ID.type";

type Fields = Skill[] | Language[] | Project[];

interface SelectWithControlProps {
  fields: Fields;
}

const findNameByID = (fields: Fields, id: ID) => {
  const field = fields.find(field => field.id === id);
  return field?.name;
};

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
        renderValue={selected => (
          <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
            {selected.map((value: ID) => (
              <Chip key={value} label={findNameByID(fields, value)} />
            ))}
          </Box>
        )}
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
