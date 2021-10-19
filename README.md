# eole:accounts-keycloak

A login service for Keycloak.

Forked from hotello:acccounts-keycloak :
https://github.com/hotello/meteor-accounts-keycloak.git

## Configuration

As any official Meteor account package, upsert a configuration object:

```js
ServiceConfiguration.configurations.upsert(
  { service: 'keycloak' },
  {
    $set: {
      serverUrl: '<KEYCLOAK_SERVER_URL>',
      realm: '<REALM_NAME>',
      clientId: '<CLIENT_ID>',
      realmPublicKey: '<PUBLIC_KEY>',
      bearerOnly: true,
    },
  },
);
```
