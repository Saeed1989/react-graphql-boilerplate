import { gql } from '@apollo/client';

export const BOOK_TITLES = gql`
  query ExampleQuery {
    books {
      title
    }
  }
`;

export const WRITER_NAMES = gql`
  query ExampleQuery {
    writers {
      name
    }
  }
`;
