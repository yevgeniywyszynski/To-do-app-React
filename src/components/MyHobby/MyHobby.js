import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const MyHobby = () => (
  <Container>
    <Hero titleText={settings.myHobby.title} img={settings.myHobby.image}/>
    <p>uu</p>
  </Container>
);

export default MyHobby;