import { Checkout } from '../components/Checkout';
import ShipAddress from '../components/ShipAddress';

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <ShipAddress />
      <Checkout />
    </div>
  );
}
