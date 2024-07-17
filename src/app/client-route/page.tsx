"use client"
import { serverSideFunction } from "@/utils/server-utils";

export default function Page() {
    const result = serverSideFunction();
    return <div>ClientRoutePage
        <h1>{result}</h1>
    </div>
}