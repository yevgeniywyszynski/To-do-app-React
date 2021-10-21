import React from 'react';
import Container from '../Container/Container';
import {pageContents, settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} img={settings.info.image}/>
    <h2>{pageContents.infoContent.header}</h2>
    <p>{pageContents.infoContent.content}</p>
  </Container>
);

export default Info;