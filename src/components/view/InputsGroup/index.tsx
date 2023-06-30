/* eslint-disable react/jsx-props-no-spreading */
import {
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldValues,
} from "react-hook-form";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {capitalize} from "@/utils/capitalize";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import MenuItem from "@mui/material/MenuItem";
import {Language} from "@/graphql/interfaces/Language.interface";
import {SkillMastery} from "@/graphql/interfaces/SkillMastery.interface";
import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";

interface InputsGroupProps<T extends FieldValues> {
  values: Skill[] | Language[];
  fieldName: string;
  fields: Record<"id", string>[];
  append: UseFieldArrayAppend<T, never>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<T>;
  defaultObject: SkillMastery | LanguageProficiency;
  levels: SkillMastery["mastery"][] | LanguageProficiency["proficiency"][];
  removeButtonTitle: string;
  addButtonTitle: string;
}

export const InputsGroup = <T extends FieldValues>({
  values,
  fieldName,
  fields,
  register,
  append,
  remove,
  defaultObject,
  levels,
  removeButtonTitle,
  addButtonTitle,
}: InputsGroupProps<T>) => (
  <>
    <Typography>{capitalize(fieldName)}:</Typography>
    {fields.map((item, index) => {
      const nameField = `${fieldName}.${index}.${
        Object.keys(defaultObject)[0]
      }`;
      const levelField = `${fieldName}.${index}.${
        Object.keys(defaultObject)[1]
      }`;

      return (
        <Grid container direction="column" gap="10px" key={item.id}>
          <Select {...register(nameField as never)} size="small" required>
            {values.map(value => (
              <MenuItem key={value.name} value={value.name}>
                {value.name}
              </MenuItem>
            ))}
          </Select>
          <Select {...register(levelField as never)} size="small" required>
            {levels.map(level => (
              <MenuItem key={level} value={level}>
                {capitalize(level)}
              </MenuItem>
            ))}
          </Select>
          <Button type="button" onClick={() => remove(index)}>
            {removeButtonTitle}
          </Button>
        </Grid>
      );
    })}
    <Button
      type="submit"
      variant="contained"
      color="warning"
      onClick={() => append(defaultObject as never)}
    >
      {addButtonTitle}
    </Button>
  </>
);
