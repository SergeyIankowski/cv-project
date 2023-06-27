import {FC, ReactNode} from "react";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {useAuthToken} from "@/hooks/useAuthToken";
import {Pages} from "@/models/Pages";
import {showToast} from "./ToastsProvider";
import {TOAST_TYPES} from "@/models/ToastTypes";

interface ApolloAppProviderProps {
  children: ReactNode;
}

export const ApolloAppProvider: FC<ApolloAppProviderProps> = ({children}) => {
  const {authToken, removeAuthToken} = useAuthToken();
  const notify = (message: string) => {
    showToast(message, TOAST_TYPES.error);
  };

  const httpLink = new HttpLink({
    uri: "https://cv-project-js.inno.ws/api/graphql",
  });

  const authMiddleware = (authToken: string) => {
    return new ApolloLink((operation, forward) => {
      if (authToken) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });
      }

      return forward(operation);
    });
  };

  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({message, extensions}) => {
        notify(message);
        if (extensions.code === "UNAUTHENTICATED" && authToken) {
          removeAuthToken();
        }
        if (extensions.code === "UNAUTHENTICATED") {
          const pathToLoginPage = `${Pages.auth.root}/${Pages.auth.login}`;
          location.href = pathToLoginPage;
        }
      });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const cache = new InMemoryCache({});

  const client = new ApolloClient({
    link: from([authMiddleware(authToken), errorLink, httpLink]),
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
