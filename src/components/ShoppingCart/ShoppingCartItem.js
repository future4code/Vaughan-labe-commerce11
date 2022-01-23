import React from "react";
import styled from "styled-components";

const ItemShoppingCart = styled.div`
display: grid;
grid-auto-flow: column;
gap: 4px;
align-items: center;

    p{
       margin:0; 
    }
`

export class ShoppingCartItem extends React.Component {
    render (){
        return (
            <ItemShoppingCart>
                <p>{this.props.cartItem.quantity}</p>
                <p>{this.props.cartItem.name}</p>
                <button 
                onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>
                    Remover</button>
            </ItemShoppingCart>
        )
    }
}