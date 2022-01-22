import React from 'react';
import styled from 'styled-components';

const BodyFilter = styled.div`
    border: 1px solid black;
    padding: 8px;`

export class Filter extends React.Component{
    render () {
        return <BodyFilter>
            <h3>Filtros</h3>
            <p>Valor mínimo:</p>
            <input 
                type="number"
                value={this.props.minFilter}
                onChange={this.props.onChangeMinFilter}  
            />
            <p>Valor máximo:</p>
            <input
                type="number"
                value={this.props.maxFilter}
                onChange={this.props.onChangeMaxFilter}
            />
            <p>Buscar por nome:</p>
            <input
                type="text"
                value={this.props.nameFilter}
                onChange={this.props.onChangeNameFilter}
            />
        </BodyFilter>
    }
}