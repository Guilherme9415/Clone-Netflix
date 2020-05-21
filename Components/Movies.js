import React from 'react';

import styled from 'styled-components/native';

import {Dimensions } from 'react-native';


const Container = styled.View`
padding: 20px 0 ;

`
const Label = styled.Text`
color: #FFF;
font-size:16px;
margin: 0 0 5px 10px;

`
const MovieScrooll = styled.ScrollView`
padding-left:10px;

`
const MovieCard = styled.View`
padding-right: 9px;

`
const MoviePoster = styled.Image`
width:100px;
height:150px;

`
const Movies = ({label, item ,item2,item3,item4}) => {
  return ( 
    <Container>
     <Label>{label}</Label>
      <MovieScrooll horizontal>
       {item.map((movie,item1,item2,item3,item4)=> {
         return (
          <MovieCard key={String(item1,item2,item3,item4)}>
          <MoviePoster resizeMode='cover' source={movie}/>
          </MovieCard>
         )

        })}
      </MovieScrooll>
    </Container>
  )           
}

export default Movies