import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {LanguageInput} from "@/graphql/interfaces/LanguageInput.type";
import {CreateLanguageFormFields} from "@/models/FormFieldsTypes";
import {useCreateLanguageMutation} from "@/graphql/hooks/useCreateLanguageMutation";

export const CreateLanguageForm: FC = () => {
  const {control, handleSubmit} = useForm<CreateLanguageFormFields>();
  const {closeModal} = useContext(ModalTemplateContext);
  const {createLanguage} = useCreateLanguageMutation();
  const {t} = useTranslation();

  const onSubmit = async (data: LanguageInput) => {
    await createLanguage(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateLanguageFormFields>
          control={control}
          id="name"
          label={t("name")}
          name="name"
        />
        <Input<CreateLanguageFormFields>
          control={control}
          id="native_name"
          label={t("nativeName")}
          name="native_name"
        />
        <Input<CreateLanguageFormFields>
          control={control}
          id="iso2"
          label="ISO2"
          name="iso2"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          {t("create")}
        </Button>
      </Box>
    </form>
  );
};
