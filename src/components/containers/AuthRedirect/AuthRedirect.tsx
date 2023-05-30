import {useAuthToken} from "@/hooks/useAuthToken";
import {Pages} from "@/models/Pages";
import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface AuthRedirectProps {
  children: ReactNode;
}

export const AuthRedirect: FC<AuthRedirectProps> = ({children}) => {
  const {authToken} = useAuthToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (authToken) {
      navigate(`${Pages.main.root}${Pages.main.employees}`);
    }
  });
  return <>{children}</>;
};
