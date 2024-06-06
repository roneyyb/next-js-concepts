"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import "./styles.css"

const navLinks = [
    {
        name: "Register", href: "/register",

    },
    {
        name: "Login", href: "/login",

    },
    {
        name: "Forgot Password", href: "/forgot-password",

    },

]

function AuthLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();
    const [input, setInput] = React.useState("")


    return (
        <div>
            <div>
                <input value={input} onChange={e => {
                    setInput(e.target.value)
                }} />
            </div>
            {navLinks.map((item, index) => {
                const isActive = pathname.startsWith(item.href);

                return <Link className={isActive ? " font-bold mr-4" : " text-blue-500 mr-4"} key={index} href={item.href}>{item.name}</Link>

            })}
            {children}
        </div>
    )
}

export default AuthLayout