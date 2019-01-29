const axios = require('axios');

const baseURL = 'https://fabman.io/api/v1/';

exports.handler = function(event, context, callback) {
  const instance = axios.create({
    baseURL,
    headers: {'Authorization': `Bearer ${process.env.FABMAN_TOKEN}`}
  });

  let p = instance.get('packages').then(r => r.data.map((p) => {
    return {
      id: p.id,
      name: p.name,
    }
  }));
  let t = instance.get('training-courses').then(r => r.data.map((t) => {
    return {
      id: t.id,
      title: t.title,
    }
  }));
  let r = instance.get('resources').then(r => r.data.map((r) => {
    return {
      id: r.id,
      name: r.name,
      type: r.type
    }
  }));
  let rt = instance.get('resource-types').then(r => r.data.map((r) => {
    return {
      id: r.id,
      name: r.name,
    }
  }));

  Promise.all([p, t, r, rt]).then(([packages, trainings, resources, types]) => {
    let data = { packages, trainings, resources, types };
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    });
  }).catch((e) => {
    console.log(e);
    callback(null, {
      statusCode: 500,
      body: 'ERROR'
    });
  });
};
