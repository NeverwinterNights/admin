import { gql } from "@apollo/client";

export const GET_LIST_PAYMENTS_BY_ID = gql`
  query GetListPaymentsById(
    $userId: Int!
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
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

export const GET_ALL_PAYMENTS = gql`
  query GetAllPayments(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
  ) {
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
