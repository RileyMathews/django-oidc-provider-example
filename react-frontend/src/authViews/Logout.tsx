import { useEffect, useRef } from 'react';
import userManager from '../oidc-config';

const Logout = () => {
  const hasStartedLogout = useRef(false);

  useEffect(() => {
    // Check if the login flow has already been initiated
    if (!hasStartedLogout.current) {
      // Initiate the OIDC login flow
      userManager.signoutRedirect()

      // Set the flag to prevent multiple initiations
      hasStartedLogout.current = true;
    }
  }, []);

  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  );
};

export default Logout;
