import React from 'react';

// connect
import {connect} from 'react-redux'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// mapStateToProps
const mapStateToProps=state=>{
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
  }
}

// export default Total;
export default connect(mapStateToProps,null)(Total);
