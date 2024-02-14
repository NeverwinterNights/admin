import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts(
    $searchTerm: String
    $pageSize: Int
    $sortBy: String
    $sortDirection: SortDirection
    $endCursorPostId: Int
  ) {
    getPosts(
      searchTerm: $searchTerm
      pageSize: $pageSize
      sortBy: $sortBy
      sortDirection: $sortDirection
      endCursorPostId: $endCursorPostId
    ) {
      pageSize
    }
  }
`;

export const GET_POSTS_BY_USER = gql`
  query GetPostsByUser($userId: Int!, $endCursorId: Int) {
    getPostsByUser(userId: $userId, endCursorId: $endCursorId) {
      pageSize
    }
  }
`;
