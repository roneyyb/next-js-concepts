"use client"
import React from 'react'

import LoginForm from "../_components/form/Form"


export default function Page() {


    return (
        <LoginForm onPressSubmit={(data) => { console.log("DAta", data) }} />
    )
}
