import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {products.map((p) => (
                <Grid key={p.id} item xs={3}>
                    <ProductCard key={p.id} product={p} />
                </Grid>
            ))}
        </Grid>
    )
}

interface Props {
    products: Product[]
}