import { useEffect, useRef } from 'react';
import userManager from '../oidc-config';

const Login = () => {
  const hasStartedLoginRef = useRef(false);

  useEffect(() => {
    // Check if the login flow has already been initiated
    if (!hasStartedLoginRef.current) {
      // Initiate the OIDC login flow
      userManager.signinRedirect()

      // Set the flag to prevent multiple initiations
      hasStartedLoginRef.current = true;
    }
  }, []);

  return (
    <div>
      <h1>Logging in please standby...</h1>
    </div>
  );
};

export default Login;
