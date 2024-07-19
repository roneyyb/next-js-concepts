// the data is being cached by nextjs on next requests

export default async function ProductPage() {
    const response = await fetch("https://localhost:3002/products");
    const users = await response.json();
    console.log("users ", users)
    return <h1>{"Product Page"}</h1>
}