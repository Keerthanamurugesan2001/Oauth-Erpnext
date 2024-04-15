# Authentication

## Token based authentication:

Postman:

curl --location --request POST 'http://s4.localhost:8000/api/method/frappe.auth.get_logged_user' \
--header 'Authorization: token 88439d22c623955:917db833d7b553e' \
--header 'Cookie: full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image='

REF Link:

[Forum token based authentication](https://discuss.frappe.io/t/how-do-i-generate-tokens-via-login-api-like-jwt-in-frappe-rest-api/109757/5)


## oauth2.0

OAuth2.0 is an open standard authorization framework for token-based authorization on the internet. It enables an end user's account information to be used by third-party services, such as Facebook and Google, without exposing the user's account credentials to the third party. OAuth2.0 is primarily designed for authorization, not authentication, but it can be used to authenticate in some circumstances.

In the context of ERPNext, OAuth2.0 can be implemented to allow an ecommerce backend to authenticate on the ERP and read/write documents
1. This can be done by setting up ERPNext as an OAuth2 provider and configuring the ecommerce backend as an OAuth2 client

**steps**:

**First**:

Setup > Integrations > OAuth Provider Settings

System Managers can setup behavior of confirmation message as Force or Auto in OAuth Provider Settings. If Force is selected the system will always ask for user's confirmation. If Auto is selected system asks for the confirmation only if there are no active tokens for the user.

**Second**: 

![How to update the oauth client](image.png)

Postman:

https://speeding-crescent-990158.postman.co/workspace/Oauth~e6a1ea0b-f048-49ba-b989-fa2dc9f1d8f7/collection/24147731-f2f5335f-478f-43b6-81ad-33e0c4125f9d?action=share&creator=24147731

[Rest Api Authentication](https://frappeframework.com/docs/user/en/api/rest)

Postman:

REF Link:
[simple-oauth](https://www.npmjs.com/package/simple-oauth2),
[Oauth2-erp doc](https://frappeframework.com/docs/user/en/guides/integration/rest_api/oauth-2),
[how to setup oauth](https://frappeframework.com/docs/user/en/guides/integration/how_to_set_up_oauth)