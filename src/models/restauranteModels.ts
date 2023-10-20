class RestauranteModels {
  title: string
  rate: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    infos: string[],
    image: string,
    title: string,
    rate: string,
    description: string
  ) {
    this.id = id
    this.infos = infos
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
  }
}

export default RestauranteModels
