import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me ($id: ID!) {
  me(_id: $id) {
    moodType
    moodText
    createdAt
    user {
      username
    }
  }
}
`;

export const QUERY_MOODS = gql`
query moods ($username: String) {
  moods(username: $username) {
    moodType
    moodText
    createdAt
  }
}
`