import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ProductList products={products}/>
            <Button variant="contained" onClick={addProduct}>Add a product</Button>
        </>
    )
}

interface Props {
    products: Product[];
    addProduct: () => void;
}