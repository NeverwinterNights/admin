import * as Types from "../types";

import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";

const defaultOptions = {} as const;

export type GetPaymentsByUserQueryVariables = Types.Exact<{
  userId: Types.Scalars["Int"]["input"];
  pageSize?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  pageNumber?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  sortBy?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  sortDirection?: Types.InputMaybe<Types.SortDirection>;
}>;

export type GetPaymentsByUserQuery = {
  __typename?: "Query";
  getPaymentsByUser: {
    __typename?: "PaymentPaginationModel";
    pageSize: number;
    totalCount: number;
    items: Array<{
      __typename?: "Subscription";
      dateOfPayment?: any | null;
      id: string;
      endDate?: any | null;
      price: number;
      startDate?: any | null;
      paymentType?: Types.PaymentMethod | null;
    }>;
  };
};

export type GetPaymentsQueryVariables = Types.Exact<{
  pageSize?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  pageNumber?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  sortBy?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  sortDirection?: Types.InputMaybe<Types.SortDirection>;
  searchTerm?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
}>;

export type GetPaymentsQuery = {
  __typename?: "Query";
  getPayments: {
    __typename?: "PaymentsPaginationModel";
    pageSize: number;
    totalCount: number;
    items: Array<{
      __typename?: "SubscriptionPaymentsModel";
      createdAt?: any | null;
      id?: number | null;
      paymentMethod: Types.PaymentMethod;
      amount?: number | null;
      endDate?: any | null;
      userName: string;
      type: Types.SubscriptionType;
      avatars?: Array<{
        __typename?: "Avatar";
        height?: number | null;
        url?: string | null;
      }> | null;
    }>;
  };
};

export const GetPaymentsByUserDocument = gql`
  query GetPaymentsByUser(
    $userId: Int!
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
    getPaymentsByUser(
      userId: $userId
      sortBy: $sortBy
      sortDirection: $sortDirection
      pageSize: $pageSize
      pageNumber: $pageNumber
    ) {
      pageSize
      totalCount
      items {
        dateOfPayment
        id
        endDate
        price
        startDate
        paymentType
      }
    }
  }
`;

/**
 * __useGetPaymentsByUserQuery__
 *
 * To run a query within a React component, call `useGetPaymentsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *   },
 * });
 */
export function useGetPaymentsByUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >(GetPaymentsByUserDocument, options);
}

export function useGetPaymentsByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >(GetPaymentsByUserDocument, options);
}

export function useGetPaymentsByUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<
    GetPaymentsByUserQuery,
    GetPaymentsByUserQueryVariables
  >(GetPaymentsByUserDocument, options);
}

export type GetPaymentsByUserQueryHookResult = ReturnType<
  typeof useGetPaymentsByUserQuery
>;
export type GetPaymentsByUserLazyQueryHookResult = ReturnType<
  typeof useGetPaymentsByUserLazyQuery
>;
export type GetPaymentsByUserSuspenseQueryHookResult = ReturnType<
  typeof useGetPaymentsByUserSuspenseQuery
>;
export type GetPaymentsByUserQueryResult = Apollo.QueryResult<
  GetPaymentsByUserQuery,
  GetPaymentsByUserQueryVariables
>;
export const GetPaymentsDocument = gql`
  query GetPayments(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
  ) {
    getPayments(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
    ) {
      pageSize
      totalCount
      items {
        createdAt
        id
        paymentMethod
        amount
        endDate
        userName
        type
        avatars {
          height
          url
        }
      }
    }
  }
`;

/**
 * __useGetPaymentsQuery__
 *
 * To run a query within a React component, call `useGetPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentsQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNumber: // value for 'pageNumber'
 *      sortBy: // value for 'sortBy'
 *      sortDirection: // value for 'sortDirection'
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetPaymentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentsQuery,
    GetPaymentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options,
  );
}

export function useGetPaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentsQuery,
    GetPaymentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options,
  );
}

export function useGetPaymentsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPaymentsQuery,
    GetPaymentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useSuspenseQuery<GetPaymentsQuery, GetPaymentsQueryVariables>(
    GetPaymentsDocument,
    options,
  );
}

export type GetPaymentsQueryHookResult = ReturnType<typeof useGetPaymentsQuery>;
export type GetPaymentsLazyQueryHookResult = ReturnType<
  typeof useGetPaymentsLazyQuery
>;
export type GetPaymentsSuspenseQueryHookResult = ReturnType<
  typeof useGetPaymentsSuspenseQuery
>;
export type GetPaymentsQueryResult = Apollo.QueryResult<
  GetPaymentsQuery,
  GetPaymentsQueryVariables
>;
