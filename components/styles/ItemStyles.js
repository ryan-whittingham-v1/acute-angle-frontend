import styled from 'styled-components';

const ItemStyles = styled.div`
  width: 300px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 10px;
  filter: drop-shadow(3px 3px 3px grey);
  border: 4px solid white;

  h3 {
    background: var(--secondaryColor);
    margin: 0px;
    color: white;
    border-top: 3px solid gold;
  }
`;

export default ItemStyles;
