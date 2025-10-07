import { useEffect, useState } from 'react'
import { endPoints } from '../api/apiSistemaGestion'
import Header from '../components/Header'
import './Perfil.css'
import InfoPerfil from '../components/InfoPerfil'

const Perfil = () => {
  let usuarioAuth = JSON.parse(localStorage.getItem("usuario"))
  const [usuario, setUsuario] = useState({})
  function getPerfilUsuario() {
    // fetch(endPoints.perfiles + "/" + usuarioAuth.id)
    fetch(`${endPoints.perfiles}/${usuarioAuth.id}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error)=> console.log(error))
  }
  useEffect(()=>{
    getPerfilUsuario()
  }, [])

  return (
    <div >
      <Header />
      <InfoPerfil perfil={usuario} nombre={usuarioAuth.nombre} />
    </div>
  )
}

export default Perfil