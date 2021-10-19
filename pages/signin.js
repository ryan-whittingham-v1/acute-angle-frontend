import { useState } from 'react';
import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    margin: auto;
  }

  .signIn {
    display: flex;
    flex-direction: column;
  }
  .passHelp {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }
`;

export default function SignInPage() {
  const [showPassReset, setPassReset] = useState(false);

  function passwordHelp() {
    setPassReset(!showPassReset);
  }

  return (
    <GridStyles>
      <div className="signIn">
        {showPassReset ? (
          <RequestReset />
        ) : (
          <>
            <SignIn />{' '}
            <button type="button" onClick={passwordHelp} className="passHelp">
              Forgot Password
            </button>{' '}
          </>
        )}
      </div>
      <SignUp />
    </GridStyles>
  );
}
