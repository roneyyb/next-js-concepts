import Link from 'next/link'
import React from 'react'

function AuthPage() {
    return (
        <div>

            <h1>Login Form</h1>
            <div />
            <Link href={"/graphql/login-form"} >{"Login"}</Link>
            <div />
            <Link href={"/graphql/signup-form"} >{"Signup"}</Link>
        </div>
    )
}

export default AuthPage