import {Language} from "@/graphql/interfaces/Language.interface";
import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";

export const getLanguagesNamesWithoutChoosed = (
  initial: Language[],
  languagesForDeleting: LanguageProficiency[]
) => {
  const copyLanguages = [...initial];
  const userDataLanguagesNames = languagesForDeleting.map(
    language => language.language_name
  );
  return copyLanguages.filter(
    item => !userDataLanguagesNames.includes(item.name)
  );
};
