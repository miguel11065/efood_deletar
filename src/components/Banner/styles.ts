import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 280px;
  display: block;
  margin-bottom: 56px;
  position: relative;
`

export const Tipos = styled.h3`
  color: ${cores.white};
  font-weight: 100;
  font-size: 32px;
  position: absolute;

  top: 25px;
`

export const NomeRestaurante = styled.h3`
  color: ${cores.white};
  font-weight: bold;
  font-size: 32px;
  position: absolute;

  bottom: 32px;
`
