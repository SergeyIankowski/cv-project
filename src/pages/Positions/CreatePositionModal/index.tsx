import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreatePositionForm} from "../CreatePositionForm";

export const CreatePositionModal: FC = () => {
  const {t} = useTranslation();
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName={t("createPosition")}>
        <CreatePositionForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
