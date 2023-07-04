/* eslint-disable react/jsx-props-no-spreading */
import {useEffect, useState} from "react";
import {
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldValues,
} from "react-hook-form";
import {skillMasteryValues} from "@/models/SkillsMastery";
import {SkillMasteryInput} from "@/graphql/interfaces/SkillMasteryInput.interface";
import {useSkillsQuery} from "@/graphql/hooks/useSkillsQuery";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {InputsGroup} from "../../view/InputsGroup";

type SkillsInputsGroupProps<T extends FieldValues> = {
  fieldName: string;
  fields: Record<"id", string>[];
  append: UseFieldArrayAppend<T, never>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<T>;
  clearSkill: SkillMasteryInput;
  removeButtonTitle: string;
  addButtonTitle: string;
};

export const SkillsInputsGroup = <T extends FieldValues>({
  fieldName,
  fields,
  register,
  append,
  remove,
  clearSkill,
  removeButtonTitle,
  addButtonTitle,
}: SkillsInputsGroupProps<T>) => {
  const {skills, loading} = useSkillsQuery();
  const [existingSkills, setExistingSkills] = useState<Skill[]>([]);
  useEffect(() => {
    if (!loading) {
      setExistingSkills(skills);
    }
  }, [skills, loading]);

  return (
    <InputsGroup<T>
      values={existingSkills}
      fieldName={fieldName}
      fields={fields}
      register={register}
      append={append}
      remove={remove}
      defaultObject={clearSkill}
      levels={skillMasteryValues}
      removeButtonTitle={removeButtonTitle}
      addButtonTitle={addButtonTitle}
    />
  );
};
