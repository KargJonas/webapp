const axios = require('axios');
const cookieparser = require('cookieparser');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const baseURL = 'https://fabman.io/api/v1/';

exports.handler = function(event, context, callback) {

  let auth = null;
  if (event.headers.cookie) {
    const parsed = cookieparser.parse(event.headers.cookie)
    try {
      auth = JSON.parse(parsed.auth)
    } catch (err) {
      // No valid cookie found
    }
  }

  if (!auth) {
    return callback(null, {
      statusCode: 401,
      body: 'Unauthorized'
    });
  }

  /*
  console.log(auth.accessToken);

  let decoded = jwt.verify(auth.accessToken, process.env.AUTH0_CLIENT_SECRET);
  console.log(decoded);
  */

  var client = jwksClient({
    jwksUri: 'https://grandgarage.eu.auth0.com/.well-known/jwks.json'
  });
  function getKey(header, callback) {
    client.getSigningKey(header.kid, function(err, key) {
      var signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  jwt.verify(auth.accessToken, getKey, function(err, decoded) {
    if (!err) {
      let fabmanId = decoded['https://grandgarage.eu/fabmanId'];

      const instance = axios.create({
        baseURL,
        headers: {'Authorization': `Bearer ${process.env.FABMAN_TOKEN}`}
      });

      instance.get(`members/${fabmanId}`).then((r) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(r.data)
        });
      }).catch((e) => {
        console.log('ERROR', e);
      });
    }
  });
};
