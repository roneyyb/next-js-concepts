"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


function AuthLayout({
    children,
    login,
    signup
}: {
    login: React.ReactNode,
    signup: React.ReactNode,
    children: React.ReactNode
}) {



    const userId = localStorage.getItem("auth_token")

    const [rerender, setRerender] = React.useState(false);
    const router = useRouter()
    React.useEffect(() => {
        // fetch("http://localhost:4000/", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         query: `
        //         query getAllQuotes {
        //             quotes {
        //                 name
        //                 by {
        //                     _id
        //                     firstName
        //                     lastName
        //                 }
        //             }
        //         }
        //         `
        //     })
        // }).then((res) => res.json()).then((data) => {
        //     console.log("Datq", data)
        // })
        // if (userId) {
        //     router.push("/graphql/home")
        // }
    }, []);



    return <div className=' flex flex-1 flex-col'>
        <div className=' flex  flex-row justify-between w-full  bg-lime-500 p-4 '>
            <div>
                <span onClick={() => { router.push("/graphql/quotes") }}>{"Header"}</span>
            </div>
            <div className=' gap-x-2 flex flex-row'>

                {!userId && <Link href={"/graphql/login-form"}>{"Login"}</Link>}
                <Link href={"/graphql/signup-form"}>{"Signup"}</Link>
                {userId && <Link href={"/graphql/create-quote"}>{"Create-Quote"}</Link>}
                {userId && <Link href={"/graphql/profile"}>{"Profile"}</Link>}
                {userId && <button onClick={() => {
                    localStorage.removeItem("auth_token");
                    setRerender(!rerender);
                    router.push("/graphql")
                }}>{"Logout"}</button>}
            </div>

        </div>
        {children}
        {login}
        {signup}
    </div>
}

export default AuthLayout