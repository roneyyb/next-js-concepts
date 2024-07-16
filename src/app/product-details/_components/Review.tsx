export default async function Review() {
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log("reviewww")
    return <h1>{"Reviews"}</h1>
}