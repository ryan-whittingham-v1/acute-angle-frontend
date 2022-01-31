import { useRouter } from 'next/dist/client/router';

import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import { useUser } from './User';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import { Checkout } from './Checkout';

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  const router = useRouter();

  function handleClick() {
    router.push({
      pathname: `/checkout`,
    });
    closeCart();
  }

  if (!me) return null;
  return (
    <>
      {cartOpen && (
        <CartStyles>
          <div className="dimmer" onClick={closeCart} />
          <div className="window">
            <header>
              <h2>Cart</h2>
              <div className="close">
                <CloseButton type="button" onClick={closeCart}>
                  &times;
                </CloseButton>
              </div>
            </header>
            <div className="body">
              <div className="items">
                {me.cart.length === 0 && <p>Cart is empty.</p>}
                <ul>
                  {me.cart.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))}
                </ul>
              </div>
            </div>
            <footer>
              <p> Total: {formatMoney(calcTotalPrice(me.cart))}</p>
              {/* <Checkout /> */}
              <button type="button" onClick={handleClick}>
                Check Out
              </button>
            </footer>
          </div>
        </CartStyles>
      )}
    </>
  );
}
