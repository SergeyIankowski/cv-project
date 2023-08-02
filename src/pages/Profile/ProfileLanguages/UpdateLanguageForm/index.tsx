import {FC, useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {Button} from "@containers/Button";
import {Input} from "@containers/Input";
import {useLanguagesQuery} from "@/graphql/hooks/useLanguagesQuery";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {useUserData} from "@/hooks/useUserData";
import {Language} from "@/graphql/interfaces/Language.interface";
import {AddLanguageFormFields} from "@/models/FormFieldsTypes";
import {
  LanguagesProficiency,
  languagesProficiencyValues,
} from "@/models/LanguagesProficiency";
import {prepareUserForUpdatingLanguages} from "@/utils/prepareUserForUpdatingLanguages";
import {getLanguagesNamesWithoutChoosed} from "@/utils/getLanguagesNamesWithoutChoosed";
import {useTranslation} from "react-i18next";

export const UpdateLanguageForm: FC = () => {
  const {id} = useParams();
  const {userData} = useUserData(id!);
  const {languages} = useLanguagesQuery();
  const {updateUser} = useUpdateUser();
  const {closeModal} = useContext(ModalTemplateContext);
  const {t} = useTranslation();

  const [languagesForChoose, setLanguagesForChoose] = useState<Language[]>([]);
  const {control, handleSubmit} = useForm<AddLanguageFormFields>({
    defaultValues: {
      language_name: "",
      proficiency: LanguagesProficiency.a1,
    },
  });

  useEffect(() => {
    if (!userData && !languages) return;
    const languagesNames = getLanguagesNamesWithoutChoosed(
      languages,
      userData.profile.languages!
    );
    setLanguagesForChoose(languagesNames);
  }, [userData, languages]);

  const onSubmit = async (data: AddLanguageFormFields) => {
    if (userData.profile.skills) {
      const languagesWithAddedlanguage = [...userData.profile.languages!, data];
      const userForSend = prepareUserForUpdatingLanguages(
        userData,
        languagesWithAddedlanguage
      );

      await updateUser(id!, userForSend);
    }
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<AddLanguageFormFields>
          control={control}
          select
          id="language_name"
          label={t("languageName")}
          name="language_name"
        >
          <MenuItem value={undefined}></MenuItem>
          {languagesForChoose.map((language: Language) => (
            <MenuItem key={language.name} value={language.name}>
              {language.name}
            </MenuItem>
          ))}
        </Input>
        <Input<AddLanguageFormFields>
          control={control}
          select
          id="proficiency"
          label={t("proficiency")}
          name="proficiency"
        >
          <MenuItem value={undefined}></MenuItem>
          {languagesProficiencyValues.map(proficiency => (
            <MenuItem key={proficiency} value={proficiency}>
              {proficiency}
            </MenuItem>
          ))}
        </Input>
        <Button variant="contained" color="error" size="small" type="submit">
          {t("update")}
        </Button>
      </Box>
    </form>
  );
};
