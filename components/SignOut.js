import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const router = useRouter();
  const [endSession] = useMutation(SIGNOUT_MUTATION, {
    // Refresh page with signed out state
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  function signOut() {
    endSession();
    router.push('/products');
  }
  return (
    <button type="button" onClick={signOut}>
      Sign Out
    </button>
  );
}
