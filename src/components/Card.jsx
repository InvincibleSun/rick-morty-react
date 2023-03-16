import { CardStyled } from "./styles/Card.styled"

export default function Card({img, name, species}) {
  return(
    <CardStyled>
      <div>  
        <img src={img} alt="character-pic"/>
      </div>
      
      <div>
        <h1>{name}</h1>
        <p>{species}</p>
      </div>
    </CardStyled>
  )
}

