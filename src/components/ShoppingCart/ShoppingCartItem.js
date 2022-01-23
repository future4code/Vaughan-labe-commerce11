import React from "react";
import styled from "styled-components";

const ItemShoppingCart = styled.div`
display: grid;
grid-auto-flow: column;
gap: 4px;
align-items: center;

    p{
       margin:0;
       font-family:'Roboto'; 
    }
    
    >button{
        border-radius: 20px;
        border: 1px solid ;
        height: 25px;
            &:hover{
            background-color: #a9a9a9;
            transform: scale(1.1);
            box-shadow: 0px 2px 2px gray;
            transition: 100ms;
            }
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