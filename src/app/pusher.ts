import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

export const pusherServer = new PusherServer({
    appId: '',
    key: '',
    secret: '',
    cluster: 'eu',
    useTLS: true
});

export const pusherClient = new PusherClient('', {
    cluster: 'eu',
    authEndpoint: '/api.pusher-auth',
    authTransport: 'ajax',
    auth: {
        headers: {
            'Content-Type': 'application/json'
        }
    }
})