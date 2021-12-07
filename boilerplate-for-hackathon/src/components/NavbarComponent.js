import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Button, Avatar, SvgIcon, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
const pages = ['Home', 'Products', 'Contact', 'About'];
const userAuthTrue = ['Profile', 'Account', 'Dashboard', 'Logout'];
const userAuthFalse = ['Login', 'Create Account'];

const NavbarComponent = () => {
    const navigate = useNavigate()

    const state = useSelector((a) => a)
    const [userAuth, setUserAuth] = useState()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        if (page.toLowerCase() === 'home') {
            navigate('/')
        }
        else if(page.toLowerCase() === 'create account') {
            navigate('/signup')
        }
        else {
            navigate(`/${page.toLowerCase()}`)
        }
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (e) => {
        setAnchorElUser(null);

    };

    const handleUserCart = () => {

    }

    useEffect(() => {
        setUserAuth(state.userAuthReducer.userAuth)


    }, [state.userAuthReducer.userAuth])




    return (

        <AppBar position="static">
            <Container >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO SPACE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO SPACE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Stack direction='row' spacing={3} alignItems='center'>
                            <SvgIcon onClick={handleUserCart} fontSize="medium">
                                <FaShoppingCart />
                            </SvgIcon>
                            {userAuth ? <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton> : <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src="/static/images/avatar/2.jpg" />
                            </IconButton>}

                        </Stack>
                        {userAuth ? <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userAuthTrue.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseNavMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> : <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userAuthFalse.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseNavMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavbarComponent;
