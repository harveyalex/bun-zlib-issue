import Pubnub from 'pubnub';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

function sendEvent() {
  dotenv.config();
  let publishKey = process.env.PUB_NUB_PUBLISH_KEY || '';
  let subscribeKey = process.env.PUB_NUB_SUBSCRIBE_KEY || '';

  let pubnubConfig: Pubnub.PubnubConfig = {
    publishKey: publishKey,
    subscribeKey: subscribeKey,
    uuid: uuid()
  };
  const pubnub = new Pubnub(pubnubConfig);

  pubnub.publish(
    {
      message: {
        sender: 'me',
        content: 'Hello from the other side'
      },
      channel: 'myChannel'
    },
    (status, response) => {
      if (status.error) {
        console.error(status);
      } else {
        console.log('message Published w/ timetoken', response.timetoken);
      }
    }
  );
}

sendEvent();
