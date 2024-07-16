import { cookies } from "next/headers";
import React from 'react'

export default function ABouttt() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);

    // throw new Error("Error in about")

    return (

        <div>ABouttt</div>
    )
}
