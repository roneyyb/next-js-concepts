export default async function ProductLayout({ children }: { children: React.ReactNode }) {
    const response = await fetch("https://localhost:3002/products", {

    });

    const products = await response.json();
    console.log({ products })
    return <>{children}</>

}