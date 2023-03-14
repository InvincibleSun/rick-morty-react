import Rick from "../images/Rick.png"

import { CardStyled } from "./styles/Card.styled"

export default function Card({img, name, species}) {
  return(
    <CardStyled>
      <div>  
        <img src={img || Rick} alt="character-pic"/>
      </div>
      
      <div>
        <h1>{name || "Rick Sanchez"}</h1>
        <p>{species || "Human"}</p>
      </div>
    </CardStyled>
  )
}

