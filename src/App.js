import React from 'react';

// step 7. import connect from react-redux so that props is able to use the info in our store which is passed to <App /> from <Provider />
import { connect } from "react-redux";

import { addFeature, removeFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


// 3. create a store and pass our reducer in here

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
//  this function allows the info from store to be passed down to props. State is taken in which refers to all the info stored in the reducer store. You are able to pass in specific pieces of state. You don't have to use all. It depends on what the component actually needs.
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {addFeature, removeFeature })(App);
