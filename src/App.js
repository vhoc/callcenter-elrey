import './App.css';
import 'animate.css'
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import IntroText from './components/IntroText/IntroText';
import headerBackground from './assets/img/header-bg.webp';
import 'animate.css'
import FastPickUpVideo from './components/FastPickUpVideo/FastPickUpVideo';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Promociones from './components/Promociones/Promociones';
import CategoriaPromociones from './components/Promociones/CategoriaPromociones';

function App() {
  
  const categorias = [
    {
        "nombre": "ceviche de pescado",
        "promociones": [
            {
                "nombre": "medio-litro-ceviche-pescado",                
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-pes-medio.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/medio-litro-de-ceviche-de-pescado-medio-litro-de-agua-artesanal/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/medio-litro-de-ceviche-de-pescado-medio-litro-de-agua-artesanal/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/medio-litro-de-ceviche-de-pescado-medio-litro-de-agua-artesanal/"
            },
            {
                "nombre": "litro-ceviche-pescado",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-pes-litro.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-litro-de-ceviche-de-pescado/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-litro-de-ceviche-de-pescado/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-litro-de-ceviche-de-pescado/"
            },
            {
                "nombre": "litroymedio-ceviche-pescado",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-pes-litroymedio.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-litro-y-medio-de-ceviche-de-pescado-2/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-litro-y-medio-de-ceviche-de-pescado-2/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-litro-y-medio-de-ceviche-de-pescado-2/"
            },
            {
                "nombre": "cubeta-ceviche-pescado",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-pes-cube.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-pescado-2-lt-de-agua-fresca-artesanal/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-pescado-2-lt-de-agua-fresca-artesanal/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-pescado-2-lt-de-agua-fresca-artesanal/"
            }
        ]
    },
    {
        "nombre":"ceviche mixto",
        "promociones": [
            {
                "nombre": "medio-litro-ceviche-mixto",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mix-medio.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mixto/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mixto/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mixto/"
            },
            {
                "nombre": "litro-ceviche-mixto",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mix-litro.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mixto/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mixto/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mixto/"
            },
            {
                "nombre": "cubeta-ceviche-mixto",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mix-cube.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mixto/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mixto/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mixto/"
            }
        ]
    },
    {
        "nombre": "ceviche mitotero",
        "promociones": [
            {
                "nombre": "medio-litro-ceviche-mitotero",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mito-medio.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mitotero/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mitotero/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-mitotero/"
            },
            {
                "nombre": "litro-ceviche-mitotero",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mito-litro.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mitotero/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mitotero/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-litro-de-ceviche-mitotero/"
            },
            {
                "nombre": "cubeta-ceviche-mitotero",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-mito-cube.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mitotero/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mitotero/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/cubeta-de-ceviche-mitotero/"
            }
        ]
    },
    {
        "nombre": "ceviche de camaron",
        "promociones": [
            {
                "nombre": "medio-litro-ceviche-camaron",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-cam-medio.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-de-camaron/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-de-camaron/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-2-litro-de-ceviche-de-camaron/"
            },
            {
                "nombre": "litro-ceviche-camaron",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-cam-litro.jpg",
                "urlObregon": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-cam-litro.jpg",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/1-litro-de-ceviche-de-camaron/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/1-litro-de-ceviche-de-camaron/"
            },
            {
                "nombre": "cubeta-ceviche-camaron",
                "image": "https://callcenter.mariscoselrey.com.mx/assets/img/promos/202201/cev-cam-cube.jpg",
                "urlObregon": "https://obregon.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-camaron/",
                "urlGuaymas": "https://guaymas.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-camaron/",
                "urlHermosillo": "https://hermosillo.mariscoselrey.com.mx/producto/cubeta-de-ceviche-de-camaron/"
            }
        ]
    }
]

  return (
    <div className="App">

      <Header backgroundImage={ headerBackground }/>

      <Container className="d-flex flex-column p-5 gap-4 w-100" >

        <IntroText />

        <FastPickUpVideo />

        <ImageSlider imagePath='https://callcenter.mariscoselrey.com.mx/assets/img/slider/' />

        <Promociones>

          {
            categorias.map( categoria => {
              return <CategoriaPromociones key={ categoria.nombre } titulo={ categoria.nombre } promociones={ categoria.promociones } />
            } )
          }

          
        </Promociones>

      </Container>
      
      

    </div>
  );
}

export default App;
