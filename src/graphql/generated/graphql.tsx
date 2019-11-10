import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Language = {
   __typename?: 'Language',
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  key: Scalars['String'],
  isActive: Scalars['Boolean'],
  isDefault: Scalars['Boolean'],
};

export type Mutation = {
   __typename?: 'Mutation',
  translationUpdate: Translation,
  translationReset: Scalars['Boolean'],
  translationResetAll: Scalars['Boolean'],
};


export type MutationTranslationUpdateArgs = {
  languageKey: Scalars['ID'],
  translation: TranslationInput
};


export type MutationTranslationResetArgs = {
  languageKey: Scalars['ID'],
  key: Scalars['ID']
};


export type MutationTranslationResetAllArgs = {
  languageKey: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  /** retrieve a JWT for authentication of further requests */
  token: Scalars['String'],
  translations: Array<Translation>,
  translation?: Maybe<Translation>,
  /** Retrun a language object by ID */
  language?: Maybe<Language>,
  /** Returns all the languages available in the shop */
  languages: Array<Language>,
};


export type QueryTokenArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type QueryTranslationsArgs = {
  languageKey: Scalars['ID']
};


export type QueryTranslationArgs = {
  languageKey: Scalars['ID'],
  key: Scalars['ID']
};


export type QueryLanguageArgs = {
  id: Scalars['ID']
};

export type Translation = {
   __typename?: 'Translation',
  key?: Maybe<Scalars['ID']>,
  value?: Maybe<Scalars['String']>,
};

export type TranslationInput = {
  key: Scalars['ID'],
  value: Scalars['String'],
};

export type LanguagesQueryVariables = {};


export type LanguagesQuery = (
  { __typename?: 'Query' }
  & { languages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'name' | 'key' | 'isActive' | 'isDefault'>
  )> }
);

export type TranslationUpdateMutationVariables = {
  languageKey: Scalars['ID'],
  translation: TranslationInput
};


export type TranslationUpdateMutation = (
  { __typename?: 'Mutation' }
  & { translationUpdate: (
    { __typename?: 'Translation' }
    & Pick<Translation, 'key' | 'value'>
  ) }
);

export type TranslationResetMutationVariables = {
  languageKey: Scalars['ID'],
  key: Scalars['ID']
};


export type TranslationResetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'translationReset'>
);

export type TranslationResetAllMutationVariables = {
  languageKey: Scalars['ID']
};


export type TranslationResetAllMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'translationResetAll'>
);

export type TranslationsQueryVariables = {
  languageKey: Scalars['ID']
};


export type TranslationsQuery = (
  { __typename?: 'Query' }
  & { translations: Array<(
    { __typename?: 'Translation' }
    & Pick<Translation, 'key' | 'value'>
  )> }
);


export const LanguagesDocument = gql`
    query Languages {
  languages {
    id
    name
    key
    isActive
    isDefault
  }
}
    `;
export type LanguagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LanguagesQuery, LanguagesQueryVariables>, 'query'>;

    export const LanguagesComponent = (props: LanguagesComponentProps) => (
      <ApolloReactComponents.Query<LanguagesQuery, LanguagesQueryVariables> query={LanguagesDocument} {...props} />
    );
    
export type LanguagesProps<TChildProps = {}> = ApolloReactHoc.DataProps<LanguagesQuery, LanguagesQueryVariables> & TChildProps;
export function withLanguages<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LanguagesQuery,
  LanguagesQueryVariables,
  LanguagesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LanguagesQuery, LanguagesQueryVariables, LanguagesProps<TChildProps>>(LanguagesDocument, {
      alias: 'languages',
      ...operationOptions
    });
};

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        return ApolloReactHooks.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, baseOptions);
      }
export function useLanguagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, baseOptions);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesQueryResult = ApolloReactCommon.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const TranslationUpdateDocument = gql`
    mutation TranslationUpdate($languageKey: ID!, $translation: TranslationInput!) {
  translationUpdate(languageKey: $languageKey, translation: $translation) {
    key
    value
  }
}
    `;
