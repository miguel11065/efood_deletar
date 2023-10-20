import ListasRestaurantes from '../../components/ListasRestaurantes'
import RestauranteModels from '../../models/restauranteModels'
import restaurante1 from '../../assets/images/restaurante1.png'
import restaurante2 from '../../assets/images/restaurante2.png'
import Header from '../../components/Header'

const lista: RestauranteModels[] = [
  {
    id: 1,
    infos: ['Destaque da semana', 'Japonesa'],
    image: restaurante2,
    title: 'Hioki Sushi ',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    infos: ['Italiana'],
    image: restaurante1,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    infos: ['Italiana'],
    image: restaurante1,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    infos: ['Italiana'],
    image: restaurante1,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    infos: ['Italiana'],
    image: restaurante1,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    infos: ['Italiana'],
    image: restaurante1,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <ListasRestaurantes restaurante={lista} />
  </>
)

export default Home
