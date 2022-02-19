const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    sku: String
    title: String
    edition: String
    publishDate: String
    author: String
  }

  type Writer {
    sku: String
    name: String
    country: String
    dateOfBirth: String
    books: [String]
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book],
    writers: [Writer],
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    writers: () => writers,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const books = [
  {
    sku: "sampleSKU001",
    title: "The Book AAA",
    edition: "First",
    publishDate: "1944-01-01T00:00:00.000Z",
    author: "The Author AAA",
  },
  {
    sku: "sampleSKU002",
    title: "The Book BBB",
    edition: "Second",
    publishDate: "1965-01-01T00:00:00.000Z",
    author: "The Author BBB",
  },
];

 const writers = [
  {
    sku: "sampleSKU001",
    name: "The Author AAA",
    country: "Country AAA",
    dateOfBirth: "1921-01-01T00:00:00.000Z",
    books: ["The Book AAA"],
  },
  {
    sku: "sampleSKU002",
    name: "The Author BBB",
    country: "Country BBB",
    dateOfBirth: "1956-01-01T00:00:00.000Z",
    books: ["The Book BBB1", "The Book BBB2", "The Book BBB3"],
  },
];
