import React from 'react';
import styled from 'styled-components';
import { ShoppingCartItem } from './ShoppingCartItem';

const BodyCarrinho = styled.div`
    border-radius: 15px;
    padding: 16px;
    background-color: #062c43;
    color: white;
    box-shadow: 0px 2px 6px #062c43;
        
        >p{
            font-family:'Roboto';
        }
    `
const CartList = styled.div`
    display: grid;
    gap: 6px;
    margin: 10px;
`


export class ShoppingCart extends React.Component{
    getTotalValue = () => {
        let totalValue = 0

        for(let product of this.props.productsInCart) {
            totalValue += product.price * product.quantity
        }
        return totalValue
    }

    render () {
        return <BodyCarrinho>
            <h3>Carrinho</h3>
            
            <CartList>
                {this.props.productsInCart.map((product) => {
                return <ShoppingCartItem 
                cartItem={product}
                onRemoveProductFromCart={this.props.onRemoveProductFromCart}/>
            })}   
            </CartList>
            
            <p><strong>Valor Total:</strong> R$ {this.getTotalValue()},00</p>
        </BodyCarrinho>
    }
}