import {useBooleanState} from "@/hooks/useBooleanState";
import {FC, ReactNode, createContext} from "react";

interface IModalTemplateContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalTemplateContext = createContext<IModalTemplateContext>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const ModalContextTemplateProvider: FC<ProviderProps> = ({children}) => {
  const [open, setTrue, setFalse] = useBooleanState(false);

  const value: IModalTemplateContext = {
    isOpen: open,
    openModal: () => setTrue(),
    closeModal: () => setFalse(),
  };

  return (
    <ModalTemplateContext.Provider value={value}>
      {children}
    </ModalTemplateContext.Provider>
  );
};
