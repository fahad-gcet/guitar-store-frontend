import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from '@chevtek/react-spinners';


import TopBar from './topbar/TopBar';
import Footer from './footer/Footer';
import spinnerImage from '../images/ajaxloader.gif';


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
          <img src={spinnerImage} className="spinnerImage"/>
        </Spinner>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
