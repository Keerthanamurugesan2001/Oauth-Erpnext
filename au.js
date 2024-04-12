const express = require('express');
const simpleOauth2 = require('simple-oauth2');
const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

const app = express();
const port = 3000;
const config = {
  client: {
    id: 'e94612890d',
    secret: 'e988dacd72',
  },
  auth: {
    tokenHost: 'https://48d1-14-98-32-198.ngrok-free.app',
    authorizePath: '/api/method/frappe.integrations.oauth2.authorize',
    tokenPath: '/api/method/frappe.integrations.oauth2.get_token',
  },
};


app.get('/', (req, res) => {

  async function run() {
    const client = new AuthorizationCode(config);

    const authorizationUri = client.authorizeURL({
      redirect_uri: 'http://localhost:3000/callback',
      scope: 'all openid',
      state: '444',
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
  console.log(req)
  async function run() {
    try {
      const client = new AuthorizationCode(config);

    let tokenParams = {
      code: req.query.code,
      redirect_uri: 'http://localhost:3000/callback',
      grant_type:"authorization_code"
    };
    
      const accessToken = await client.getToken(tokenParams);
      console.log('The resulting token: ', accessToken.token)
      res(accessToken)
    } catch (error) {
      console.log('Access Token Error', error.message);
    }
  }
  run()
})

app.get('/userpass', (req,res)=>{
  async function run() {
    const client = new ResourceOwnerPassword(lconfig);
  
    const tokenParams = {
      username: 'Administrator',
      password: 'erp-softsuave@dmin',
      scope: 'all openid',
    };
  
    try {
      const accessToken = await client.getToken(tokenParams);
      console.log(accessToken)
    } catch (error) {
      console.log('Access Token Error', error.message);
    }
  }
  
  run();
})


// OAuth2 configuration


// const oauth2 = simpleOauth2.create(oauth2Config);

// // Authorization URI
// const authorizationUri = oauth2.authorizationCode.authorizeURL({
//   redirect_uri: 'http://localhost:3000', // Update the redirect URI to your Express server route
//   scope: 'all openid',
//   state: '444',
// });

// app.get('/', (req, res) => {
//   res.redirect(authorizationUri);
// });

// app.get('/callback', async (req, res) => {
//   const tokenConfig = {
//     code: req.query.code,
//     redirect_uri: 'http://localhost:3000',
//   };

//   try {
//     const result = await oauth2.authorizationCode.getToken(tokenConfig);
//     const accessToken = oauth2.accessToken.create(result);
//     console.log('Access token:', accessToken.token.access_token);
//     res.send('Access token received. Check the console.');
//   } catch (error) {
//     console.error('Access Token Error:', error.message);
//     res.status(500).send('Error getting access token');
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
