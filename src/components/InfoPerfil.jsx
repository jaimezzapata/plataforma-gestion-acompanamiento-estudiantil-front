import './InfoPerfil.css'
const InfoPerfil = ({ perfil, nombre }) => {
    return (
        <div className='perfil-container'>
            <div className='perfil-card'>
                <section className='perfil-foto'>
                    <div className='foto-wrapper'>
                        <img src={perfil.foto} alt={"Fotografía de " + nombre} />
                    </div>
                    <h2 className='perfil-nombre'>{nombre}</h2>
                </section>
                
                <article className='perfil-info'>
                    <div className='info-grupo'>
                        <h3 className='info-titulo'>Información Personal</h3>
                        <div className='info-campo'>
                            <span className='campo-label'>Fecha de Nacimiento:</span>
                            <span className='campo-valor'>{perfil.fecha_nacimiento}</span>
                        </div>
                        <div className='info-campo'>
                            <span className='campo-label'>Lugar de Nacimiento:</span>
                            <span className='campo-valor'>{perfil.lugar_nacimiento}</span>
                        </div>
                        <div className='info-campo'>
                            <span className='campo-label'>Estado Civil:</span>
                            <span className='campo-valor'>{perfil.estado_civil}</span>
                        </div>
                    </div>

                    <div className='info-grupo'>
                        <h3 className='info-titulo'>Información de Contacto</h3>
                        <div className='info-campo'>
                            <span className='campo-label'>Dirección:</span>
                            <span className='campo-valor'>{perfil.direccion}</span>
                        </div>
                        <div className='info-campo'>
                            <span className='campo-label'>Estrato:</span>
                            <span className='campo-valor'>{perfil.estrato}</span>
                        </div>
                    </div>

                    <div className='info-grupo'>
                        <h3 className='info-titulo'>Información de Salud</h3>
                        <div className='info-campo'>
                            <span className='campo-label'>EPS:</span>
                            <span className='campo-valor'>{perfil.eps}</span>
                        </div>
                    </div>

                    <div className='perfil-acciones'>
                        <button className='perfil-editar'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                            Editar Perfil
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default InfoPerfil