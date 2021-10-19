import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const HeaderStyles = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  > * {
    flex: 1 100%;
  }

  .banner {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-bottom: solid var(--lightGrey) 2px;
  }

  .nav {
    display: flex;
    flex-flow: row wrap;
    flex: 1 75%;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: calc(15px + 6 * ((100vw - 320px) / 300));
      cursor: pointer;
      color: var(--primaryColor);
    }
  }

  img {
    height: 150px;
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="banner">
        <div className="logo">
          <Link href="/">
            <img
              src="../static/AcuteAngleLogo.png"
              alt="Acute Angle Accessories"
            />
          </Link>
        </div>
        <div className="nav">
          <Link href="/">
            <h1>Lightweight Aluminum Earrings</h1>
          </Link>
          <Nav />
          <Cart />
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
    </HeaderStyles>
  );
}
