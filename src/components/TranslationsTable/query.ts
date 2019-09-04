import gql from 'graphql-tag';

export const QUERY_TRANSLATIONS = gql`
        query Translations($languageKey: ID!) {
            translations(languageKey: $languageKey) {
                languageKey
                translationKey
                translationValue
            }
        }
    `;