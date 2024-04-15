const express = require('express');
const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

const app = express();
const port = 3000;
const config = {
  client: {
    id: '2ca12989bd',
    secret: 'dfad7b618d',
  },
  auth: {
    tokenHost: 'https://48d1-14-98-32-198.ngrok-free.app',
    authorizePath: '/api/method/frappe.integrations.oauth2.authorize'
  },
};


app.get('/', (req, res) => {

  async function run() {
    const client = new AuthorizationCode(config);

    const authorizationUri = client.authorizeURL({
      redirect_uri: 'http://localhost:3000/callback',
      scope: 'all openid',
      state: '444',
      response_type: 'code',
      client_id: '2ca12989bd',
      cmd: 'frappe.integrations.oauth2.authorize'
    });   
    res.redirect(authorizationUri);
  }

  run();
});
const lconfig = {
  client: {
    id: '2ca12989bd',
    secret: 'dfad7b618d',
  },
  auth: {
    tokenHost: 'https://48d1-14-98-32-198.ngrok-free.app',
    tokenPath: '/api/method/frappe.integrations.oauth2.get_token',
  },
};
app.get('/callback', (req, res) => {
  async function run() {
    try {
      console.log("calling callback")
      console.log("code", req.query.code)
    let tokenParams = {
      code: req.query.code,
      redirect_uri: 'http://localhost:3000/callback',
      grant_type:'authorization_code',
      client_id: config.client.id,
      client_secret: config.client_secret,
      cmd: "frappe.integrations.oauth2.get_token"
    };
    const formData = new URLSearchParams(tokenParams);
      fetch("https://48d1-14-98-32-198.ngrok-free.app/api/method/frappe.integrations.oauth2.get_token", {
        method: 'POST',
        body: formData,
      })
      .then(response => {
          return response.json();
        })
        .then(data => {
          res.json(data);

        })
    } catch (error) {
      res.status(404).send('<h1>Not Found</h1>');
      console.log('Access Token Error', error.message);
    }
  }
  run()
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
