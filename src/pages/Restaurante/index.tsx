import HeaderRestaurante from '../../components/HeaderRestaurante'
import ListaPratos from '../../components/ListaPratos'
import { useEffect, useState } from 'react'
import { RestaurantesAPI } from '../Home'
import { useParams } from 'react-router-dom'

const Pratos = () => {
  const { id } = useParams()

  const [lista, setLista] = useState<RestaurantesAPI[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLista(res))
  }, [id])

  if (!lista) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRestaurante />
      <ListaPratos pratos={lista} />
    </>
  )
}

export default Pratos
