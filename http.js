import https from 'https';
import http from 'http';

function main() {

  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    method: 'GET',
    path: '/posts/1',
  }

  let request = https.request(options);

  console.log('request', request);
  request.on('error', (e) => {
    console.error(e);
  }
  );
  request.on('response', (response) => {
    console.log('response', response);
    response.on('data', (data) => {
      console.log('data', data.toString());
    });
  }
  );
  request.end();
}

main();