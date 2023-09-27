import { useEffect, useRef } from 'react';
import userManager from '../oidc-config';
import { useNavigate } from '@tanstack/react-router';

const Callback = () => {
  const hasStartedCallbackRef = useRef(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Check if the login flow has already been initiated
    if (!hasStartedCallbackRef.current) {
      // Initiate the OIDC login flow
      userManager.signinCallback()
        .then(() => navigate({ to: "/private"}))

      // Set the flag to prevent multiple initiations
      hasStartedCallbackRef.current = true;
    }
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Callback;
