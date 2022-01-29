import './Header.css'
import logoBlanco from '../../assets/img/logoPeque.png'

const Header = ({ backgroundImage }) => {

    return (

        <div
            className="parallax header d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn animate_slower"
            style={
                {
                    backgroundImage: `url(${backgroundImage})`
                }
            }
        >
            <img src={logoBlanco} alt='Logo Mariscos El Rey' className='animate__animated animate__zoomIn animate__delay-1s'/>
            <h2 className='animate__animated animate__fadeInLeft animate__slow animate__delay-1s'>En Mariscos El Rey</h2>
            <h1 className='display-4 animate__animated animate__fadeInRight animate__slow animate__delay-1s'>Es un placer atenderte</h1>
        </div>

    )

}

export default Header