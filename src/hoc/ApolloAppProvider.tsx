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

interface ApolloAppProviderProps {
  children: ReactNode;
}

export const ApolloAppProvider: FC<ApolloAppProviderProps> = ({children}) => {
  const {authToken} = useAuthToken();

  const httpLink = new HttpLink({
    uri: "https://cv-project-js.inno.ws/api/graphql",
  });

  const authMiddleware = (authToken: string) => {
    return new ApolloLink((operation, forward) => {
      if (authToken) {
        operation.setContext({
          headers: {
            authorization: `Baerer ${authToken}`,
          },
        });
      }

      return forward(operation);
    });
  };

  const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({message, locations, path}) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const cache = new InMemoryCache({});

  const client = new ApolloClient({
    link: from([authMiddleware(authToken), errorLink, httpLink]),
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
