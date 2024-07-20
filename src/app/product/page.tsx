// the data is being cached by nextjs on next requests
// import { cookies } from "next/headers";

//Refer documentation for more details using fetchCache variable
export default async function ProductPage() {


    // This request will be cached
    const response = await fetch("http://localhost:3002/products", {
        next: {
            revalidate: 10
        }
    });

    const users = await response.json();

    // const cookiesStore = cookies();
    // cookiesStore.get("theme")

    // // Cookies are used so data wont be cached after using cookie function
    // const response1 = await fetch("https://localhost:3002/products/1", {

    // });
    // const product = await response1.json()

    //  console.log("users ", users)
    return <h1>{"Product Page"}</h1>
}