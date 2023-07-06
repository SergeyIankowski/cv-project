import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateLanguageForm} from "@/pages/Languages/CreateLanguageForm";

export const CreateLanguageModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Language">
        <CreateLanguageForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
