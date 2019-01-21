import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

import {APP_NAME} from '../../config';

const TopBar = () => (
  <div>
    <span>
      <Link to="/">{APP_NAME}</Link>
    </span>
  </div>
);


export default TopBar;
