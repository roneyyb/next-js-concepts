export default async function Product() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return <h1>{"Product Details"}</h1>
}