import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-between;
padding: 25px 25px 0 25px;
width:100%;

`
const Logo  = styled.Image`
width:40px;
height:50px;

`
 const Menu = styled.Text`
  font-size:18px;
  color:#fff;
  letter-spacing: 0.1px;
  
 `


const Header = () => {
  return <Container>
  <Logo resizeMode="contain" source={require('../screen/assets/Logo2.png')}/>
  <Menu> Séries</Menu>
  <Menu> Filmes</Menu>
  <Menu> Minha lista</Menu>

  </Container>
}

export default Header