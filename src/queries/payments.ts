import { gql } from "@apollo/client";

export const GET_PAYMENTS_BY_USER = gql`
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
    }
  }
`;

export const GET_PAYMENTS = gql`
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
    }
  }
`;
