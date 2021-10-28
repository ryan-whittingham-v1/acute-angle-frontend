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
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    height: 75vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  header {
    display: flex;
    flex-direction: row;
    margin: 0px 5px;
    color: var(--primaryColor);

    h2 {
      margin: 0px 10px;
      padding: 0;
      font-size: calc(30px + 6 * ((100vw - 200px) / 600));
    }
  }
  .body {
    overflow: auto;
    flex-grow: 1;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      display: flex;
      justify-content: flex-end;
      margin: 0px 20px;
    }
    button {
      flex: 1 100%;
      background: var(--primaryColor);
      border: 0;
      font-size: 2rem;
      color: white;
      padding: 5px;
      &:hover {
        color: black;
        background: var(--secondaryColor);
        cursor: pointer;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default CartStyles;
