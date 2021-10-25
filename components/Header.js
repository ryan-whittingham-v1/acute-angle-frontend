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

  .logo {
    width: 275px;
    display: flex;
  }

  .nav {
    display: flex;
    flex-direction: column;
    flex: 1 75%;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: calc(20px + 15 * ((100vw - 200px) / 300));
      cursor: pointer;
      color: var(--primaryColor);
      font-family: 'Allura', cursive;
    }
  }

  img {
    height: 150px;
    cursor: pointer;
    margin: auto;
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
          <div className="links">
            <Nav />
            <Cart />
          </div>
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
    </HeaderStyles>
  );
}
