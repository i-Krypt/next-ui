import { Grid, Container, Pagination } from "@nextui-org/react";
import { products } from "./data";
import ProductList from "./productlist"

export default function Product() {
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </Grid.Container>
      <Pagination total={20} initialPage={1} />
    </Container>
  );
}