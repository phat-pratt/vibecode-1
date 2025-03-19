import { Container, Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h3" component="h1" gutterBottom>
                    Education
                </Typography>
            </motion.div>

            <Box sx={{ mt: 4 }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
                        <Typography variant="h5" component="h2" color="primary" gutterBottom>
                            University of Wisconsin-Madison
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Bachelor of Science in Computer Science and Applied Mathematics
                        </Typography>
                    </Paper>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Paper elevation={2} sx={{ p: 4 }}>
                        <Typography variant="h5" component="h2" color="primary" gutterBottom>
                            The Lawrenceville School
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            High School Diploma
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Recipient of the Tiihonen Award for Strength, Leadership and Integrity (2015)
                        </Typography>
                    </Paper>
                </motion.div>
            </Box>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Athletics & Activities
                    </Typography>
                    <Paper elevation={2} sx={{ p: 4 }}>
                        <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                            <li>Wisconsin D1 Men's Rowing</li>
                            <li>UW-Madison Track and Field Club</li>
                            <li>Long distance swimming</li>
                            <li>Surfing</li>
                        </Typography>
                    </Paper>
                </Box>
            </motion.div>
        </Container>
    );
};

export default Education; 