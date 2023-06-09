import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoding(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading Products ..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}