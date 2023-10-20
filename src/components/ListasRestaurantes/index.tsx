import RestauranteModels from '../../models/restauranteModels'
import Restaurantes from '../Restaurantes'
import { List } from './styles'

type Props = {
  restaurante: RestauranteModels[]
}

const ListasRestaurantes = ({ restaurante }: Props) => (
  <div>
    <div className="container">
      <List>
        {restaurante.map((restaurant) => (
          <Restaurantes
            key={restaurant.id}
            title={restaurant.title}
            rate={restaurant.rate}
            description={restaurant.description}
            infos={restaurant.infos}
            image={restaurant.image}
          />
        ))}
      </List>
    </div>
  </div>
)

export default ListasRestaurantes
