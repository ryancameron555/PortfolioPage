/** @format */
import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/rwcLogo.svg';

const pages = [
  { name: 'About me', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Documents', id: 'documents' },
  { name: 'Contact me', id: 'contact' },
];

const myName = 'RYAN CAMERON';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Update the selector to correctly identify your header
      const header =
        document.querySelector('header') ||
        document.querySelector('.header-class');
      const headerOffset = header ? header.offsetHeight : 0;

      // Calculate the position to scroll to
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      // Smooth scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        backgroundColor: theme.palette.background.default,
        marginBottom: '10vh',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                display: { xs: 'none', md: 'flex' },
                height: '7.5vh',
                // marginRight: '7.5',
              }}
            />
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 6, display: { xs: 'none', md: 'flex' } }} />

          {/* My name */}
          <Box
            sx={{
              flexGrow: 7,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontFamily: theme.typography.h1.fontFamily,
                fontWeight: theme.typography.h1.fontWeight,
                letterSpacing: theme.typography.h1.letterSpacing,
                color: theme.palette.text.primary,
                textDecoration: 'none',
                overflowWrap: 'break-word',
                wordBreak: 'keep-all',
                whiteSpace: 'pre-wrap',
                maxWidth: { xs: '100%', md: 'auto' },
                textShadow: `0 0 10px ${theme.palette.secondary.main}`, // Adjusted text shadow for permanent glow
              }}
            >
              {myName}
            </Typography>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

          {/* Small screen hamburger menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
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
                maxWidth: '100%',
                maxHeight: '100%',
                '& .MuiPaper-root': {
                  backgroundColor: theme.palette.background.default,
                  padding: theme.spacing(2),
                  boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  // component="a"
                  // href={`#${page.id}`}
                  onClick={() => handleNavLinkClick(page.id)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Large screen page links */}
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                // component="a"
                // href={`#${page.id}`}
                onClick={() => handleNavLinkClick(page.id)}
                sx={{
                  fontFamily: theme.typography.h4.fontFamily,
                  fontWeight: theme.typography.h4.fontWeight,
                  letterSpacing: theme.typography.h4.letterSpacing,
                  color: theme.palette.text.primary,
                  my: 2,
                  display: 'block',
                  '&:hover': {
                    color: theme.palette.primary.main, // Green color on hover
                    textShadow: '0px 0px 12px rgba(32, 194, 14, 0.9)', // Text shadow on hover
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
