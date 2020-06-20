import React from 'react';

import {connect} from 'react-redux'
import {removeFeature} from '../actions'


const AddedFeature = props => {

  const handleBuy = feature =>{
    let hasFeature = false;
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={(e)=>{
        e.preventDefault();
        props.removeFeature(props.feature);
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>{
  return {
    car: state.car
  }
}
const mapDispatchToProps = {removeFeature};

export default connect(mapStateToProps,mapDispatchToProps)(AddedFeature);
