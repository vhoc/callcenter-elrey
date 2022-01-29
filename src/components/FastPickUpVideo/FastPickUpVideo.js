import './FastPickUpVideo.css'
import poster from '../../assets/img/poster-video.jpg'
import video from '../../assets/video/FastPickUp_h264.mp4'

const FastPickUpVideo = ({ url }) => {

    return (

        <div className="fastpickup">

            <h1>#FASTPICKUP</h1>

            <h3>Te llevamos tu pedido a tu auto</h3>

            <video className="mt-3" width="100%" controls="" name="media" poster={ poster }>
                <source src={ video } type="video/mp4"/>
            </video>

        </div>

    )

}

export default FastPickUpVideo