import {duration} from "@mui/material";
import {FC, ReactNode} from "react";
import {Toaster} from "react-hot-toast";

interface ToastsProviderProps {
  children: ReactNode;
}

export const ToastsProvider: FC<ToastsProviderProps> = ({children}) => {
  return (
    <>
      <Toaster position="top-left" toastOptions={{duration: 5000}} />
      {children}
    </>
  );
};
