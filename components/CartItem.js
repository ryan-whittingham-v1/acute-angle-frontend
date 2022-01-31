import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart, { REMOVE_FROM_CART_MUTATION } from './RemoveFromCart';
import { CURRENT_USER_QUERY } from './User';

const CartItemStyles = styled.li`
  border-bottom: 2px solid var(--lightGrey);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-bottom: 10px;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: solid white 3px;
    border-radius: 4px;
    filter: drop-shadow(10px 10px 4px #404040);
  }
  .photoWrapper {
    flex: 1 20%;
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
  .details {
    flex: 1 60%;
    display: flex;
    flex-direction: column;

    h3 {
      margin: auto;
      font-size: calc(10px + 1vw);
    }
  }
  .remove {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 10px 5px 0px;
  }
  .quantity {
    display: flex;
    flex-direction: row;
    height: 30px;
    margin-top: 10px;
    justify-content: center;
    p {
      margin: 0;
      font-size: 1.75rem;
      margin: 0px 20px;
    }
  }
`;

const UPDATE_CART_ITEM_MUTATION = gql`
  mutation UPDATE_CART_ITEM_MUTATION($id: ID!, $data: CartItemUpdateInput!) {
    updateCartItem(id: $id, data: $data) {
      quantity
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function CartItem({ cartItem }) {
  const { product } = cartItem;
  const [updateItem, { loading }] = useMutation(UPDATE_CART_ITEM_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const [removeFromCart, { removeloading }] = useMutation(
    REMOVE_FROM_CART_MUTATION,
    {
      variables: { id: cartItem.id },
      update,
    }
  );

  function addOne() {
    console.log('add one');
    updateItem({
      variables: { id: cartItem.id, data: { quantity: cartItem.quantity + 1 } },
    });
  }

  function minusOne() {
    console.log('minus one');
    if (cartItem.quantity === 1) {
      removeFromCart();
      return;
    }
    updateItem({
      variables: { id: cartItem.id, data: { quantity: cartItem.quantity - 1 } },
    });
  }

  if (!product) return null;
  return (
    <CartItemStyles>
      <div className="photoWrapper">
        <div className="photo">
          <img
            src={product.photo.image.publicUrlTransformed}
            alt={product.name}
          />
        </div>
      </div>
      <div className="details">
        <h3>
          {product.name} - {formatMoney(product.price)}
        </h3>
        <div className="quantity">
          <button type="button" onClick={minusOne}>
            -
          </button>
          <p>
            <em>{cartItem.quantity}</em>
          </p>
          <button type="button" onClick={addOne}>
            +
          </button>
        </div>
        <div className="remove">
          <RemoveFromCart id={cartItem.id} />
        </div>
      </div>
    </CartItemStyles>
  );
}
