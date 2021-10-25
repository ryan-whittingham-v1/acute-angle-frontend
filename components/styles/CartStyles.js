import styled from 'styled-components';

const CartStyles = styled.div`
  .dimmer {
    position: fixed;
    backdrop-filter: blur(1px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
  }
  .window {
    background-color: #fefefe;
    border: 1px solid #888;
    font-size: 1.5em;
    color: palevioletred;
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    height: 75vh;
    z-index: 5;
  }
  header {
    display: flex;
    flex-direction: row;
    border-bottom: 5px solid var(--black);
    margin: 0px 10px;

    h2 {
      margin: 0px;
      padding: 0;
      font-size: calc(30px + 6 * ((100vw - 200px) / 600));
    }
  }
  .close {
    flex: 1;
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
  }
  .items {
    margin: 0px 20px;
    color: #303030;
  }
  footer {
    border-top: 5px solid var(--black);
    display: flex;
    justify-content: flex-end;
    margin: 0px 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default CartStyles;
