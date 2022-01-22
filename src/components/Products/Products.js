import React from "react";
import styled from "styled-components";
import { ProductBox } from "./ProductsBox";

const BodyProducts = styled.div`
        
`
const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`
const GridProduct = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`

export class Products extends React.Component{

  state = {
    sort: 'DECRESCENTE'
  }

    getFilteredAndOrderedList = () => {
      return this.props.products
      .filter((product) => this.props.maxFilter ? product.price <= this.props.maxFilter: true)
      .filter((product) => this.props.minFilter ? product.price >= this.props.minFilter: true)
      .filter((product) => this.props.nameFilter ? product.name.includes (this.props.nameFilter) : true)
      .sort((a,b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
    }

    onChangeSort = (event) => {
      this.setState({sort: event.target.value})
    }

    render() {
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        return <BodyProducts>
            <ProductsHeader>
          <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação:
          <select value = {this.state.sort} onChange={this.onChangeSort}>
            <option value={'DECRESCENTE'}>Decrescente</option>
            <option value={'CRESCENTE'}>Crescente</option>
          </select>
        </label>
        </ProductsHeader>

        <GridProduct>
          {filteredAndOrderedList.map((product) => {
            return <ProductBox
              product={product}
              onAddProductToCart={this.props.onAddProductToCart}
            />
          })}                    
        </GridProduct>

        </BodyProducts>
    }
}