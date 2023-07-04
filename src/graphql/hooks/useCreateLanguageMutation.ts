import {useMutation} from "@apollo/client";
import {CREATE_LANGUAGE} from "@/graphql/mutations";
import {LANGUAGES} from "@/graphql/queries";
import {LanguageInput} from "@/graphql/interfaces/LanguageInput.type";

export const useCreateLanguageMutation = () => {
  const [loadData] = useMutation(CREATE_LANGUAGE, {
    refetchQueries: [LANGUAGES],
  });
  const createLanguage = async (language: LanguageInput) => {
    await loadData({variables: {language}});
  };
  return {createLanguage};
};
