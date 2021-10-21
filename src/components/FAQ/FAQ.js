import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings, pageContents} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.title} img={settings.faq.image}/>
    <div>
      {pageContents.faqcontent.map(qna =>
        <div key={qna.id}>
          <h2>{qna.question}</h2>
          <p>{qna.answer}</p>
        </div>)}
    </div>
  </Container>
);

export default Faq;