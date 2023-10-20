import { Imagem, NomeRestaurante, Tipos } from './styles'
import restaurante1 from '../../assets/images/restaurante1.png'
import restaurante2 from '../../assets/images/restaurante2.png'

export const BannerRestaurante1 = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${restaurante1})` }}>
      <div className="container">
        <Tipos>Italiana</Tipos>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </div>
    </Imagem>
  </>
)

export const BannerRestaurante2 = () => (
  <Imagem style={{ backgroundImage: `url(${restaurante2})` }}></Imagem>
)
