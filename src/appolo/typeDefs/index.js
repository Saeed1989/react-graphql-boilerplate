import { gql } from '@apollo/client';

export const BOOK_TITLES = gql`
  query ExampleQuery {
    books {
      title
    }
  }
`;
