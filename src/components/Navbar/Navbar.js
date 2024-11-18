import React, {useContext, useState} from 'react';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import {IoMenuSharp, IoHomeSharp} from 'react-icons/io5';
import {HiDocumentText} from 'react-icons/hi';
import {BsFillGearFill} from 'react-icons/bs';
import {FaUser, FaFolderOpen} from 'react-icons/fa';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/svg/logo/HackLogo.svg';
import './Navbar.css';
import {headerData} from '../../data/headerData';
import {ThemeContext} from '../../contexts/ThemeContext';

function Navbar() {
    const {theme, setHandleDrawer} = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            position: "fixed",
            top: "30px",
            right: "30px",
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.up('md')]: {
                display: 'none',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        desktopNav: {
            display: 'none',
            [t.breakpoints.up('md')]: {
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
            },
        },
        desktopNavLink: {
            color: theme.tertiary,
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 600,
            fontFamily: 'var(--primaryFont)',
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.primary,
            },
        },
        desktopNavIcon: {
            fontSize: '1.3rem',
            marginRight: '0.5rem',
            verticalAlign: 'middle',
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const navItems = [
        { to: '/', icon: <IoHomeSharp />, text: 'Home' },
        { to: '/#about', icon: <FaUser />, text: 'Who am I?' },
        { to: '/#why', icon: <HiDocumentText />, text: 'Why me?' },
        { to: '/#skills', icon: <BsFillGearFill />, text: 'Skills' },
        { to: '/#answers', icon: <FaFolderOpen />, text: 'Answers' },
    ];

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <img src={logo} alt="Logo" className="navbar--logo"/>

                {/* Desktop Navigation */}
                <div className={classes.desktopNav}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={classes.desktopNavLink}
                            smooth={true}
                            spy='true'
                            duration={2000}
                        >
                            <span className={classes.desktopNavIcon}>
                                {item.icon}
                            </span>
                            {item.text}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    id='navicon'
                />
            </div>

            {/* Mobile Drawer */}
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{paper: classes.MuiDrawer}}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br/>

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        {navItems.map((item) => (
                            <Fade left key={item.to}>
                                <NavLink
                                    to={item.to}
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                >
                                    <div className={classes.drawerItem}>
                                        <span className={classes.drawerIcon}>
                                            {item.icon}
                                        </span>
                                        <span className={classes.drawerLinks}>
                                            {item.text}
                                        </span>
                                    </div>
                                </NavLink>
                            </Fade>
                        ))}
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;