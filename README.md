# React-translations

## oxhackathon19

![Alt text](public/pictures/screenshot.png?raw=true "React-Translations")

This is a client-side module application builded with React, Typescript and Apollo, and consumes the OXID GraphQL API ([graph-translations](https://github.com/OXIDprojects/GraphQL-translations)) to manage the information about the "Shop Languages" and provide a unique admin module to easily edit translations for all the strings in the shop. It has automatically generated TypeScript types for the GraphQL queries and it executes these queries using React Hooks.

Why GraphQL + TypeScript?

A GraphQL API is required to be strongly typed, and the data is served from a single endpoint. By calling a GET request on this endpoint, the client can receive a fully self-documented representation of the backend, with all available data and the corresponding types then we can scan our web app directory for query files and match them with the information provided by the GraphQL API to create TypeScript types for all request data this leads to fewer bugs and a much faster iteration speed on our app.

To use this module, the following prerequisites exist: Your shop version must be at least "v6.5.0"
And you need the [graph-translations](https://github.com/OXIDprojects/GraphQL-translations) module installed.
