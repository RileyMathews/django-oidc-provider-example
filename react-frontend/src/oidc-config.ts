import { UserManager, UserManagerSettings, WebStorageStateStore } from 'oidc-client-ts';

const settings: UserManagerSettings = {
  authority: 'http://localhost:8000/o/',
  client_id: 'XqHQJOMx4AI8jpjNY23iUcj2aJHh5HlYIa5kPKxn',
  redirect_uri: 'http://localhost:5173/callback',
  response_type: 'code',
  scope: 'openid', // Add the desired OIDC scopes
  post_logout_redirect_uri: 'http://localhost:5173',
  userStore: new WebStorageStateStore({ store: window.localStorage }), // Use local storage for storing user data
};

const userManager = new UserManager(settings);

export default userManager;
