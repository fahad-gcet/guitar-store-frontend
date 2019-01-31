import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from '@chevtek/react-spinners';
import {connect} from "react-redux";


import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <TopBar/>
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
        <Footer/>
        <Spinner name="mySpinner">
          <div className="spinner"></div>
        </Spinner>
      </div>
    );
  }
}


export default App;
