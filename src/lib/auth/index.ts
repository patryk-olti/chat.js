import { SignJWT } from 'jose';

export async function encrypt(payload: any){
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    //.sign(key);
}

export async function login(formData: FormData){
    // veryfi credentials and get the user
    // here should be checking credential from db
    const user = { 
        login: formData.get('login') 
    };

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    //const session = await encrypt({ user, expires });

}