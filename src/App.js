import React, { Component } from 'react';
import { Filter } from './components/Filter/Filter';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const ContainerApp = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 16px;
    gap: 8px;
    height: 97vh;
`;

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 1200,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 2400,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 800,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 300,
    photo: 'https://picsum.photos/200/200?a=4'
  }
]

export class App extends Component {
  render() {
    return (
      <ContainerApp>      
        <Filter/>
        <Products
        products={products}
        />
        <ShoppingCart/>
      </ContainerApp>
    )
  }
}

export default App;