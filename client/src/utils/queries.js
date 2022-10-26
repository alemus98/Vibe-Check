import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
  me {
    username
    moods {
      moodType
      moodText
      createdAt
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