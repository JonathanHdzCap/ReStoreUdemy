import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  function addProduct(): void {
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
    }]);
  }

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </div>
  );
}

export default App;