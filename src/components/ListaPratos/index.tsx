import { RestaurantesAPI } from '../../pages/Home'
import PratosLista from '../Pratos'
import { ContainerPratos } from './styles'

type Props = {
  pratos: RestaurantesAPI[]
}

const ListaPratos = ({ pratos }: Props) => (
  <>
    <div className="container">
      <ContainerPratos>
        {pratos.map((prato) => (
          <PratosLista
            key={prato.cardapio.id}
            image={prato.cardapio.foto}
            title={prato.cardapio.nome}
            description={prato.cardapio.descricao}
            portion={prato.cardapio.porcao}
            price={prato.cardapio.preco}
          />
        ))}
      </ContainerPratos>
    </div>
  </>
)

export default ListaPratos
