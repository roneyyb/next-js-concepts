import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const requestHeader = new Headers(request.headers);

    const headerList = headers();

    const theme = request.cookies.get("theme");
    console.log(headerList.get("Authorization"))
    console.log(theme)

    // setting and getting cookie using cookies function
    cookies().set("requestPerPage", "20")
    // There are other function as well available with cookies refer documentation
    console.log(cookies().get("requestPerPage"))

    console.log(requestHeader.get("Authorization"))
    return new Response("<h1>Profile Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}
