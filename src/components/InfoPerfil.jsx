import './InfoPerfil.css'
const InfoPerfil = ({ perfil, nombre }) => {
    return (
        <div className='perfil-container'>
            <section className='perfil-foto'>
                <img src={perfil.foto} alt={"Fotografía de " + nombre} />
            </section>
            <article className='perfil-info'>
                <h2>Nombre: {nombre}</h2>
                <p>Fecha nacimiento: {perfil.fecha_nacimiento}</p>
                <p>Lugar nacimiento: {perfil.lugar_nacimiento}</p>
                <p>Dirección: {perfil.direccion}</p>
                <p>Estrato: {perfil.estrato}</p>
                <p>Estado civil: {perfil.estado_civil}</p>
                <p>EPS: {perfil.eps}</p>
                <button className='perfil-editar'>Editar Perfil</button>
            </article>
        </div>
    )
}

export default InfoPerfil