export type TranslationUpdateMutationFn = ApolloReactCommon.MutationFunction<TranslationUpdateMutation, TranslationUpdateMutationVariables>;
export type TranslationUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TranslationUpdateMutation, TranslationUpdateMutationVariables>, 'mutation'>;

    export const TranslationUpdateComponent = (props: TranslationUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<TranslationUpdateMutation, TranslationUpdateMutationVariables> mutation={TranslationUpdateDocument} {...props} />
    );
    
export type TranslationUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TranslationUpdateMutation, TranslationUpdateMutationVariables> & TChildProps;
export function withTranslationUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TranslationUpdateMutation,
  TranslationUpdateMutationVariables,
  TranslationUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TranslationUpdateMutation, TranslationUpdateMutationVariables, TranslationUpdateProps<TChildProps>>(TranslationUpdateDocument, {
      alias: 'translationUpdate',
      ...operationOptions
    });
};

/**
 * __useTranslationUpdateMutation__
 *
 * To run a mutation, you first call `useTranslationUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTranslationUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [translationUpdateMutation, { data, loading, error }] = useTranslationUpdateMutation({
 *   variables: {
 *      languageKey: // value for 'languageKey'
 *      translation: // value for 'translation'
 *   },
 * });
 */
export function useTranslationUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TranslationUpdateMutation, TranslationUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<TranslationUpdateMutation, TranslationUpdateMutationVariables>(TranslationUpdateDocument, baseOptions);
      }
export type TranslationUpdateMutationHookResult = ReturnType<typeof useTranslationUpdateMutation>;
export type TranslationUpdateMutationResult = ApolloReactCommon.MutationResult<TranslationUpdateMutation>;
export type TranslationUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<TranslationUpdateMutation, TranslationUpdateMutationVariables>;
export const TranslationResetDocument = gql`
    mutation TranslationReset($languageKey: ID!, $key: ID!) {
  translationReset(languageKey: $languageKey, key: $key)
}
    `;
export type TranslationResetMutationFn = ApolloReactCommon.MutationFunction<TranslationResetMutation, TranslationResetMutationVariables>;
export type TranslationResetComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TranslationResetMutation, TranslationResetMutationVariables>, 'mutation'>;

    export const TranslationResetComponent = (props: TranslationResetComponentProps) => (
      <ApolloReactComponents.Mutation<TranslationResetMutation, TranslationResetMutationVariables> mutation={TranslationResetDocument} {...props} />
    );
    
export type TranslationResetProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TranslationResetMutation, TranslationResetMutationVariables> & TChildProps;
export function withTranslationReset<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TranslationResetMutation,
  TranslationResetMutationVariables,
  TranslationResetProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TranslationResetMutation, TranslationResetMutationVariables, TranslationResetProps<TChildProps>>(TranslationResetDocument, {
      alias: 'translationReset',
      ...operationOptions
    });
};

