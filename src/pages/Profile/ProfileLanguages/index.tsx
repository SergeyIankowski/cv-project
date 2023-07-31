import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {useUserData} from "@/hooks/useUserData";
import {LanguageProficiency} from "@/graphql/interfaces/LanguageProficiency.interface";
import {AddLanguageModal} from "./AddLanguageModal";
import {LanguageCard} from "@view/LanguageCard";
import {prepareUserForUpdatingLanguages} from "@/utils/prepareUserForUpdatingLanguages";
import {ProgressSpinner} from "@/components/view/ProgressSpinner/ProgressSpinner";
import {AuthInfoService} from "@/services/AuthInfoService";

export const ProfileLanguages: FC = () => {
  const {id} = useParams();
  const {userData, calledUserData, loadingUserData} = useUserData(id!);
  const {updateUser} = useUpdateUser();
  const [languages, setLanguages] = useState<LanguageProficiency[]>([]);

  useEffect(() => {
    if (!userData) return;
    setLanguages(
      userData.profile.languages!.map(language => {
        return {
          language_name: language.language_name,
          proficiency: language.proficiency,
        };
      })
    );
  }, [userData]);

  const deleteSkillHandler = async (
    languageName: LanguageProficiency["language_name"]
  ) => {
    const languagesWithoutDeleted = languages.filter(
      language => language.language_name !== languageName
    );
    const userForSend = prepareUserForUpdatingLanguages(
      userData,
      languagesWithoutDeleted
    );

    await updateUser(id!, userForSend);
    setLanguages(languagesWithoutDeleted);
  };

  if (!calledUserData || !userData || loadingUserData)
    return <ProgressSpinner />;
  return (
    <>
      <Grid container justifyContent="flex-end">
        {AuthInfoService.isAdmin() || AuthInfoService.isAuthorizedUser(id!) ? (
          <AddLanguageModal />
        ) : (
          ""
        )}
      </Grid>
      <Grid container gap="10px">
        {languages?.map(language => (
          <LanguageCard
            key={language.language_name}
            language={language}
            onDelete={() => deleteSkillHandler(language.language_name)}
          />
        ))}
      </Grid>
    </>
  );
};
