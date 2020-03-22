import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igkey => {
            return  <li key={igkey}>
                        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                    </li>;
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.pruchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.pruchaseContinue}>CONTINEU</Button>
        </Aux>
        
    ) 
}
export default orderSummary;