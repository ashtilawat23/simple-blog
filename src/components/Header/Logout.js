import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <Button
      fontFamily={'Space Mono'}
      onClick={() =>
        logout({
          returnTo: window.location.origin
        })
      }
    >
      Log Out
    </Button>
  );
};

export default Logout;