import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** An type for address data */
export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  streetnr?: Maybe<Scalars['String']>;
  additionalinfo?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  countryshortcut?: Maybe<Scalars['String']>;
};

/** An type for address data */
export type Addressinput = {
  street?: Maybe<Scalars['String']>;
  streetnr?: Maybe<Scalars['String']>;
  additionalinfo?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  countryshortcut?: Maybe<Scalars['String']>;
};

/** A language object existing in the shop */
export type Language = {
  __typename?: 'Language';
  languageKey: Scalars['ID'];
  languageName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isDefault?: Maybe<Scalars['Boolean']>;
};

/** Get / update authentification token */
export type Login = {
  __typename?: 'Login';
  token?: Maybe<Scalars['String']>;
};

/** The base mutation type */
export type Mutation = {
  __typename?: 'mutation';
  /** Creates a new user object in the database. */
  createUser?: Maybe<User>;
  /** Updates an existing user object in the database. */
  updateUser?: Maybe<User>;
  /** update translation object */
  updateTranslation?: Maybe<Translation>;
  /** Danger! Reset specific changed translation for the language. */
  resetTranslation?: Maybe<Translation>;
  /** Danger! Delete all changed translations for the language. */
  resetTranslations?: Maybe<Scalars['String']>;
};

/** The base mutation type */
export type MutationCreateUserArgs = {
  user?: Maybe<Usercreateinput>;
};

/** The base mutation type */
export type MutationUpdateUserArgs = {
  user?: Maybe<Userupdateinput>;
};

/** The base mutation type */
export type MutationUpdateTranslationArgs = {
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
  translationValue: Scalars['String'];
};

/** The base mutation type */
export type MutationResetTranslationArgs = {
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
};

/** The base mutation type */
export type MutationResetTranslationsArgs = {
  languageKey: Scalars['ID'];
};

/** The base query type */
export type Query = {
  __typename?: 'query';
  /** Returns a jason web token according to the provide credentials. If no
   * credentials are given, a token for anonymous login is returned.
   */
  login?: Maybe<Login>;
  /** Changes the language in the current auth token, signs it again and returns the changed token. */
  setlanguage?: Maybe<Login>;
  /** Get a user object. If no parameter is given, get self. */
  user?: Maybe<User>;
  /** Get a specific shop language object. */
  language?: Maybe<Language>;
  /** Get a list of languages. */
  languages?: Maybe<Array<Maybe<Language>>>;
  /** Get a list of translations. */
  translations?: Maybe<Array<Maybe<Translation>>>;
  /** Get a specific translation for a language */
  translation?: Maybe<Translation>;
};

/** The base query type */
export type QueryLoginArgs = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  shopid?: Maybe<Scalars['Int']>;
};

/** The base query type */
export type QuerySetlanguageArgs = {
  lang: Scalars['String'];
};

/** The base query type */
export type QueryUserArgs = {
  userid?: Maybe<Scalars['String']>;
};

/** The base query type */
export type QueryLanguageArgs = {
  languageKey: Scalars['ID'];
};

/** The base query type */
export type QueryTranslationsArgs = {
  languageKey: Scalars['ID'];
};

/** The base query type */
export type QueryTranslationArgs = {
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
};

/** Translation existing in the shop */
export type Translation = {
  __typename?: 'Translation';
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
  translationValue: Scalars['String'];
};

/** Rudimentary user object */
export type User = {
  __typename?: 'User';
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
};

/** An type for address data */
export type Usercreateinput = {
  username: Scalars['String'];
  password: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  address?: Maybe<Addressinput>;
  usergroup: Scalars['String'];
  shopid?: Maybe<Scalars['Int']>;
};

/** An type for address data */
export type Userupdateinput = {
  password?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  address?: Maybe<Addressinput>;
};
export type UpdateTranslationMutationVariables = {
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
  translationValue: Scalars['String'];
};

export type UpdateTranslationMutation = { __typename?: 'mutation' } & {
  updateTranslation: Maybe<
    { __typename?: 'Translation' } & Pick<
      Translation,
      'languageKey' | 'translationKey' | 'translationValue'
    >
  >;
};

export type ResetTranaslationMutationVariables = {
  languageKey: Scalars['ID'];
  translationKey: Scalars['ID'];
};

export type ResetTranaslationMutation = { __typename?: 'mutation' } & {
  resetTranslation: Maybe<
    { __typename?: 'Translation' } & Pick<
      Translation,
      'languageKey' | 'translationKey' | 'translationValue'
    >
  >;
};

export type TranslationsQueryVariables = {
  languageKey: Scalars['ID'];
};

export type TranslationsQuery = { __typename?: 'query' } & {
  translations: Maybe<
    Array<
      Maybe<
        { __typename?: 'Translation' } & Pick<
          Translation,
          'languageKey' | 'translationKey' | 'translationValue'
        >
      >
    >
  >;
};

export type LanguagesQueryVariables = {};

export type LanguagesQuery = { __typename?: 'query' } & {
  languages: Maybe<
    Array<
      Maybe<
        { __typename?: 'Language' } & Pick<
          Language,
          'isActive' | 'isDefault' | 'languageName' | 'languageKey'
        >
      >
    >
  >;
};

export const UpdateTranslationDocument = gql`
  mutation UpdateTranslation($languageKey: ID!, $translationKey: ID!, $translationValue: String!) {
    updateTranslation(
      languageKey: $languageKey
      translationKey: $translationKey
      translationValue: $translationValue
    ) {
      languageKey
      translationKey
      translationValue
    }
  }
`;
export type UpdateTranslationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateTranslationMutation,
  UpdateTranslationMutationVariables
>;
export type UpdateTranslationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables
  >,
  'mutation'
>;

