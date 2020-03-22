import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purchasable: false,
        purchasing: false

    }

    purchaseHendler = () => {
        this.setState({ purchasing: true})
    }
    purchaseClosed = () => {
        this.setState({ purchasing: false })
    }
    pruchaseContinue = () => {
        alert('you continue');
        this.setState({ purchasing: false }) 
    }
    updatePurchasableState (newPrice){
        this.setState({purchasable : newPrice > 4});
            // const sum = Object.keys(ingredients)
            // .map( igkey => {
            //     return ingredients[igkey];
            // }).reduce((sum,ig) =>{
            //     return sum + ig;
            // },0);
            // this.setState({purchasable: sum > 0})
    }

    addIngredientHendler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingredients
        };
        updatedIngrediants[type] = updatedCount; 
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngrediants });
        this.updatePurchasableState(newPrice);
    }

    removeIngredientHendler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngrediants = { 
            ...this.state.ingredients
        };
        updatedIngrediants[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngrediants });
        this.updatePurchasableState(newPrice);
    }
     
    render(){
        const disableInfo = { ...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        };
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseClosed}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        pruchaseCancelled={this.purchaseClosed}
                        pruchaseContinue={this.pruchaseContinue}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHendler}
                    ingredientRemoved={this.removeIngredientHendler} 
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHendler}
                    price={this.state.totalPrice}/> 
            </Aux>
        );
    }
}
export default BurgerBilder;