/* eslint-disable react/jsx-props-no-spreading */
import {
  UseFormRegister,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldValues,
} from "react-hook-form";
import {languagesProficiencyValues} from "@/models/LanguagesProficiency";
import {LanguageProficiencyInput} from "@/graphql/interfaces/LanguageProficiencyInput.interface";
import {useLanguagesQuery} from "@/graphql/hooks/useLanguagesQuery";
import {useEffect, useState} from "react";
import {Language} from "@/graphql/interfaces/Language.interface";
import {InputsGroup} from "@view/InputsGroup";

type LanguagesInputsGroupProps<T extends FieldValues> = {
  name: string;
  fields: Record<"id", string>[];
  append: UseFieldArrayAppend<T, never>;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<T>;
  clearLanguage: LanguageProficiencyInput;
  removeButtonTitle: string;
  addButtonTitle: string;
};

export const LanguagesInputsGroup = <T extends FieldValues>({
  name,
  fields,
  register,
  append,
  remove,
  clearLanguage,
  removeButtonTitle,
  addButtonTitle,
}: LanguagesInputsGroupProps<T>) => {
  const {languages, loading} = useLanguagesQuery();
  const [existingLanguages, setExistingLanguages] = useState<Language[]>([]);
  useEffect(() => {
    if (!loading) {
      setExistingLanguages(languages);
    }
  }, [languages, loading]);
  return (
    <InputsGroup<T>
      values={existingLanguages}
      fieldName={name}
      fields={fields}
      register={register}
      append={append}
      remove={remove}
      defaultObject={clearLanguage}
      levels={languagesProficiencyValues}
      removeButtonTitle={removeButtonTitle}
      addButtonTitle={addButtonTitle}
    />
  );
};
