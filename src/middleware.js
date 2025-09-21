import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const currentCookie = request.cookies.get('nextjs-token');
    console.log("Current cookie:", currentCookie?.name, currentCookie?.value);

    const dummyUserData = {
        role: "user",
        email: "test@admin.com"
    }

    let isServices = request.nextUrl.pathname.startsWith('/services');
    let isAdmin = dummyUserData?.role == 'admin';
    if(isServices && !isAdmin){
        return NextResponse.rewrite(new URL('/signin', request.url))
    }
    
    return NextResponse.next();
}
