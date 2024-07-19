type User = {
    email: string
    username: string
    id: number
    phone: string
    name: string
}

export default async function UserPage() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("users ", users)
    return <div className="flex">

        <h1>UsersPages</h1>
        <div className="grid grid-cols-2 gap-2 p-4">
            <h2>    {users.map((item: any) => item.name)}</h2>
        </div>
    </div>
}