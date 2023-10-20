import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 186px;

  a {
    color: ${cores.indianRed};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
`
