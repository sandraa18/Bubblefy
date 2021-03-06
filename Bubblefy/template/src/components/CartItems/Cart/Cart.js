import React from 'react';
import BubblesInCart from '../BubblesInCart/BubblesInCart';
import ProceedOrder from '../../Checkout/ProceedOrder/ProceedOrder'
import { marshallStorage } from '../../../services/Storage';
class Cart extends React.Component{
    componentDidMount(){
        this.setState({cartItems: JSON.parse(marshallStorage())})
    }

    constructor(){
        super();
        this.state = {
            cartItems: [],
            total : 0
        }
    }

    render(){  
        console.log(this.props);
        return(
            <div>
                <p>Items in your cart</p>
                <BubblesInCart cartStorage={this.state.cartItems}/>
                <ProceedOrder />
            </div>
        )
    }
}
export default Cart;
