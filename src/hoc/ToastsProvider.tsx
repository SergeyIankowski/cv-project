import {TOAST_TYPES} from "@/models/ToastTypes";
import {FC, ReactNode} from "react";
import {Toaster, toast} from "react-hot-toast";

interface ToastsProviderProps {
  children: ReactNode;
}

export const showToast = (message: string, type: TOAST_TYPES) => {
  return toast[type](message);
};

export const ToastsProvider: FC<ToastsProviderProps> = ({children}) => {
  return (
    <>
      <Toaster position="top-left" toastOptions={{duration: 5000}} />
      {children}
    </>
  );
};
