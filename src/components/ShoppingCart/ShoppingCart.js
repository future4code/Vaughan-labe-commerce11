import React from 'react';
import styled from 'styled-components';
import { ShoppingCartItem } from './ShoppingCartItem';

const BodyCarrinho = styled.div`
    border: 1px solid black;
    padding: 16px;    
    `
const CartList = styled.div`
    display: grid;
    gap: 6px;
    margin: 16px;
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
            
            <p>Valor Total: R${this.getTotalValue()},00</p>
        </BodyCarrinho>
    }
}