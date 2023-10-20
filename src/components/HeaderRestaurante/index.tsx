import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'

const HeaderRestaurante = () => (
  <div style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeaderBar className="container">
      <Link to="/">
        <a href="#">Restaurantes</a>
      </Link>
      <img src={logo} alt="EFOOD" />
      <a href="#">0 produto(s) no carrinho</a>
    </HeaderBar>
  </div>
)

export default HeaderRestaurante
