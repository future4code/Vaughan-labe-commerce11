import React from 'react';
import styled from 'styled-components';

const BodyFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #062c43;
    box-shadow: 0px 2px 6px #062c43;
    color: white;
    font-family:'Roboto';
        
        >input[type=text]{
        border-radius: 20px;
        border: 2px solid white ;
        background-color: transparent;
        width: 25%;
        height: 30px;
        padding-left: 10px;
        }
        
    `

const PriceInput = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: right;
    align-items: center;
    gap: 10px;

        >input[type=number]{
        border-radius: 20px;
        border: 2px solid white;
        background-color: transparent;
        width: 15%;
        height: 25px;
        padding-left: 10px;
        }
`

export class Filter extends React.Component{
    render () {
        return <BodyFilter>
            <input
                type="text"
                value={this.props.nameFilter}
                onChange={this.props.onChangeNameFilter}
                placeholder="Procurar..."
            />

            <PriceInput>
            <p><strong>Preço:</strong></p>
            <input
                type="number"
                value={this.props.minFilter}
                onChange={this.props.onChangeMinFilter}
                placeholder="R$ Min" 
            />
            -
            <input
                type="number"
                value={this.props.maxFilter}
                onChange={this.props.onChangeMaxFilter}
                placeholder="R$ Max" 
            />
            </PriceInput>
            
            
            
        </BodyFilter>
    }
}