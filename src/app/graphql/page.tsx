import Link from 'next/link'
import React from 'react'

function AuthPage() {
    return (
        <div>
            AuthPage
            <h1>Login Form</h1>
            <Link href={"/graphql/login-form"} >{"Login"}</Link>
            <Link href={"/graphql/login"} >{"Signup"}</Link>
        </div>
    )
}

export default AuthPage