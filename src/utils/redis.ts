import { createClient } from 'redis';

const client = createClient({
    password: 'Bsmx2PayU9WhYdQylBTqrK8dT8vyR5WW',
    socket: {
        host: 'redis-19741.c281.us-east-1-2.ec2.cloud.redislabs.com',
        port: 19741
    }
});