import React, {useState, useEffect}  from "react"
import { Col, Row } from "react-bootstrap";
import Product from  "../components/product";
import axios from "axios"

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchProducts(){
      const {data} = await axios.get('/api/products/');
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <div className="Home-screen">
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