import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateLanguageForm} from "@/pages/Languages/CreateLanguageForm";

export const CreateLanguageModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createLanguage")}>
        <CreateLanguageForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
