import {useMutation} from "@apollo/client";
import {UPDATE_LANGUAGE} from "@/graphql/mutations";
import {LANGUAGES} from "@/graphql/queries";
import {Language} from "@/graphql/interfaces/Language.interface";
import {LanguageInput} from "@/graphql/interfaces/LanguageInput.type";

export const useUpdateLanguageMutation = () => {
  const [loadData] = useMutation(UPDATE_LANGUAGE, {
    refetchQueries: [LANGUAGES],
  });
  const updateLanguage = async (
    id: Language["id"],
    language: LanguageInput
  ) => {
    await loadData({variables: {id, language}});
  };

  return {updateLanguage};
};
