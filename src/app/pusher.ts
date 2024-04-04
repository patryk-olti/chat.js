import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
    appId: <string> process.env.PUSHER_APP_ID,
    key: <string> process.env.PUSHER_APP_KEY,
    secret: <string> process.env.PUSHER_APP_SECRET,
    cluster: 'eu',
    useTLS: true
});

export const pusherClient = new PusherClient(<string> process.env.PUSHER_APP_ID, {
    cluster: 'eu',
    authEndpoint: '/api.pusher-auth',
    authTransport: 'ajax',
    auth: {
        headers: {
            'Content-Type': 'application/json'
        }
    }
})