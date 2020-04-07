import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi)}>
        { props.eatenSushi ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
      <p className="error">
        { (props.money > props.sushi.price) ? "You have enough money"
        :
         "You don't have enough money" }
      </p>
    </div>
  )
}

export default Sushi