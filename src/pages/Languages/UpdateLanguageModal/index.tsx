import {FC, ReactNode} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {Language} from "@/graphql/interfaces/Language.interface";
import {UpdateLanguageForm} from "../UpdateLanguageForm";
import {LanguageInput} from "@/graphql/interfaces/LanguageInput.type";

interface UpdateLanguageModalProps {
  id: Language["id"];
  language: LanguageInput;
  children: ReactNode;
}

export const UpdateLanguageModal: FC<UpdateLanguageModalProps> = ({
  id,
  language,
  children,
}) => {
  return (
    <ModalContextTemplateProvider>
      {children}
      <ModalTemplate>
        <UpdateLanguageForm id={id} language={language} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
