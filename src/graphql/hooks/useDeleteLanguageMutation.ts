import {useMutation} from "@apollo/client";
import {DELETE_LANGUAGE} from "@/graphql/mutations";
import {LANGUAGES} from "@/graphql/queries";
import {Language} from "@/graphql/interfaces/Language.interface";

export const useDeleteLanguageMutation = () => {
  const [loadData] = useMutation(DELETE_LANGUAGE, {
    refetchQueries: [LANGUAGES],
  });
  const deleteLanguage = async (id: Language["id"]) => {
    await loadData({variables: {id}});
  };

  return {deleteLanguage};
};
