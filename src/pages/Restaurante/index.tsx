import PratosModels from '../../models/pratosModels'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import { BannerRestaurante1 } from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import prato1 from '../../assets/images/prato1.png'

const lista: PratosModels[] = [
  {
    id: 1,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: prato1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Pratos = () => (
  <>
    <HeaderRestaurante />
    <BannerRestaurante1 />
    <ListaPratos pratos={lista} />
  </>
)

export default Pratos
