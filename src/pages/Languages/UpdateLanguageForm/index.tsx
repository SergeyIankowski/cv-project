import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {Language} from "@/graphql/interfaces/Language.interface";
import {LanguageInput} from "@/graphql/interfaces/LanguageInput.type";
import {UpdateLanguageFormFields} from "@/models/FormFieldsTypes";
import {useUpdateLanguageMutation} from "@/graphql/hooks/useUpdateLanguageMutation";

interface UpdateLanguageFormProps {
  id: Language["id"];
  language: LanguageInput;
}

export const UpdateLanguageForm: FC<UpdateLanguageFormProps> = ({
  id,
  language,
}) => {
  const {control, handleSubmit} = useForm<UpdateLanguageFormFields>({
    defaultValues: {
      name: language.name,
      native_name: language.native_name,
      iso2: language.iso2,
    },
  });
  const {closeModal} = useContext(ModalTemplateContext);
  const {updateLanguage} = useUpdateLanguageMutation();
  const {t} = useTranslation();
  const onSubmit = async (data: LanguageInput) => {
    await updateLanguage(id, data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateLanguageFormFields>
          control={control}
          id="name"
          label={t("name")}
          name="name"
        />
        <Input<UpdateLanguageFormFields>
          control={control}
          id="native_name"
          label={t("nativeName")}
          name="native_name"
        />
        <Input<UpdateLanguageFormFields>
          control={control}
          id="iso2"
          label="ISO2"
          name="iso2"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          {t("update")}
        </Button>
      </Box>
    </form>
  );
};
