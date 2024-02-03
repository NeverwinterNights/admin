import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetListPaymentsByIdQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input'];
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortDirection?: Types.InputMaybe<Types.SortDirection>;
}>;


export type GetListPaymentsByIdQuery = { __typename?: 'Query', getListPaymentsById: { __typename?: 'PaymentPaginationModel', pageSize: number } };

export type GetAllPaymentsQueryVariables = Types.Exact<{
  pageSize?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  pageNumber?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortDirection?: Types.InputMaybe<Types.SortDirection>;
}>;


export type GetAllPaymentsQuery = { __typename?: 'Query', getAllPayments: { __typename?: 'PaymentsPaginationModel', pageSize: number } };


export const GetListPaymentsByIdDocument = gql`
    query GetListPaymentsById($userId: Int!, $pageSize: Int, $pageNumber: Int, $sortBy: String, $sortDirection: SortDirection) {
  getListPaymentsById(
    userId: $userId
    sortBy: $sortBy
    sortDirection: $sortDirection
    pageSize: $pageSize
    pageNumber: $pageNumber
  ) {
    pageSize
  }
}
    `;

/**
 * __useGetListPaymentsByIdQuery__
 *
 * To run a query within a React component, call `useGetListPaymentsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPaymentsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPaymentsByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetListPaymentsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>(GetListPaymentsByIdDocument, options);
      }
export function useGetListPaymentsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>(GetListPaymentsByIdDocument, options);
        }
export function useGetListPaymentsByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>(GetListPaymentsByIdDocument, options);
        }
export type GetListPaymentsByIdQueryHookResult = ReturnType<typeof useGetListPaymentsByIdQuery>;
export type GetListPaymentsByIdLazyQueryHookResult = ReturnType<typeof useGetListPaymentsByIdLazyQuery>;
export type GetListPaymentsByIdSuspenseQueryHookResult = ReturnType<typeof useGetListPaymentsByIdSuspenseQuery>;
export type GetListPaymentsByIdQueryResult = Apollo.QueryResult<GetListPaymentsByIdQuery, GetListPaymentsByIdQueryVariables>;
export const GetAllPaymentsDocument = gql`
    query GetAllPayments($pageSize: Int, $pageNumber: Int, $sortBy: String, $sortDirection: SortDirection) {
  getAllPayments(
    pageSize: $pageSize
    pageNumber: $pageNumber
    sortBy: $sortBy
    sortDirection: $sortDirection
  ) {
    pageSize
  }
}
    `;

/**
 * __useGetAllPaymentsQuery__
 *
 * To run a query within a React component, call `useGetAllPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPaymentsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetAllPaymentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
      }
export function useGetAllPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
        }
export function useGetAllPaymentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>(GetAllPaymentsDocument, options);
        }
export type GetAllPaymentsQueryHookResult = ReturnType<typeof useGetAllPaymentsQuery>;
export type GetAllPaymentsLazyQueryHookResult = ReturnType<typeof useGetAllPaymentsLazyQuery>;
export type GetAllPaymentsSuspenseQueryHookResult = ReturnType<typeof useGetAllPaymentsSuspenseQuery>;
export type GetAllPaymentsQueryResult = Apollo.QueryResult<GetAllPaymentsQuery, GetAllPaymentsQueryVariables>;