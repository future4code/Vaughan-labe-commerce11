import React, { Component } from 'react';
import { Filter } from './components/Filter/Filter';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';
import mainLogo from './img/logo-white.png'
import backgroundHeader from './img/backgroud-header.jpg'

const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`
const StoreBody = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
`
const HeaderApp = styled.div`
    align-items: center;
    margin-bottom: -10px;
    display: flex;
    padding: 16px;
    font-family: 'Staatliches';
    font-size:30px;
    color:white;
    background-image: url(${backgroundHeader});
     >img{
        max-height: 90px;
     }
`
const FooterApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 16px;
    gap: 10px;
    font-family: 'Staatliches';
    font-size:larger;
    background-color: #062c43;
    color: white;
      >img{
        max-height: 90px;
     }
     >p{
       font-family: 'Roboto';
     }
`

const products = [
  {
    id: 1,
    name: 'Naboo',
    description:' Uma joia brilhante na Orla Média, Naboo possui renome em toda a galáxia como um centro de paz e aprendizado. Suas belas cidades coexistem em harmonia com as planícies gramadas e as colinas que as cercam.',
    price: 1400,
    image: require('./img/planet-naboo.jpg')
  },
  {
    id: 2,
    name: 'Coruscant',
    description:' O planeta-cidade Coruscant é o coração pulsante de uma galáxia muito muito distante, abrigando uma diversidade de cidadãos e culturas. Coruscant possui altíssimas torres de edifícios, fluxos de tráfego aéreo cheios de speeders e níveis internos que se extendem muito abaixo da superfície do planeta.',
    price: 1300,
    image: require('./img/planet-coruscant.jpg')
  },
  {
    id:3,
    name: 'Tatooine',
    description:'Tatooine é um mundo desértico que orbita sóis gêmeos na Orla Exterior da galáxia. Muitos colonos ganham a vida em fazendas úmidas, enquanto as cidades são base para diversas atividades (questionáveis) tais como esportes, comércio e jogos... Por precaução, sempre olhe seus bolsos por aqui!',
    price: 1000,
    image: require('./img/planet-tatooine.jpg')
  },
  {
    id:4,
    name: 'Hoth',
    description: 'Cansado de tanto calor? Hoth é o sexto planeta no sistema remoto de mesmo nome. É um mundo de neve e gelo cercado por inúmeras luas, em Roth você poderá cavalgar em um Tauntaun, além de poder aproveitar o clima refrescante do lugar!',
    price: 900,
    image: require('./img/planet-hoth.jpg')
  },
  {
    id:5,
    name: 'Alderaan',
    description: 'Alderaan é conhecido pela galáxia como o "planeta da beleza". Sua superfície possui vastas correntezas e montanhas cobertas de neve, com montes de grama verde ao redor. E com as suas cidades cuidadosamente projetadas para respeitar a beleza natural do meio ambiente.',
    price: 1700,
    image: require('./img/planet-alderaan.jpg')
  },
  {
    id:6,
    name: 'Mustafar',
    description:'Um planeta extremamente quente e em constante erupção, a instabilidade de Mustafar fez com que a magma que emerge na superfície carregue minerais únicos e valiosos, atraindo interesses comerciais de vários conglomerados galácticos de mineração. Tenha sempre certeza de andar no terreno elevado por aqui.',
    price: 800,
    image: require('./img/planet-mustafar.jpg')
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
        <HeaderApp>
          <img src={mainLogo} alt='main-logo'/>
          <h1>LabeSpace</h1>
        </HeaderApp>   
        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <StoreBody>
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
        </StoreBody>
        <FooterApp>          
          <h1>LabeSpace</h1>
          <img src={mainLogo} alt='main-logo'/>
          <p>&copy; LabeSpace Projeto-Commerce 2022 HTML.am</p>
        </FooterApp>
      </ContainerApp>
    )
  }
}

export default App;