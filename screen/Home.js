import React from 'react';

import { StatusBar ,Dimensions} from 'react-native';

import { LinearGradient} from 'expo-linear-gradient';

import  styled from 'styled-components/native';

import Header from '../Components/Header';

import Hero from '../Components/Hero';

import Moveis from '../Components/Movies';


const item1 = [
  require('../screen/assets/luke.jpg'),
  require('../screen/assets/casa.jpg'),
  require('../screen/assets/tupa.jpg'),
  require('../screen/assets/bea.jpg'),
  require('../screen/assets/fla.jpg'),
  require('../screen/assets/drago.jpg'),
]
const item2 = [
  require('../screen/assets/sex.jpg'),
  require('../screen/assets/Ane.jpg'),
  require('../screen/assets/poster7.jpg'),
  require('../screen/assets/bom.png'),
  require('../screen/assets/Naruto.jpg'),
  require('../screen/assets/ris.jpg'),

]
const item3 = [
  require('../screen/assets/Vin.jpg'),
  require('../screen/assets/defe.jpg'),
  require('../screen/assets/Dra.jpg'),
  require('../screen/assets/this.jpg'),
  require('../screen/assets/lion.jpg'),
  require('../screen/assets/lucifer.jpg'),
]
const item4 = [
  require('../screen/assets/will.jpg'),
  require('../screen/assets/jho.jpg'),
  require('../screen/assets/justiceiro.jpg'),
  require('../screen/assets/Naruto2.jpg'),
  require('../screen/assets/dom.jpg'),
  require('../screen/assets/Mila.jpg'),
]


const Container = styled.ScrollView`
 flex: 1;
 background-color: #000;

`

const Poster = styled.ImageBackground`
 width:100%;
 height:${(Dimensions.get('window').height * 81)/100}px;
`

const Gradient = styled(LinearGradient) `
 height:100%;

`

const Home = () => {
  return (
  <>
   <StatusBar translucent backgroundColo="trasnparent"  barStyle=" linght-content"/>
   <Container>
     <Poster source={require('../screen/assets/Ane.jpg')} >
      <Gradient 
       locations={[0, 0.2, 0.6, 0.93]} 
       colors={[
         'rgba(0,0,0,0.9)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0)',
          'rgba(0,0,0,1)'
        ]}>
        <Header/>
        <Hero/> 

      </Gradient>
     </Poster>
     <Moveis label="Minha  lista " item={item1} />
     <Moveis label="Recomendados" item={item2} />
     <Moveis label="Top 10" item={item3} />
     <Moveis label="Continuar assistindo" item={item4} />
   </Container>
   </>
  );
}

export default Home