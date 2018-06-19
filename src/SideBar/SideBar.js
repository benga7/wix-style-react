import css from './SideBar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import BottomBar from './BottomBar';
import Menu from './Menu';

class SideBar extends React.Component {

  static displayName = 'SideBar'

  render() {
    return (
      <div className={css.wrapper}>
        {this.props.children}
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.any
  }
}

SideBar.Menu = Menu;
SideBar.BottomBar = BottomBar;

export default SideBar;
