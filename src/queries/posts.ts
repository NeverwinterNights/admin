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
