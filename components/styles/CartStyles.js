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
    text-align: center;
    color: palevioletred;
    border-radius: 10px;
    position: fixed;
    top: 60px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  header {
    border-bottom: 5px solid var(--black);
  }
  footer {
    border-top: 10px double var(--black);

    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default CartStyles;
