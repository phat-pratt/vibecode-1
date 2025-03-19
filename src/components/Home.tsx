import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Container>
            <Box
                sx={{
                    minHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 4,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        James Pratt
                    </Typography>
                    <Typography variant="h4" color="primary" gutterBottom>
                        Senior Software Engineer
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <Typography variant="h6" color="textSecondary" sx={{ maxWidth: 800, mb: 4 }}>
                        Experienced software engineer specializing in React Native and TypeScript development.
                        Currently working remotely at Better Collective / The Action Network, focusing on
                        mobile app development and team leadership.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/experience"
                            size="large"
                        >
                            View Experience
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            href="/contact"
                            size="large"
                        >
                            Contact Me
                        </Button>
                    </Box>
                </motion.div>
            </Box>
        </Container>
    );
};

export default Home; 