import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import logo from '../puiblic/assets/la-logo.svg';
import { theme } from './Theme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  hamburgerMenuIcon: {
    color:  '#464643',
    height: '30px',
    width:  '30px',
    marginRight: '15px',
  },
  menuIconContainer: {
    marginLeft: 'auto',
    color: 'white',
    '&:hover': {
      opacity: 1,
    },
  },
  appbar: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    // height: '200px',
    margin: '0',
    padding: '0',
    boxShadow: 'none',
    // zIndex: theme.zIndex.modal + 1,
  },
  toolbar: {
    display: 'findByLabelText',
    justifyContent: 'space-between',
  },
};

const DesktopNavigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="MenuContainer" className="wrap-menu">
      <a className="menu-link" label="Home" href="/">Home</a>
      <a className="menu-link" label="About" href="/about">About</a>
      <a className="menu-link" label="Services" href="/services">Services</a>
      <a className="menu-btn-link" label="Portfolio" href="/portfolio">Potfolio</a>
    </div>
  );
};

const MobileNavigation = () => {
  const [openMenuMob, setopenMenuMob] = React.useState(false);

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      {openMenuMob && 
        <div className="menu-mobile">
          <div className="wrap-menu-mobile">
            <a className="menu-link-mobile" label="Home" href="/">Home</a>
            <a className="menu-link-mobile" label="About" href="/about">About</a>
            <a className="menu-link-mobile" label="Services" href="/services">Services</a>
            <a className="menu-btn-link-mobile" label="Portfolio" href="/portfolio">Potfolio</a>
          </div>
        </div>
      }
      <IconButton
        sx={styles.menuIconContainer}
        onClick={() => setopenMenuMob(!openMenuMob)}
        disableRipple
      >
        {!openMenuMob
          ? <MenuIcon sx={styles.hamburgerMenuIcon} />
          : <CloseIcon sx={styles.hamburgerMenuIcon} />
        }
      </IconButton>
    </React.Fragment>
  );
};

const Menu = () => {
  const isMobileMode = useMediaQuery(theme.breakpoints.down('sm')),
        heightHeader = { height:'200px' };
  if(isMobileMode) heightHeader.height = '100px';

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={styles.appbar}
        elevation={9}
        style={heightHeader}
      >
        <Toolbar disableGutters={true} sx={styles.toolbar}>
          <Button
            disableRipple
            component={Link}
            to="/"
            sx={styles.logoContainer}
          >
            {!isMobileMode
            ? <div style={{ height:'140px', margin:'30px' }}>
                <img src={logo} className="main-menu-logo" alt="logo" />
              </div>
            : <div style={{ height:'80px', margin:'15px' }}>
                <img src={logo} className="main-menu-logo" alt="logo" />
              </div>}
          </Button>
          {isMobileMode ? <MobileNavigation /> : <DesktopNavigation />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Menu;
