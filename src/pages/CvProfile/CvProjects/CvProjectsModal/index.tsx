import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CvProjectsForm} from "../CvProjectsForm";

export const CvProjectsModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("update")}>
        <CvProjectsForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
