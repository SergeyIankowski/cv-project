import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {UpdateLanguageForm} from "@/pages/Profile/ProfileLanguages/UpdateLanguageForm";

export const AddLanguageModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("addLanguage")}>
        <UpdateLanguageForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
