import React from 'react';
import PropTypes from 'prop-types';

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
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
