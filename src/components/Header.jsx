import React from 'react'
import FotoPerfil from '../assets/logo-nobre.png'
import { Subtitle, Title, Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <div className="box-perfil"><img src={FotoPerfil} alt="Foto de Perfil da empresa Nobre Stamp" /></div>
      <Title>Nobre Stamp 📒</Title>
      <Subtitle>agendas | Cartões | Adesivos</Subtitle>

    </Wrapper>
  )
}

export default Header