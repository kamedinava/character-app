import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
        gender
        origin{
            name
            id        
        }
        location {
            name
            id
        }
        episode {
        id
        name
        episode
      }
      }
    }
  }
`;
