import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ imagePath = '' }) => {

    const items = [
        {
            imgsrc: '0.jpg',
            description: 'Una modalidad rápida y segura de Mariscos El Rey.'
        },
        {
            imgsrc: '1.jpg',
            description: ''
        },
        {
            imgsrc: '2.jpg',
            description: '',
        },
        {
            imgsrc: '3.jpg',
            description: 'Siempre listos para atenderte.'
        }
    ]

    return (

        <Carousel autoPlay={true} infiniteLoop interval={3000}>
        {
            items.map( (item, index) => {
                return (
                    <div key={ index }>
                        <img src={ imagePath + item.imgsrc } />
                        <p className="legend">{item.description}</p>
                    </div>
                )
            } )
        }
        </Carousel>

    )

}

export default ImageSlider