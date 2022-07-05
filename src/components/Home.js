import React from 'react';
import styled from 'styled-components';
import './Home.css';

const Home = () => (
  <Section>
    <div className="text-div">
      <h2 className="title-div">Welcome to Our page!</h2>
    </div>
    <p>
      The history of mathematics deals with the origin of discoveries in
      mathematics and the mathematical methods and notation of the past. Before
      the modern age and the worldwide spread of knowledge, written examples of
      new mathematical developments have come to light only in a few locales.
      From 3000 BC the Mesopotamian states of Sumer, Akkad and Assyria, followed
      closely by Ancient Egypt and the Levantine state of Ebla began using
      arithmetic, algebra and geometry for purposes of taxation, commerce, trade
      and also in the patterns in nature, the field of astronomy and to record
      time and formulate calendars. The earliest mathematical texts available
      are from Mesopotamia and Egypt Plimpton 322 Babylonian c. 2000 1900 BC,2
      the Rhind Mathematical Papyrus Egyptian c. 1800 BC3 and the Moscow
      Mathematical Papyrus Egyptian c. 1890 BC. All of these texts mention the
      so-called Pythagorean triples, so, by inference, the Pythagorean theorem
      seems to be the most ancient and widespread mathematical development after
      basic arithmetic and geometry. The study of mathematics as a demonstrative
      discipline began in the 6th century BC with the Pythagoreans, who coined
      the term mathematics from the ancient Greek μάθημα mathema, meaning
      subject of instruction.4 Greek mathematics greatly refined the methods
      especially through the introduction of deductive reasoning and
      mathematical rigor in proofs and expanded the subject matter of
      mathematics.5 Although they made virtually no contributions to theoretical
      mathematics, the ancient Romans used applied mathematics in surveying,
      structural engineering, mechanical engineering, bookkeeping, creation of
      lunar and solar calendars, and even arts and crafts. Chinese mathematics
      made early contributions, including a place value system and the first use
      of negative numbers.67 The HinduArabic numeral system and the rules for
      the use of its operations, in use throughout the world today evolved over
      the course of the first millennium AD in India and were transmitted to the
      Western world via
    </p>
  </Section>
);

const Section = styled.div`
  margin: 20px auto;
  width: 100%;
  background-color: #f5f5f5;
  min-height: fit-content;
  @media (max-width: 768px) {
    height: auto;
  }
`;
export default Home;
