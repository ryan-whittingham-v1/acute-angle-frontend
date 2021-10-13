import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function ProductsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <FlexWrapper>
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </FlexWrapper>
  );
}
