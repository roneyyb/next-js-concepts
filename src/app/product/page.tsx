// the data is being cached by nextjs on next requests

export const fetchCache = "default-cache"

export default async function ProductPage() {
    const response = await fetch("https://localhost:3002/products", {
        cache: "no-store"
    });

    const response1 = await fetch("https://localhost:3002/products/1", {

    });
    const users = await response.json();
    console.log("users ", users)
    return <h1>{"Product Page"}</h1>
}