import './Promocion.css'
import Swal from 'sweetalert2'

const Promocion = ( { sourceImg, urlOb, urlGu, urlHe } ) => {

    const promoMenu = () => {
        Swal.fire({
            title: '▼',
            customClass: 'promo-img',
            background: `rgba(0,0,0,0) url(${ sourceImg })`,
            html: `<a class="btn btn-info btn-popup text-white mt-1" target="_blank" href="${ urlOb }">Obregón</a><br/><a class="btn btn-info btn-popup text-white mt-1" target="_blank" href="${ urlGu }">Guaymas</a><br/><a class="btn btn-info btn-popup text-white mt-1" target="_blank" href="${ urlHe }">Hermosillo</a><br/><a class="btn btn-messenger btn-popup text-white mt-1" target="_blank" href="http://m.me/mariscoselrey">Ordenar por Messenger</a><br/><a class="btn btn-whatsapp btn-popup text-white mt-1" target="_blank" href="https://api.whatsapp.com/send?phone=5216442321222&text=Hola%20Diana.%20Quiero%20ordenar%20a%20domicilio.">Ordenar por WhatsApp</a>`,
            showConfirmButton: false,
            showCloseButton: false,
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        });
    }

    return (
        <img
            className="img-promo rounded imgLink imgPromocion img-responsive"
            src={ sourceImg }
            onClick={ () => promoMenu( '', '', '' ) }
        />
    )
}

export default Promocion