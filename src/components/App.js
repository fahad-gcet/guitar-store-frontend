import React, {PropTypes} from 'react';

import TopBar from './topbar/TopBar';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <TopBar/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
