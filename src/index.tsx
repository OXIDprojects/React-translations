import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
    interface Window { token: any; }
}

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    headers: { Authorization: `Bearer ${window.token}` }
});

const client = new ApolloClient({
    cache: cache,
    link: link,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById("root")
);

