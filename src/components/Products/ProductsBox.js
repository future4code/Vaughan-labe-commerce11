import React from "react";
import styled from "styled-components";

const CardProduct = styled.div`
    box-shadow: 2px 2px 6px #ced7e0;
    border-radius: 25px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    max-height: 400px;
    
    >img{        
        padding: 15px;
        border-radius: 35px;
    }
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    
        
`
const ProductCardButton = styled.button`
    align-self: center;
    border-radius: 20px;
    border: 1px solid ;
    width:35%;
    height: 36px;
    &:hover{
        background-color: #a9a9a9;
        transform: scale(1.1);
        box-shadow: 0px 2px 2px gray;
        transition: 100ms;
    }
`

export class ProductBox extends React.Component{
    render() {
        const product = this.props.product
        return <CardProduct>
            <img src={product.image} alt=""/>
            <CardInfo>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>Valor: R$ {product.price},00</h3>
                <ProductCardButton
                onClick={() => this.props.onAddProductToCart(product.id)}>
                    Reservar passagem
                </ProductCardButton>
            </CardInfo>

        </CardProduct>
    }
}