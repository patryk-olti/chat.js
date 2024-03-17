'use server'

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.SECRET_KEY
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any){
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function decrypt(input: string):Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256']
    });
    return payload;
}

export async function loginFunc(login: string, password: string){
    // veryfi credentials and get the user
    const response = await fetch(`${process.env.DOMAIN_URL}/api/users/auth?login=${login}&password=${password}`);

    // everything is ok on the server side
    if(response.ok){
        const json = await response.json();
        const success = await json.success;
        const data = await json.data;

        if(success){
            // User found
            const user = { 
                login: data.login,
                password: data.password
            };

            // Create the session
            const expires = new Date(Date.now() + 30 * 1000);
            const session = await encrypt({ user, expires });

            // Save the session in a cookie
            cookies().set('session', session, { expires, httpOnly: true })
            redirect('/chat');
            return true;
        }else{
            // User not found
            return false;
        }
    }
}

export async function getSession(){
    const session = cookies().get('session')?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession( request: NextRequest ){
    const session = request.cookies.get('session')?.value;
    if (!session) return;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 30 * 1000);
    const res = NextResponse.next();

    res.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires
    });

    return res;
}