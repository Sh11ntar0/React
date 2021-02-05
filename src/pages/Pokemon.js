import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import H2 from '../components/HeadlineLevel2'

const URI = 'https://pokeapi.co/api/v2/pokemon'

const findBy = async (name = 'pikachu') => {
  const monster = await axios.get(`${URI}/${name}`)
  return monster.data
}

const defaultSprites = {
  back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
  back_female: '',
  back_shiny: '',
  back_shiny_female: '',
  front_default: '',
  front_female: '',
  front_shiny: '',
  front_shiny_female: '',
}

const UL = styled.ul`
display: flex;
`

const Select = styled.select`
display: block;
margin-top: 24px;
color: #444;
padding: .6em 1.4em .5em .8em;
box-sizing: border-box;
border: 1px solid #aaa;
box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
border-radius: .5em;
appearance: none;
background-color: #fff;
`


const Pokemon = props => {
  const [monsterName, setMonsterName] = useState('pikachu')
  const [monster, setMonster] = useState(defaultSprites)

  useEffect(() => {
    findBy(monsterName).then(data => setMonster(data.sprites))
  }, [monsterName])

  const ListItem = () => (
    <React.Fragment>
      <li><img src={monster.back_default} alt=""/></li>
      <li><img src={monster.back_female} alt=""/></li>
      <li><img src={monster.back_shiny} alt=""/></li>
      <li><img src={monster.back_shiny_female} alt=""/></li>
      <li><img src={monster.front_default} alt=""/></li>
      <li><img src={monster.front_female} alt=""/></li>
      <li><img src={monster.front_shiny} alt=""/></li>
      <li><img src={monster.front_shiny_female} alt=""/></li>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Wrapper>
        <H2>Pokemon</H2>
        <Select onChange={e => setMonsterName(e.target.value)}>
          <option value="pikachu">pikachu</option>
          <option value="fearow">fearow</option>
          <option value="nidorino">nidorino</option>
          <option value="rhyhorn">rhyhorn</option>
        </Select>
        <UL>
          <ListItem />
        </UL>
      </Wrapper>
    </React.Fragment>
  )
}

export default Pokemon