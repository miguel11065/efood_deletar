import { Botao, Card, Descricao, PratoImg, Titulo } from './styles.'

export type Props = {
  image: string
  title: string
  description: string
}

const PratosLista = ({ image, title, description }: Props) => (
  <Card className="container">
    <PratoImg src={image} alt="" />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adcionar ao carrinho</Botao>
  </Card>
)

export default PratosLista
