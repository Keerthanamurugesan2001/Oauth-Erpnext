# Authentication

## Token based authentication:

REF Link:

https://discuss.frappe.io/t/how-do-i-generate-tokens-via-login-api-like-jwt-in-frappe-rest-api/109757/5


## oauth2.0

OAuth2.0 is an open standard authorization framework for token-based authorization on the internet. It enables an end user's account information to be used by third-party services, such as Facebook and Google, without exposing the user's account credentials to the third party. OAuth2.0 is primarily designed for authorization, not authentication, but it can be used to authenticate in some circumstances.

In the context of ERPNext, OAuth2.0 can be implemented to allow an ecommerce backend to authenticate on the ERP and read/write documents
1. This can be done by setting up ERPNext as an OAuth2 provider and configuring the ecommerce backend as an OAuth2 client

**steps**:
Setup > Integrations > OAuth Provider Settings

System Managers can setup behavior of confirmation message as Force or Auto in OAuth Provider Settings. If Force is selected the system will always ask for user's confirmation. If Auto is selected system asks for the confirmation only if there are no active tokens for the user.

![How to update the oauth client](image.png)

[Rest Api Authentication](https://frappeframework.com/docs/user/en/api/rest)

REF Link:
[simple-oauth](https://www.npmjs.com/package/simple-oauth2)
[Oauth2-erp doc](https://frappeframework.com/docs/user/en/guides/integration/rest_api/oauth-2)
[how to setup oauth](https://frappeframework.com/docs/user/en/guides/integration/how_to_set_up_oauth)