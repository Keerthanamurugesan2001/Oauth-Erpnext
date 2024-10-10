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

Go to Oauth client List


![How to update the oauth client](image.png)


### How to use oauth api collection

Postman:

[Oauth Api Postman collection](https://www.postman.com/speeding-crescent-990158/workspace/keerthana-public/collection/24147731-1c80b1ef-3679-4114-9f31-86827700c1ea?action=share&creator=24147731)

[Rest Api Authentication](https://frappeframework.com/docs/user/en/api/rest)

#### Oauth Direct URL


https://{Your host name}/api/method/frappe.integrations.oauth2.authorize?client_id={client id}&state=444&response_type=code&scope=openid all&redirect_uri={same callback url given in image}


**response** will be:

https://<your host name>/callback?code=la1MmNBuOB4oLKM2vwGnTaIs9P5SDh

Get the code, get below api,

https://<Your host name>/api/method/frappe.integrations.oauth2.get_token?grant_type=authorization_code&code=B7ER2blbRJ1hI6TOWeQT8tGO2etqD5&redirect_uri=<same callback url given in image>&client_id=<client id>

**Response**

```
 {
 "access\_token": "pNO2DpTMHTcFHYUXwzs74k6idQBmnI",
 "token\_type": "Bearer",
 "expires\_in": 3600,
 "refresh\_token": "cp74cxbbDgaxFuUZ8Usc7egYlhKbH1",
 "scope": "openid all",
 "id\_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o"
 }
```


REF Link:
[simple-oauth](https://www.npmjs.com/package/simple-oauth2),
[Oauth2-erp doc](https://frappeframework.com/docs/user/en/guides/integration/rest_api/oauth-2),
[how to setup oauth](https://frappeframework.com/docs/user/en/guides/integration/how_to_set_up_oauth)


**Third**

OAuth Bearer Token

Where all the barer token will be displayed.
