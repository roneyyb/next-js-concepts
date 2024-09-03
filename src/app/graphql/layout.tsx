import Link from 'next/link'
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

    return <div className=' flex'>
        {children}
        {login}
        {signup}
    </div>
}

export default AuthLayout