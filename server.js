const https = require('https');
const express = require('express');
const app = express();
const env = require('dotenv').config();
const PORT = process.env.PORT || 9000;

const { USER_ID, ACCESS_TOKEN } = process.env;

let target_url = `https://api.instagram.com/v1/users/${USER_ID}/media/recent/?count=99&&access_token=${ACCESS_TOKEN}`;

app.get('/api/instafeed', (req, res) => {
  getPhotos(target_url)
    .then((images) => {
      res.json(JSON.parse(images));
    })
    .catch(err => {
      res.send(err);
    });
});

function getPhotos(finalDestination) {
  return new Promise((resolve, reject) => {
    https.get(finalDestination, res => {
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        resolve(rawData);
      });
    })
    .on('error', err => reject(err));
  });
}

app.listen(PORT, (req, res) => {
  console.log('server started on port: ', PORT);
});