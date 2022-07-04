import React  from "react"
import  products  from "../products";
import { Col, Row } from "react-bootstrap";
import Product from  "../components/product";

function HomeScreen() {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
            <Col key={product._id} md={4} sm={12} lg={4} xl={3}>
                <h3>
                    <Product product={product} />
                </h3>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen;