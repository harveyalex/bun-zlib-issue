import https from 'https';

function main() {

  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    method: 'GET',
    path: '/posts/1',
    agent: false,
  }

  let request = https.request(options);

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