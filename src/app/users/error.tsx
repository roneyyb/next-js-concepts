
"use client"

// Error handling component are always client component so we need to use "use client" at the top
import "./_usefuls/userful.css"

const Error = ({ error }: { error: Error }) => {
    return (
        <div className=" h-dvh w-dvw">
            <div className="container"></div>
        </div>

    )
}

export default Error