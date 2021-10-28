import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  font-size: calc(10px + 6 * ((100vw - 200px) / 600));
  flex-direction: row-reverse;
  justify-content: space-between;

  a,
  button {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border: 0;
    padding: 0;
    color: black;
    display: flex;

    background: none;
    cursor: pointer;

    &:hover {
      color: var(--secondaryColor);
      text-decoration: none;
    }
  }
`;

export default NavStyles;
