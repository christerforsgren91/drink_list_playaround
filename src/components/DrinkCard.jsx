import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
      <div className='container' >
        <div data-cy="drink-card">
          <div className="card">
            <img className="drink" src={drink.strDrinkThumb} alt="drinks" />
            <p data-cy="name">{drink.strDrink}</p>
          </div>
        </div>
      </div>
    )
  })

  return <div>{drinkList}</div>
}

export default DrinkCard