export const UpdateTranslationComponent = (props: UpdateTranslationComponentProps) => (
  <ApolloReactComponents.Mutation<UpdateTranslationMutation, UpdateTranslationMutationVariables>
    mutation={UpdateTranslationDocument}
    {...props}
  />
);

export type UpdateTranslationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  UpdateTranslationMutation,
  UpdateTranslationMutationVariables
> &
  TChildProps;
export function withUpdateTranslation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables,
    UpdateTranslationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables,
    UpdateTranslationProps<TChildProps>
  >(UpdateTranslationDocument, {
    alias: 'withUpdateTranslation',
    ...operationOptions
  });
}

export function useUpdateTranslationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateTranslationMutation,
    UpdateTranslationMutationVariables
  >(UpdateTranslationDocument, baseOptions);
}
export type UpdateTranslationMutationHookResult = ReturnType<typeof useUpdateTranslationMutation>;
export type UpdateTranslationMutationResult = ApolloReactCommon.MutationResult<
  UpdateTranslationMutation
>;
export type UpdateTranslationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTranslationMutation,
  UpdateTranslationMutationVariables
>;
export const ResetTranaslationDocument = gql`
  mutation ResetTranaslation($languageKey: ID!, $translationKey: ID!) {
    resetTranslation(languageKey: $languageKey, translationKey: $translationKey) {
      languageKey
      translationKey
      translationValue
    }
  }
`;
export type ResetTranaslationMutationFn = ApolloReactCommon.MutationFunction<
  ResetTranaslationMutation,
  ResetTranaslationMutationVariables
>;
export type ResetTranaslationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    ResetTranaslationMutation,
    ResetTranaslationMutationVariables
  >,
  'mutation'
>;

export const ResetTranaslationComponent = (props: ResetTranaslationComponentProps) => (
  <ApolloReactComponents.Mutation<ResetTranaslationMutation, ResetTranaslationMutationVariables>
    mutation={ResetTranaslationDocument}
    {...props}
  />
);

export type ResetTranaslationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  ResetTranaslationMutation,
  ResetTranaslationMutationVariables
> &
  TChildProps;
export function withResetTranaslation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ResetTranaslationMutation,
    ResetTranaslationMutationVariables,
    ResetTranaslationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    ResetTranaslationMutation,
    ResetTranaslationMutationVariables,
    ResetTranaslationProps<TChildProps>
  >(ResetTranaslationDocument, {
    alias: 'withResetTranaslation',
    ...operationOptions
  });
}

export function useResetTranaslationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResetTranaslationMutation,
    ResetTranaslationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    ResetTranaslationMutation,
    ResetTranaslationMutationVariables
  >(ResetTranaslationDocument, baseOptions);
}
export type ResetTranaslationMutationHookResult = ReturnType<typeof useResetTranaslationMutation>;
export type ResetTranaslationMutationResult = ApolloReactCommon.MutationResult<
  ResetTranaslationMutation
>;
export type ResetTranaslationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetTranaslationMutation,
  ResetTranaslationMutationVariables
>;
export const TranslationsDocument = gql`
  query Translations($languageKey: ID!) {
    translations(languageKey: $languageKey) {
      languageKey
      translationKey
      translationValue
    }
  }
`;
export type TranslationsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<TranslationsQuery, TranslationsQueryVariables>,
  'query'
> &
  ({ variables: TranslationsQueryVariables; skip?: boolean } | { skip: boolean });

export const TranslationsComponent = (props: TranslationsComponentProps) => (
  <ApolloReactComponents.Query<TranslationsQuery, TranslationsQueryVariables>
    query={TranslationsDocument}
    {...props}
  />
);

export type TranslationsProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  TranslationsQuery,
  TranslationsQueryVariables
> &
  TChildProps;
export function withTranslations<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TranslationsQuery,
    TranslationsQueryVariables,
    TranslationsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    TranslationsQuery,
    TranslationsQueryVariables,
    TranslationsProps<TChildProps>
  >(TranslationsDocument, {
    alias: 'withTranslations',
    ...operationOptions
  });
}

export function useTranslationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<TranslationsQuery, TranslationsQueryVariables>
) {
  return ApolloReactHooks.useQuery<TranslationsQuery, TranslationsQueryVariables>(
    TranslationsDocument,
    baseOptions
  );
}
export type TranslationsQueryHookResult = ReturnType<typeof useTranslationsQuery>;
export type TranslationsQueryResult = ApolloReactCommon.QueryResult<
  TranslationsQuery,
  TranslationsQueryVariables
>;
export const LanguagesDocument = gql`
  query Languages {
    languages {
      isActive
      isDefault
      languageName
      languageKey
    }
  }
`;
export type LanguagesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<LanguagesQuery, LanguagesQueryVariables>,
  'query'
>;

export const LanguagesComponent = (props: LanguagesComponentProps) => (
  <ApolloReactComponents.Query<LanguagesQuery, LanguagesQueryVariables>
    query={LanguagesDocument}
    {...props}
  />
);

export type LanguagesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  LanguagesQuery,
  LanguagesQueryVariables
> &
  TChildProps;
export function withLanguages<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LanguagesQuery,
    LanguagesQueryVariables,
    LanguagesProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LanguagesQuery,
    LanguagesQueryVariables,
    LanguagesProps<TChildProps>
  >(LanguagesDocument, {
    alias: 'withLanguages',
    ...operationOptions
  });
}

export function useLanguagesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>
) {
  return ApolloReactHooks.useQuery<LanguagesQuery, LanguagesQueryVariables>(
    LanguagesDocument,
    baseOptions
  );
}
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesQueryResult = ApolloReactCommon.QueryResult<
  LanguagesQuery,
  LanguagesQueryVariables
>;
