import PratosModels from '../../models/pratosModels'
import PratosLista from '../Pratos'
import { ContainerPratos } from './styles'

type Props = {
  pratos: PratosModels[]
}

const ListaPratos = ({ pratos }: Props) => (
  <div className="container">
    <ContainerPratos>
      {pratos.map((prato) => (
        <PratosLista
          key={prato.id}
          image={prato.image}
          title={prato.title}
          description={prato.description}
        />
      ))}
    </ContainerPratos>
  </div>
)

export default ListaPratos
