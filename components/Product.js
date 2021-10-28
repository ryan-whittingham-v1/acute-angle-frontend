import Link from 'next/link';
import styled from 'styled-components';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';
import { useUser } from './User';

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 25px;
  button {
    cursor: pointer;
  }
`;

export default function Product({ product }) {
  const user = useUser();

  return (
    <FlexWrapper>
      <Link href={`/product/${product.id}`}>
        <ItemStyles>
          <img
            src={product?.photo?.image?.publicUrlTransformed}
            alt={product.name}
          />
          <h3>{product.name}</h3>
        </ItemStyles>
      </Link>
      {user && <AddToCart id={product.id} />}
    </FlexWrapper>
  );
}
