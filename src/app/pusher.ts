import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
    /*appId: <string> process.env.PUSHER_APP_ID,
    key: <string> process.env.PUSHER_APP_KEY,
    secret: <string> process.env.PUSHER_APP_SECRET,
    cluster: 'eu',
    useTLS: true*/
    appId: '1734012',
    key: '431aabcfc43b71af6830',
    secret: '964fe53ed06aa69e50c3',
    cluster: 'eu',
    useTLS: true
});

export const pusherClient = new PusherClient('431aabcfc43b71af6830', {
    cluster: 'eu',
    authEndpoint: '/api.pusher-auth',
    authTransport: 'ajax',
    auth: {
        headers: {
            'Content-Type': 'application/json'
        }
    }
})