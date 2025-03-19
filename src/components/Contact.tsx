import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                                <EmailIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Email
                                    </Typography>
                                    <Button
                                        href="mailto:jamesgeorgepratt@gmail.com"
                                        variant="text"
                                        color="primary"
                                        sx={{ p: 0 }}
                                    >
                                        jamesgeorgepratt@gmail.com
                                    </Button>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Phone
                                    </Typography>
                                    <Button
                                        href="tel:2035582040"
                                        variant="text"
                                        color="primary"
                                        sx={{ p: 0 }}
                                    >
                                        (203) 558-2040
                                    </Button>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <LocationOnIcon color="primary" sx={{ fontSize: 30 }} />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        Location
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        77 Park Dr, Boston, MA 02215
                                    </Typography>
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
                    </Typography>
                </Box>
            </motion.div>
        </Container>
    );
};

export default Contact; 