/**
 * __useTranslationResetMutation__
 *
 * To run a mutation, you first call `useTranslationResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTranslationResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [translationResetMutation, { data, loading, error }] = useTranslationResetMutation({
 *   variables: {
 *      languageKey: // value for 'languageKey'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useTranslationResetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TranslationResetMutation, TranslationResetMutationVariables>) {
        return ApolloReactHooks.useMutation<TranslationResetMutation, TranslationResetMutationVariables>(TranslationResetDocument, baseOptions);
      }
export type TranslationResetMutationHookResult = ReturnType<typeof useTranslationResetMutation>;
export type TranslationResetMutationResult = ApolloReactCommon.MutationResult<TranslationResetMutation>;
export type TranslationResetMutationOptions = ApolloReactCommon.BaseMutationOptions<TranslationResetMutation, TranslationResetMutationVariables>;
export const TranslationResetAllDocument = gql`
    mutation TranslationResetAll($languageKey: ID!) {
  translationResetAll(languageKey: $languageKey)
}
    `;
export type TranslationResetAllMutationFn = ApolloReactCommon.MutationFunction<TranslationResetAllMutation, TranslationResetAllMutationVariables>;
export type TranslationResetAllComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TranslationResetAllMutation, TranslationResetAllMutationVariables>, 'mutation'>;

    export const TranslationResetAllComponent = (props: TranslationResetAllComponentProps) => (
      <ApolloReactComponents.Mutation<TranslationResetAllMutation, TranslationResetAllMutationVariables> mutation={TranslationResetAllDocument} {...props} />
    );
    
export type TranslationResetAllProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TranslationResetAllMutation, TranslationResetAllMutationVariables> & TChildProps;
export function withTranslationResetAll<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TranslationResetAllMutation,
  TranslationResetAllMutationVariables,
  TranslationResetAllProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TranslationResetAllMutation, TranslationResetAllMutationVariables, TranslationResetAllProps<TChildProps>>(TranslationResetAllDocument, {
      alias: 'translationResetAll',
      ...operationOptions
    });
};

/**
 * __useTranslationResetAllMutation__
 *
 * To run a mutation, you first call `useTranslationResetAllMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTranslationResetAllMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [translationResetAllMutation, { data, loading, error }] = useTranslationResetAllMutation({
 *   variables: {
 *      languageKey: // value for 'languageKey'
 *   },
 * });
 */
export function useTranslationResetAllMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TranslationResetAllMutation, TranslationResetAllMutationVariables>) {
        return ApolloReactHooks.useMutation<TranslationResetAllMutation, TranslationResetAllMutationVariables>(TranslationResetAllDocument, baseOptions);
      }
export type TranslationResetAllMutationHookResult = ReturnType<typeof useTranslationResetAllMutation>;
export type TranslationResetAllMutationResult = ApolloReactCommon.MutationResult<TranslationResetAllMutation>;
export type TranslationResetAllMutationOptions = ApolloReactCommon.BaseMutationOptions<TranslationResetAllMutation, TranslationResetAllMutationVariables>;
export const TranslationsDocument = gql`
    query Translations($languageKey: ID!) {
  translations(languageKey: $languageKey) {
    key
    value
  }
}
    `;
export type TranslationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TranslationsQuery, TranslationsQueryVariables>, 'query'> & ({ variables: TranslationsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TranslationsComponent = (props: TranslationsComponentProps) => (
      <ApolloReactComponents.Query<TranslationsQuery, TranslationsQueryVariables> query={TranslationsDocument} {...props} />
    );
    
export type TranslationsProps<TChildProps = {}> = ApolloReactHoc.DataProps<TranslationsQuery, TranslationsQueryVariables> & TChildProps;
export function withTranslations<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TranslationsQuery,
  TranslationsQueryVariables,
  TranslationsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TranslationsQuery, TranslationsQueryVariables, TranslationsProps<TChildProps>>(TranslationsDocument, {
      alias: 'translations',
      ...operationOptions
    });
};

/**
 * __useTranslationsQuery__
 *
 * To run a query within a React component, call `useTranslationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTranslationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTranslationsQuery({
 *   variables: {
 *      languageKey: // value for 'languageKey'
 *   },
 * });
 */
export function useTranslationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
        return ApolloReactHooks.useQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, baseOptions);
      }
export function useTranslationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TranslationsQuery, TranslationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TranslationsQuery, TranslationsQueryVariables>(TranslationsDocument, baseOptions);
        }
export type TranslationsQueryHookResult = ReturnType<typeof useTranslationsQuery>;
export type TranslationsLazyQueryHookResult = ReturnType<typeof useTranslationsLazyQuery>;
export type TranslationsQueryResult = ApolloReactCommon.QueryResult<TranslationsQuery, TranslationsQueryVariables>;