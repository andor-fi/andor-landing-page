import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  Box,
  Container,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'




const headersData2 = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'WHITE PAPER',
    href: '/',
  },
]

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "rgb(235 238 255 / 70%)",
    margin:"0px 40px",
    // borderBottom: '5px solid transparent',
    padding: ' 0px 10px',
    fontSize: ' 16px',
    fontWeight: ' 400 !important',
    minWidth: '100px',
    lineHeight: '24px',
    borderRadius: 0,
    letterSpacing: '1px',
    height: '100%',
    '@media (max-width: 900px)': {
      fontStyle: 'normal',
      letterSpacing: '-0.6px',
      lineHeight: '24px',
      color: '#FFF',
      padding: '15px !important',
      height: '51px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    '&:active': {
      borderBottom: '5px solid #5a86ff',
    },
    '&:hover': {
      borderBottom: '5px solid #5a86ff',
    },
    "& a":{
      textDecoration:"none",
      color:"inherit"
    }
  },
  toolbar: {
    padding: '0',
    background: theme.palette.background.dark1,

    marginTop: '10px',
    // border: '1px solid #e1e1e1',
    borderRadius: '7px',
    overflow: 'hidden',
    // boxShadow: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    // height: '90px',
    '@media (max-width: 900px)': {
      paddingLeft: '75px',
      paddingRight: '20px',
      height: '100%',
    },
  },
  logoDrawer: {
    paddingLeft: '10px',
    width: '80px',
    marginBottom: '30px',
  },
  drawerContainer: {
    padding: '20px 0px ',
    height: '100%',
    background: '#242538',
    paddingLeft: ' 20px !important',
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  drawericon: {
    color: '#fff',
    position: 'absolute',
    top: '0px',
    right: '-0px',
    fontSize: '25px',
  },
  logoImg: {
    width: '75px',
    // height: '44.5px',
    margin: ' 14px 15px 11px 0px',
    objectFit: 'contain',
    '@media (max-width: 500px)': {
      margin: ' 11px 1px 3px 0px',
      width: '52px',
    },
  },
  menuMobile: {
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '-0.6px',
    lineHeight: '1.75',
    color: '#fff',
    textDecoration:"none",

    // borderBottom: "1px solid #3e3e3e",
    padding: '16px',
    '@media (max-width: 500px)': {
      padding: '7px 0',
      width: '100%',
    },
    "& a":{
      textDecoration:"none",
      color:"inherit"
    },
    '&:active': {
      borderBottom: '5px solid #5a86ff',
    },
    '&:hover': {
      borderBottom: '5px solid #5a86ff',
      background:"transparent"
    },
  },
  containerHeight: {
    height: '100%',
    background: theme.palette.background.dark1,
  },
  mainHeader: {
    height: '60px',
    display: 'flex',
    padding: 0,
    overflow: 'hidden',
    marginTop: '16px',
    borderRadius: '7px',
    justifyContent: 'space-between',
    backgroundColor: '#transparent',
    alignItems: 'center',
  },
  logoBox: {
    height: '100%',
    // borderRight: ' 1px solid #e1e1e1',
    '& a': {
      height: '100%',
      '& div': {
        height: '100%',
      },
    },
  },
  signinBox: {
    height: '100%',
    textAlign:"end",
    borderRadius:"50%",
    // borderLeft: ' 1px solid #e1e1e1',
    [theme.breakpoints.down('md')]: {
      borderLeft: ' none',
      marginLeft:"20px"
    },
    "& a":{
      textDecoration:"none",
      color:"inherit"
    },
    '& button': {
      // width: '100%',
      height: '100%',
      minWidth:"90px",
      [theme.breakpoints.down('md')]: {
        width: 'auto',
        height: 'auto',
        color: '#fff',
        // height: ' 60px',
      },
      // '& label': {
      //   fontSize: '14px !important',
      // },
    },
  },
}))

export default function Header() {
  const headersData = [
    {
      label: 'Home',
      href: '#homepage',
      class:"homeList"
    },
    {
      label: 'About Andor-Fi',
      href: '#aboutandor',
      class:"aboutList"
    },
    {
      label: 'Why us?',
      href: '#whyUsList',
      class:"whyUsList"
    },
    {
      label: 'Features',
      href: '#feature',
      class:"FeaturesList"
    },
  ]
 
  const {
    menuMobile,
    menuButton,
    menuButton1,
    logoBox,
    signinBox,
    toolbar,
    drawerContainer,
    drawericon,
    containerHeight,
    mainHeader
  } = useStyles()


  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

// console.log("ScrollTop ::",scrollPosition);


  

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })
  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" className="p-0">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            style={{ paddingLeft: '0px', height: '100%' }}
          >
            <Grid item xs={10} style={{ height: '100%' }}>
              {getMenuButtons()}
            </Grid>
            <Grid item xs={2} style={{ height: '100%' }}>
              {tryNowButton}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {/* <img className={logoDrawer} src="images/logo.png" alt="" /> */}
            <Logo className="logoImg" />
            {getDrawerChoices()}
            {tryNowButton}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>

        <Grid container alignItems="center">
          <Grid item xs={9}>
            {getDrawerChoices2()}
          </Grid>
          <Grid item xs={3}>
            <IconButton
              className={drawericon}
              {...{
                edge: 'start',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: '#fff', fontSize: '30px' }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              // component: Link,
              className: menuButton1,
            }}
          >
            <a href={href} className={menuMobile}>
            {label}
                </a>
          </Button>
        </>
      )
    })
  }
  const getDrawerChoices2 = () => {
    return headersData2.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              // component: Link,
              className: menuButton1,
            }}
          >
            {/* <MenuItem className={menuMobile2}>{label}</MenuItem> */}
          </Button>
        </>
      )
    })
  }

  const femmecubatorLogo = (
    <Box className={logoBox}>
    <Logo className="logoImg" />
      
    </Box>
  )

  const tryNowButton = (
    <Box className={signinBox}>
      <Button
        variant="contained"
      >
      <a href="https://t.me/projectstartrek_bot" target="_blank" rel="noopener noreferrer">Try Now</a>

        
      </Button>
    </Box>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: 'inherit',
              to: href,
              // component: Link,
              className: menuButton,
            }}
          >
          <a href={href} className="menuButton">
          {label}
              </a>
            
          </Button>
        </>
      )
    })
  }

  return (
    <>
      <AppBar
        position={scrollPosition>=2?'sticky':"relative"}
        elevation={0}
        style={scrollPosition>=2 ? {background:"#000",top:"0px"} : {background:"transparent"}}
        // style={{scrollPosition>=20?'sticky':"relative"}}}
      >
        <Container
          maxWidth={'fixed'}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Disconnect'}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            align="center"
            style={{ color: '#000' }}
          >
            Are you sure you want to Disconnect?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false)
            }}
            color="primary"
            style={{ color: '#5a86ff' }}
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
