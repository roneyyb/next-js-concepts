"use client"
import React from 'react'

function BlogFirst() {

    const [rerender, setRender] = React.useState(0);
    const changes = Math.round(Math.random());
    console.log("changesss", rerender, changes)
    if (changes) {

        throw new Error(`Blog first ${changes}`);
        return;
    } else
        return (
            <div>BlogFirst

                <div onClick={() => { setRender(render => ++render) }}>Create Error</div>
            </div>
        )
}

export default BlogFirst