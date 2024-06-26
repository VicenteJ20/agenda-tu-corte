import { auth } from '@/auth'
import { NextResponse } from 'next/server';

export default auth((req) => {

   const url = new URL(req.url);
   const origin = url.origin;
 
   if (!req.auth) {
     return NextResponse.redirect(`${origin}/auth/login`)
   }

   return NextResponse.redirect(`${origin}/`)
 });
 
 export const config = {
   matcher: ['/dashboard']
 }