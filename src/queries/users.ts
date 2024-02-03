import { gql } from "@apollo/client";

export const GET_INSTAGRAM_USER = gql`
  query GetUsers($pageSize: Int, $pageNumber: Int) {
    getUsers(pageSize: $pageSize, pageNumber: $pageNumber) {
      users {
        id
      }
    }
  }
`;

export const GET_PROFILE_INFO = gql`
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
