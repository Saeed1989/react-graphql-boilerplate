import { gql } from '@apollo/client';

export const BOOK_TITLES = gql`
  query BookQuery(
    $title: Boolean! = false
    $edition: Boolean! = false
    $publishDate: Boolean! = false
    $author: Boolean! = false
  ) {
    books {
      sku
      title @include(if: $title)
      edition @include(if: $edition)
      publishDate @include(if: $publishDate)
      author @include(if: $author)
    }
  }
`;

export const WRITER_NAMES = gql`
  query WriterQuery(
    $name: Boolean! = false
    $country: Boolean! = false
    $dateOfBirth: Boolean! = false
    $books: Boolean! = false
  ) {
    writers {
      sku
      name @include(if: $name)
      country @include(if: $country)
      dateOfBirth @include(if: $dateOfBirth)
      books @include(if: $books)
    }
  }
`;
