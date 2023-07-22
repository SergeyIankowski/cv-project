import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {UpdateLanguageForm} from "@/pages/Profile/ProfileLanguages/UpdateLanguageForm";

export const AddLanguageModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Add Language">
        <UpdateLanguageForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
