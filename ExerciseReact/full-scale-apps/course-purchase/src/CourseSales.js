import React, { Component } from 'react';

class CourseSales extends Component {
  sumPrice(price){
    this.setState({total: this.state.total + price});
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0
    };

    this.sumPrice = this.sumPrice.bind(this);
  }

  render(){
    console.log(this.props.items)
    return(
      <div>

      </div>
    );
  }
}

export default CourseSales
