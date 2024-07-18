import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterLeavingPage() {
    return <div>
        <h1>Interleaving Page</h1>
        <ClientComponentOne >
            <ServerComponentOne />
        </ClientComponentOne>
    </div>
}