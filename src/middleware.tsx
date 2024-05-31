import { auth } from "@/auth"

export default auth((req) => {
    const isAuthenticated = !!req.auth;
    const { nextUrl } = req;

    //if the user isnt authenticated, redirect them over to the signin page
    if (!isAuthenticated) {
        const url = req.nextUrl.clone()
        console.log(url.pathname)
        url.pathname = '/api/auth/signin'
        return Response.redirect(url);
    }
})

//dont apply this middleware to these paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }
