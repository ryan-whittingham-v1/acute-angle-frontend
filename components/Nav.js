import Link from 'next/link';

import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      {user && (
        <>
          <Link href="/account">Account</Link>

          <button type="button" onClick={openCart}>
            My Cart
          </button>
          {/* <CartCount
            count={user.cart.reduce(
              (tally, cartItem) =>
                tally + (cartItem.product ? cartItem.quantity : 0),
              0
            )}
          /> */}
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
