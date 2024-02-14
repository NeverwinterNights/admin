import { gql } from "@apollo/client";

export const GET_INSTAGRAM_USERS = gql`
  query GetUsers(
    $pageSize: Int
    $pageNumber: Int
    $sortBy: String
    $sortDirection: SortDirection
    $searchTerm: String
    $statusFilter: UserBlockStatus
  ) {
    getUsers(
      pageSize: $pageSize
      pageNumber: $pageNumber
      sortBy: $sortBy
      sortDirection: $sortDirection
      searchTerm: $searchTerm
      statusFilter: $statusFilter
    ) {
      users {
        id
        userName
        userBan {
          createdAt
          reason
        }
        createdAt
      }
      pagination {
        totalCount
        pagesCount
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: Int!) {
    getUser(userId: $userId) {
      id
      profile {
        createdAt
        userName
      }
      userName
    }
  }
`;
