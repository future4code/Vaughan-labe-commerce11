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

    getListProducts = () => {
      return this.props.products
    }

    render() {
        const listProducts = this.getListProducts()
        return <BodyProducts>
            <ProductsHeader>
          <p>Quantidade de produtos:</p>
        <label>
          Ordenação:
          <select>
            <option>Decrescente</option>
            <option>Crescente</option>
          </select>
        </label>
        </ProductsHeader>

        <GridProduct>
          {listProducts.map((product) => {
            return <ProductBox
              product={product}
            />
          })}                    
        </GridProduct>

        </BodyProducts>
    }
}