# nextbase

This is a base Next14 repo with next-auth, nextui, and next-themes (installed via `npm i next-auth @nextui-org/react framer-motion next-themes`).

It also contains the basis for AzureAD authentication, you'll need to create a `.env.local` file at the root of the repo with the following details:
```
AZURE_AD_CLIENT_ID=<copy Application (client) ID here>
AZURE_AD_CLIENT_SECRET=<copy generated client secret value here>
AZURE_AD_TENANT_ID=<copy the tenant id here>
```
