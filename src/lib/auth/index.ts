'use server'

import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.SECRET_KEY
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any){
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function loginFunc(login: string){
    // veryfi credentials and get the user
    // here should be checking credential from db
    const user = { 
        login
    };

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    cookies().set('session', session, { expires, httpOnly: true })
}