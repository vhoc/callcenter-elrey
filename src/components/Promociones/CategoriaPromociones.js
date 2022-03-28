import Promocion from "./Promocion"

const CategoriaPromociones = ( { titulo = 'Categoría', promociones } ) => {
    return (
        <div className="mt-3 col-12" width="100%" >
            <h3 className="text-capitalize"><strong>{ titulo }</strong></h3>
            <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
                {
                    promociones.map( promocion => {
                        return (
                            <Promocion
                                key={promocion.image}
                                sourceImg={ promocion.image }
                                urlOb={promocion.urlObregon}
                                urlGu={promocion.urlGuaymas}
                                urlHe={promocion.urlHermosillo}
                            />
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default CategoriaPromociones