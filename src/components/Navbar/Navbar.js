import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoMenuSharp } from 'react-icons/io5';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/svg/logo/HackLogo.svg'; // Adjust the path as needed
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '3rem',
            color: theme.tertiary,
            cursor: 'pointer',
            position: 'fixed',
            top: '30px',
            right: '30px',
            display: 'none', // Hidden on large screens
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down(768)]: {
                display: 'block', // Visible only on small screens
            },
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0,
            paddingRight: '3rem', // Added padding to the right
            position: 'absolute',
            right: '2rem',
            top: '2rem',
        },
        navLink: {
            fontSize: '1rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: theme.primary,
            textDecoration: 'none',
            position: 'relative',
            transition: 'color 0.3s ease', // Плавний перехід кольору тексту
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: '-5px',
                height: '2px',
                width: '100%',
                background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                transform: 'scaleX(0)',
                transition: 'transform 0.3s ease',
            },
            '&:hover': {
                color: 'black', // Чорний текст при наведенні
            },
            '&:hover::after': {
                transform: 'scaleX(1)', // Лінія з'являється при наведенні
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '16em',
            fontFamily: 'var(--primaryFont)',
            background: theme.secondary,
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            overflow: 'hidden',
            [t.breakpoints.down('sm')]: {
                width: '13em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <img src={logo} alt="Logo" className="navbar--logo" />
                <ul className={classes.navLinks}>
                    <li>
                        <NavLink to="/" smooth className={classes.navLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#about" smooth className={classes.navLink}>
                            Who am I?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#why" smooth className={classes.navLink}>
                            Why me?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#skills" smooth className={classes.navLink}>
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#answers" smooth className={classes.navLink}>
                            Answers
                        </NavLink>
                    </li>
                </ul>
                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                    id='navicon'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={handleDrawerClose}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <ul>
                    <li>
                        <NavLink to="/" smooth onClick={handleDrawerClose}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#about" smooth onClick={handleDrawerClose}>
                            Who am I?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#why" smooth onClick={handleDrawerClose}>
                            Why me?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#skills" smooth onClick={handleDrawerClose}>
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/#answers" smooth onClick={handleDrawerClose}>
                            Answers
                        </NavLink>
                    </li>
                </ul>
            </Drawer>
        </div>
    );
}

export default Navbar;
