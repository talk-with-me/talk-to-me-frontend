import React from 'react';
import SharedContext from './SharedContext';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    'font-family': 'Roboto',
  },
  content: {
    'padding': '20px',
    'color': 'white',
    'background': 'rgba(248,74,98,1)',
    'height': '100%',
  },
  homeButton: {
    'color': 'white',
    'font-size': '14pt',
    'width': '100%',
    'padding': '15px',
  },
  homeIcon: {
    'height': '40px',
    'width': '40px',
    'color': 'white',
    'margin-right': '15px',
  }
}));

/**
 * Sidebar component
 *
 * @return {object} JSX
 */
function Sidebar() {
  const classes = useStyles();
  const {sidebarOpen, setSidebarOpen} = React.useContext(SharedContext);

  return (
    <SwipeableDrawer 
      open={sidebarOpen} 
      onClose={() => setSidebarOpen(false)}
      className={classes.root}>
      <div className={classes.content}>
        <Button className={classes.homeButton}
          component={NavLink}
          onClick={() => setSidebarOpen(false)}
          to='/'>
          <HomeIcon className={classes.homeIcon}/>
          Homepage
        </Button>
      </div>
    </SwipeableDrawer>
  );
}

export default Sidebar;
