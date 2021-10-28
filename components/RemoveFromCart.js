import styled from 'styled-components';
import gql from 'graphql-tag';

import { useMutation } from '@apollo/client';

const BigButton = styled.button`
  background: var(--secondaryColor);
  border: 0;
  color: white;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    color: black;
    background: var(--primaryColor);
    cursor: pointer;
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <BigButton
      type="button"
      onClick={removeFromCart}
      disabled={loading}
      title="Remove from cart"
    >
      Delete
    </BigButton>
  );
}
