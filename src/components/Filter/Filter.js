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
            <input></input>
            <p>Valor máximo:</p>
            <input></input>
            <p>Buscar por nome:</p>
            <input></input>
        </BodyFilter>
    }
}