"use client"

import SimpleSlider from "@/components/carousel"
import { clientSideFunction } from "@/utils/client-utils";

// import { serverSideFunction } from "@/utils/server-utils";

export default function Page() {
    const result = clientSideFunction();
    return <div>ClientRoutePage
        <SimpleSlider />
    </div>
}