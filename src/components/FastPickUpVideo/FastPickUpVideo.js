import './FastPickUpVideo.css'
import ReactPlayer from 'react-player'

const FastPickUpVideo = () => {

    return (

        <div className="fastpickup">

            <h1>#FASTPICKUP</h1>

            <h3>Te llevamos tu pedido a tu auto</h3>

            <div className="mt-3" width="100%" >
                <ReactPlayer url='https://callcenter.mariscoselrey.com.mx/assets/video/FastPickUp_h264.mp4' />
            </div>

        </div>

    )

}

export default FastPickUpVideo