import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUsersQueryVariables = Types.Exact<{
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'UsersPaginationModel', users: Array<{ __typename?: 'User', id: number }> } };

export type GetProfileInfoQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input'];
}>;


export type GetProfileInfoQuery = { __typename?: 'Query', getProfileInfo: { __typename?: 'ProfileInfoModel', id: number, userName: string, profile: { __typename?: 'Profile', createdAt: any, userName?: string | null } } };


export const GetUsersDocument = gql`
    query GetUsers($pageSize: Int, $pageNumber: Int) {
  getUsers(pageSize: $pageSize, pageNumber: $pageNumber) {
    users {
      id
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetProfileInfoDocument = gql`
    query GetProfileInfo($userId: Int!) {
  getProfileInfo(userId: $userId) {
    id
    profile {
      createdAt
      userName
    }
    userName
  }
}
    `;

/**
 * __useGetProfileInfoQuery__
 *
 * To run a query within a React component, call `useGetProfileInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileInfoQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProfileInfoQuery(baseOptions: Apollo.QueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(GetProfileInfoDocument, options);
      }
export function useGetProfileInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(GetProfileInfoDocument, options);
        }
export function useGetProfileInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileInfoQuery, GetProfileInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileInfoQuery, GetProfileInfoQueryVariables>(GetProfileInfoDocument, options);
        }
export type GetProfileInfoQueryHookResult = ReturnType<typeof useGetProfileInfoQuery>;
export type GetProfileInfoLazyQueryHookResult = ReturnType<typeof useGetProfileInfoLazyQuery>;
export type GetProfileInfoSuspenseQueryHookResult = ReturnType<typeof useGetProfileInfoSuspenseQuery>;
export type GetProfileInfoQueryResult = Apollo.QueryResult<GetProfileInfoQuery, GetProfileInfoQueryVariables>;