import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardGroup } from 'react-bootstrap'

const DrinkCard = () => {
  const [drinks, setDrinks] = useState([])

  const fetchDrinks = async () => {
    const response = await axios.get(
      'www.thecocktaildb.com/api/json/v1/1/search.php?s'
    )
    setDrinks(response.data.drinks)
  }

  useEffect(() => {
    fetchDrinks()
  }, [])

  let drinkList = drinks.map((drink, index) => {
    return (
      <CardGroup key={index} style={{ width: '17rem' }}>
        <Card data-cy="drink-card" className="card">
          <Card.Img variant="top" src={drink.strDrinkThumb} />
          <Card.Title data-cy="name">{drink.strDrink}</Card.Title>
        </Card>
      </CardGroup>
    )
  })

  return (
    <div className="container">
      <div className="row">{drinkList}</div>
    </div>
  )
}

export default DrinkCard
