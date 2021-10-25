import React from 'react';
import { pageContents, settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Contact = () => (
  <Container>
    <Hero titleText={settings.contact.title} img={settings.contact.image}/>
    <div>
      <h4>{pageContents.conactInfo.mail}</h4>
      <h4>{pageContents.conactInfo.phone}</h4>
    </div>
  </Container>
);

export default Contact;