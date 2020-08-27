import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import List from '@material-ui/core/List';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
//Icons
import InfoIcon from '@material-ui/icons/Info';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ImageIcon from '@material-ui/icons/Image';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FlagIcon from '@material-ui/icons/Flag';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/More';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';

export default function Home() {

  const crYear = new Date().getFullYear()

  const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #000000 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      padding: '0 0',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'black'
    },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .0)',
      background: 'linear-gradient(45deg, #ffffff 30%, #f29db7 90%)'
    },
    appBarText: {
      color: 'black'
    }
  }));
  const classes = useStyles();

  const [drawer, setDrawer] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer({ ...drawer, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About Us', 'Notifications', 'Our Event Calendar', 'Our Locations'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Picture Gallery', 'Facebook Live Videos', 'Youtube Live Videos', 'Flyers'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Projects', 'Mission', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{getIcon(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  //Side Toolbar Menus
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="container">
      <Head>
        <title>Fundacja The Voice of Hope</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <topbar>
        <AppBar position="static" className={classes.appBar}>

          <Typography variant="h2" className={classes.appBarText} style={{ paddingLeft: '72px' }}>
            Fundacja
            </Typography>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.appBarText}>
              “The Voice Of Hope”
            </Typography>
            <div className={classes.grow} />
            <Button size="large" ref={anchorRef} onClick={handleToggle} >About the Fundacja</Button>
            <Button size="large" >VIJ Church</Button>
            <Button size="large" >International Students</Button>
            <Button size="large" >Orphans</Button>
            <Button size="large" >Purpose</Button>
            <Button size="large" >Contact</Button>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
      </topbar>
      <Drawer anchor={'left'} open={drawer['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
      <main>

      </main>



      <footer>
        Clip Seven Inc. | VIJ Church © {crYear} | God Power Real Estate
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        topbar{
          width: 100%;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}

//  [Projects', 'Mission', 'Contact Us

function getIcon(text) {
  switch (text) {
    case 'About Us':
      return <InfoIcon />;
    case 'Notifications':
      return <NotificationsActiveIcon />;
    case 'Our Event Calendar':
      return <CalendarTodayIcon />;
    case 'Picture Gallery':
      return <ImageIcon />;
    case 'Our Locations':
      return <LocationOnIcon />;
    case 'Facebook Live Videos':
      return <FacebookIcon />;
    case 'Youtube Live Videos':
      return <YouTubeIcon />;
    case 'Flyers':
      return <InsertDriveFileIcon />;
    case 'Projects':
      return <AccountTreeIcon />;
    case 'Mission':
      return <FlagIcon />;
    case 'Contact Us':
      return <ContactMailIcon />;

    default:
      return <ContactMailIcon />;
  }
}
