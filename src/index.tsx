import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import React from "react";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ReactDOM from "react-dom";
import App from "./App";

declare global {
  interface Window {
    token: any;
  }
}
const token = process.env.REACT_APP_ACCESS_TOKEN;
console.log(token);
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${token ? token : window.token}`
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
