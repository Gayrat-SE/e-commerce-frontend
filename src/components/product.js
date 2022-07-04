import React from "react"

import { Card } from "react-bootstrap"


function Product({product}){
    return (
        <Card className="my-5 p-2 rounded w-50 ">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} /> 
            </a>
            <CARD.Body>
                <a href="{`/product/${product._id}`}">
                    <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
                </a>
                <Card.Text as="div" >
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="div" >
                    ${product.price}
                </Card.Text>
            </CARD.Body>
        </Card>
    )
}

export default Product; 