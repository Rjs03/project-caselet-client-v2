export const adalConfig = {
  // adal configuration
  tenantId: '85c997b9-f494-46b3-a11d-772983cf6f11',
  // our client id
  // clientId: 'd5324e3c-3c47-4053-b30c-08d5ca192eb9',
  // yorbit client id
  clientId: 'd5324e3c-3c47-4053-b30c-08d5ca192eb9',
  redirectUri: 'http://localhost:4200',
  // redirectUri: 'https://yorbitst.azurewebsites.net/projectcaselets/',
  // redirectUri: 'https://yorbit.mindtree.com/projectcaselets/',
  postLogoutRedirectUri: window.location.origin,
  navigateToLoginResquestUrl: true,
  // endpoints: [
  //   'https://graph.microsoft.com'
  // ]
  endpoints: ['https://graph.windows.net']
};
