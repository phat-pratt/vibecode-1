import { AppBar, Toolbar, Button, Box, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Experience', path: '/experience' },
        { label: 'Skills', path: '/skills' },
        { label: 'Education', path: '/education' },
        { label: 'Contact', path: '/contact' },
    ];

    return (
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2, margin: '0 auto' }}>
                    {navItems.map((item) => (
                        <Button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            sx={{
                                color: isActive(item.path) ? theme.palette.primary.main : '#666',
                                fontWeight: isActive(item.path) ? 600 : 400,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar; 