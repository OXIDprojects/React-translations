import gql from 'graphql-tag';

export const QUERY_LANGUAGES = gql`
        query Languages {
            languages {
                isActive
                isDefault
                languageName
                languageKey
              }
        }
    `;