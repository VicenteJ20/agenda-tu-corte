import { auth } from '@/auth'

export default auth((req) => {
  const excludedPathsRegex = /^\/(auth\/login|auth\/signup|_next\/static|static|public\/images|public|api)(\/|$)/;
  const isExcluded = excludedPathsRegex.test(req.nextUrl.pathname);

  if (!req.auth && !isExcluded) {
    const redirectURl = new URL('/auth/login', req.nextUrl.origin);
    return Response.redirect(redirectURl);
  }
});