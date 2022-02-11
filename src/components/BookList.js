import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const BookList = () => {
  const { loading, error, data } = useQuery(BOOK_TITLES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book) => (
    <div key={book.title}>
      <p>
        {book.title}
      </p>
    </div>
  ));
}

const BOOK_TITLES = gql`
  query ExampleQuery {
    books {
      title
    }
  }
`;

export default BookList;

