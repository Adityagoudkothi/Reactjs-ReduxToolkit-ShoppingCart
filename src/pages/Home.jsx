import React from "react";
import { products } from "../data";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="px-3 mt-5">
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col md={3} lg={3} sm={12} xs={12} className="mb-4">
                <Product key={product.id} product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
