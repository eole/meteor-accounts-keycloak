Package.describe({
  name: 'eole:accounts-keycloak',
  summary: 'Login service for Keycloak accounts',
  version: '2.1.0',
  git: 'https://github.com/eole/meteor-accounts-keycloak.git',
});

Package.onUse(function (api) {
  api.versionsFrom(['1.5', '2.3']);

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('eole:keycloak-oauth@2.0.0');
  api.imply('eole:keycloak-oauth');

  api.addFiles('keycloak.js');
});
