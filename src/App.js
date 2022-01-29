import './App.css';
import 'animate.css'
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import IntroText from './components/IntroText/IntroText';
import headerBackground from './assets/img/header-bg.webp';
import 'animate.css'
import FastPickUpVideo from './components/FastPickUpVideo/FastPickUpVideo';
import ImageSlider from './components/ImageSlider/ImageSlider';

function App() {
  return (
    <div className="App">

      <Header backgroundImage={ headerBackground }/>

      <Container className="d-flex flex-column p-5 gap-4" >

        <IntroText />

        <FastPickUpVideo />

        <ImageSlider imagePath='assets/img/slider/' />

      </Container>
      
      

    </div>
  );
}

export default App;
