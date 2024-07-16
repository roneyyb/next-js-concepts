import { Suspense } from "react";
import Product from "./_components/Product";
import Review from "./_components/Review";

export default function ProductDetailsPage() {
    return <div>
        <h1>{"Check Product"}</h1>
        <Suspense fallback={<h1>"Loading Reviews"</h1>}>
            <Review />
        </Suspense>
        <Suspense fallback={"Loading Product Details"}>
            <Product />
        </Suspense>
    </div>
}