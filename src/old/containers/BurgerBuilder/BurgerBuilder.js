import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControlles/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            Salad : 0,
            Cheese : 0,
            Meat : 0,
            Salad : 0,
            Bacon:0

        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;