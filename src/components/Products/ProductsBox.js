import React from "react";
import styled from "styled-components";

const CardProduct = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`
const ProductCardButton = styled.button`
    align-self: center;
`

export class ProductBox extends React.Component{
    render() {
        const product = this.props.product
        return <CardProduct>
            <img src={product.photo} alt=""/>
            <CardInfo>
                <p>{product.name}</p>
                <p>R$ {product.price},00</p>
                <ProductCardButton
                onClick={() => this.props.onAddProductToCart(product.id)}>
                    Adicionar ao carrinho
                </ProductCardButton>
            </CardInfo>

        </CardProduct>
    }
}