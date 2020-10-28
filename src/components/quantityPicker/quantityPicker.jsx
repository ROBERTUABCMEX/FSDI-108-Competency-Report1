import React, { Component } from "react";

class QuantityPicker extends Component{
    state= {
        quantity: this.props.minimum,
        minimum: this.props.minimum,
    };

    
    
    render() { 
        return (
            <div className="quantityPicker">
                <button 
                    disabled={this.state.quantity===this.state.minimun} 
                    onClick={this.decrease} 
                    className="btn btn-sm btn-info"
                >-</button>
                <label  className="quantity">{this.state.quantity}</label>
                <button 
                    onClick={this.increase} 
                    className="btn btn-sm btn-info"
                >+</button>
            </div>
          );
    }

    decrease = () => {
        let val = this.state.quantity;
        
        if(val > this.state.minimun){
            val-=1;
        
            this.setState({quantity: val});
            this.props.onValueChange(val);
        }
    }

    //Arrow functions
    increase = () => {
        let val = this.state.quantity;
        val+=1;
        this.setState({quantity: val});
        this.props.onValueChange(val);
    }

}
 
export default QuantityPicker;



    

// ES6 topics

// Arrow function
// array filter
// array map

// Spread operator
// Object destructuring