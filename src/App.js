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
  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)
    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]
      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)
    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <ContainerApp>      
        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Products
        products={products}
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
        onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
          />
      </ContainerApp>
    )
  }
}

export default App;