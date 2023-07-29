import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateCvForm} from "@/pages/Cvs/CreateCvForm";

export const CreateCvModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createCv")}>
        <CreateCvForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
