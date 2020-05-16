import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import TitleOne from './components/TitleOne';
import Paragraph from './components/Paragraph';
import { ReactComponent as ReactLogoSvg } from './logo.svg';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

const wordsList = [
  {
      eng: 'between',
      rus: 'между'
  },
  {
      eng: 'high',
      rus: 'высокий'
  },
  {
      eng: 'really',
      rus: 'действительно'
  },
  {
      eng: 'something',
      rus: 'что-нибудь'
  },
  {
      eng: 'most',
      rus: 'большинство'
  },
  {
      eng: 'another',
      rus: 'другой'
  },
  {
      eng: 'much',
      rus: 'много'
  },
  {
      eng: 'family',
      rus: 'семья'
  },
  {
      eng: 'own',
      rus: 'личный'
  },
  {
      eng: 'out',
      rus: 'из/вне'
  },
  {
      eng: 'leave',
      rus: 'покидать'
  },
];


const App = () => {
  return(
    <>
      <Header>
        <TitleOne>
          Онлайн-школа LearnEnglish
        </TitleOne>

        <Paragraph>
          Онлайн-школа по изучению английского языка. 
        </Paragraph>
      </Header>

      <HeaderBlock>
        <TitleOne>
          Учите слова онлайн
        </TitleOne>

        <Paragraph>
          Используйте карточки для запоминания и пополняйте активный словарынй запас.
        </Paragraph>

      </HeaderBlock>

      <div>
        {
          wordsList.map(({ eng, rus }, index) => 
            <Card 
              key={index}
              eng={eng} 
              rus={rus}
          />)
        }
      </div>

      <HeaderBlock  hideBackground> 
        <TitleOne>
          Учите слова с нами
        </TitleOne>

        <Paragraph>
          Используйте карточки для запоминания и пополняйте активный словарынй запас.
        </Paragraph>

        <ReactLogoSvg/>
      </HeaderBlock>

      <Footer>
        <TitleOne>
          Наши контакты
        </TitleOne>

        <Paragraph>
          Скоро будут ссылки по которым сможете нас найти
        </Paragraph>
      </Footer>
    </>
  );
};

export default App;
