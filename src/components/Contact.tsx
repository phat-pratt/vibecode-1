import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Contact Me
                </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Paper elevation={2} sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Location
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Boston, MA
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <LinkedInIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        LinkedIn
                                    </Typography>
                                    <Button
                                        href="https://www.linkedin.com/in/james-pratt-0bb62195/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="text"
                                        color="primary"
                                        sx={{ p: 0 }}
                                    >
                                        Connect on LinkedIn
                                    </Button>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <GitHubIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        GitHub
                                    </Typography>
                                    <Button
                                        href="https://github.com/phat-pratt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="text"
                                        color="primary"
                                        sx={{ p: 0 }}
                                    >
                                        View My Projects
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </Box>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Let's Connect
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        I'm always open to discussing new opportunities and interesting projects.
                        Feel free to reach out through LinkedIn.
                    </Typography>
                </Box>
            </motion.div>
        </Container>
    );
};

export default Contact; 