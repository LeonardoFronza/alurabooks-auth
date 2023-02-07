import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client/react";
import { ReactElement } from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:9000/graphql",
});

type Props = {
  children: ReactElement;
};

const ABApoloClient = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ABApoloClient;
