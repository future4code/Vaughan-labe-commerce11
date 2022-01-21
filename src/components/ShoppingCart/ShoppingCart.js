import React from 'react';
import styled from 'styled-components';

const BodyCarrinho = styled.div`
    border: 1px solid black;
    padding: 8px;
    `

export class ShoppingCart extends React.Component{
    render () {
        return <BodyCarrinho>
            <h3>Carrinho</h3>            
        </BodyCarrinho>
    }
}