import gql from 'graphql-tag';

export const MUTATION_UPDATE_TRANSLATION = gql`
    mutation UpdateTranslation($languageKey: ID!, $translationKey: ID!, $translationValue: String!) {
        updateTranslation(languageKey: $languageKey, translationKey: $translationKey, translationValue: $translationValue) {
            languageKey
            translationKey
            translationValue
        }
    }
`;

export const MUTATION_RESET_TRANSLATION = gql`
    mutation ResetTranaslation($languageKey: ID!, $translationKey: ID!) {
        resetTranslation(languageKey: $languageKey, translationKey: $translationKey) {
            languageKey
            translationKey
            translationValue
        }
    }
`;