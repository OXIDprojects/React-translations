import gql from "graphql-tag";

export const MUTATION_TRANSLATION_UPDATE = gql`
  mutation TranslationUpdate(
    $languageKey: ID!
    $translation: TranslationInput!
  ) {
    translationUpdate(languageKey: $languageKey, translation: $translation) {
      key
      value
    }
  }
`;

export const MUTATION_TRANSLATION_RESET = gql`
  mutation TranslationReset($languageKey: ID!, $key: ID!) {
    translationReset(languageKey: $languageKey, key: $key) {
      key
      value
    }
  }
`;

export const MUTATION_TRANSLATION_RESET_ALL = gql`
  mutation TranslationResetAll($languageKey: ID!) {
    translationResetAll(languageKey: $languageKey)
  }
`;
