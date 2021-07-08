import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  let drinkList = drinks.map((drink) => {
    return (
      <div data-cy="drink-card">
        <div>
          <p>{drink.strDrink}</p>
        </div>
        <img src={drink.strDrinkThumb} alt="drinks" />
      </div>
    )
  })

  return <div>{drinkList}</div>
}

export default DrinkCard
